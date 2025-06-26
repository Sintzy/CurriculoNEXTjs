import { PDFDocument, rgb } from "pdf-lib";
import fontkit from "@pdf-lib/fontkit";
import type { RESUME_DATA } from "@/data/resume-data";
import path from "path";
import fs from "fs";

/**
 * Loads a font from /public/fonts/ so it works in both
 * Edge‑runtime (fetch) and Node (fs.readFileSync).
 */
async function loadFont(pathFromPublic: string): Promise<ArrayBufferLike> {
  try {
    const url = new URL(`/public/fonts/${pathFromPublic}`, import.meta.url);
    return await fetch(url).then(r => r.arrayBuffer());
  } catch {
    const p = path.join(process.cwd(), "public", "fonts", pathFromPublic);
    return fs.readFileSync(p).buffer;
  }
}

/** Sanitises fancy unicode chars that the default PDF encodings dislike. */
const clean = (txt: string) =>
  txt
    .replace(/[\u2011-\u2014]/g, "-") // dashes → hyphen
    .replace(/\u00A0/g, " "); // NBSP → space

export async function generateResumePdf(
  data: typeof RESUME_DATA
): Promise<Uint8Array> {
  /* ------------------------------------------------------------- */
  /* PDF + fonts                                                   */
  /* ------------------------------------------------------------- */
  const pdf = await PDFDocument.create();
  pdf.registerFontkit(fontkit);
  const [regularRaw, boldRaw] = await Promise.all([
    loadFont("Inter_18pt-Regular.ttf"),
    loadFont("Inter_18pt-Bold.ttf"),
  ]);
  const fontRegular = await pdf.embedFont(new Uint8Array(regularRaw));
  const fontBold = await pdf.embedFont(new Uint8Array(boldRaw));

  /* ------------------------------------------------------------- */
  /* Page metrics                                                  */
  /* ------------------------------------------------------------- */
  const W = 595.28; // A4 portrait (pt)
  const H = 841.89;
  const marginX = 50;
  const marginTop = 60;
  const marginBottom = 60;
  const maxLineWidth = (indent = 0) => W - 2 * marginX - indent;

  let page = pdf.addPage([W, H]);
  let y = H - marginTop;

  const newPage = () => {
    page = pdf.addPage([W, H]);
    y = H - marginTop;
  };

  const teal = rgb(0.055, 0.46, 0.565);

  /* ------------------------------------------------------------- */
  /* Drawing helpers                                               */
  /* ------------------------------------------------------------- */
  const ensureRoom = (needed = 40) => {
    if (y - needed < marginBottom) newPage();
  };

  const section = (title: string) => {
    ensureRoom(60);
    y -= 32;
    page.drawText(clean(title), { x: marginX, y, size: 14, font: fontBold, color: teal });
    y -= 20;
  };

  const paragraph = (text: string, size = 10.5, indent = 0) => {
    const words = clean(text).split(" ");
    let line = "";

    /** Flush current line, adding page breaks if necessary */
    const flush = () => {
      if (!line) return;
      ensureRoom(size + 4);
      page.drawText(line, { x: marginX + indent, y, size, font: fontRegular });
      y -= size + 4;
      line = "";
    };

    words.forEach((w) => {
      const test = line ? `${line} ${w}` : w;
      const lineWidth = fontRegular.widthOfTextAtSize(test, size);
      if (lineWidth > maxLineWidth(indent)) {
        flush();
        line = w;
      } else {
        line = test;
      }
    });
    flush();
  };

  /* ------------------------------------------------------------- */
  /* Header                                                        */
  /* ------------------------------------------------------------- */
  page.drawText(clean(data.name), { x: marginX, y, size: 24, font: fontBold, color: teal });
  y -= 28;
  const contact = `${data.location} • ${data.contact.email} • GitHub: ${data.contact.social[0].url}`;
  page.drawText(clean(contact), { x: marginX, y, size: 10, font: fontRegular, opacity: 0.7 });

  /* ------------------------------------------------------------- */
  /* Body                                                          */
  /* ------------------------------------------------------------- */
  section("Profile");
  paragraph(data.about.trim());

  section("Skills");
  paragraph(data.skills.join(", "));

  section("Education");
  data.education.forEach((e) => paragraph(`${e.school} (${e.start} – ${e.end})`));

  section("Experience");
  data.work.forEach((w) => {
    paragraph(`${w.title}, ${w.company} (${w.start} – ${w.end || "Present"})`);
    paragraph(w.description, 10, 12);
  });

  section("Projects");
  data.projects.forEach((p) => {
    paragraph(`${p.title} – ${p.techStack.join(", ")}`);
    paragraph(p.description, 10, 12);
  });

  section("Languages");
  paragraph(data.languages.map((l) => `${l.name} (${l.level})`).join(", "));

  /* ------------------------------------------------------------- */
  return pdf.save();
}
