// app/api/resume/route.ts (Next .js 14 + Edge Runtime)
import { NextResponse } from "next/server";
import { RESUME_DATA } from "@/data/resume-data";
import { generateResumePdf } from "@/lib/pdf/generateResumePdf";

export async function GET() {
  const bytes = await generateResumePdf(RESUME_DATA);
  return new NextResponse(bytes, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": "inline; filename=Miguel_Menezes_Resume.pdf",
    },
  });
}
