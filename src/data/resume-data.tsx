import Link from "next/link";
import { GitHubIcon } from "../components/icons/GitHubIcon";
import { LinkedInIcon } from "../components/icons/LinkedInIcon";
import { XIcon } from "../components/icons/XIcon";
import { InstagramIcon } from "../components/icons/InstagramIcon";
import { DiscordIcon } from "@/components/icons/DiscordIcon";

export const RESUME_DATA = {
  name: "Miguel Menezes",
  initials: "mnzs",
  location: "Lisboa, Portugal",
  locationLink: "https://www.google.com/maps/place/Lisboa",
  about: `A 16 year old front‑end‑focused web‑development enthusiast with a passion for turning ideas into polished, user‑friendly interfaces. Experienced with React and Next.js, comfortable working both autonomously and in cross‑functional teams, and always eager to experiment with new technologies to build meaningful products.`,
  summary: (
    <>
      Curious about what I\'m currently exploring? Read my {" "}
      <Link className="underline" href="https://smenezes.pt/blog">blog</Link>.
    </>
  ),
  avatarUrl: "https://r2.fivemanage.com/icFvuIKk9ch17iXgkGhC0/image.png",
  personalWebsiteUrl: "https://smenezes.pt",
  contact: {
    email: "miguelsantosmenezes@proton.me",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Sintzy",
        icon: GitHubIcon,
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/migueldsmenezes/",
        icon: InstagramIcon,
      },
      {
        name: "Discord",
        url: "https://discord.com/users/852948371782369310",
        icon: DiscordIcon,
      },
    ],
  },
  education: [
    {
      school: "Colégio de Santa Doroteia",
      degree: "Secondary Education – Sciences & Technologies track",
      start: "2019",
      end: "Present",
    },
  ],
  work: [
    {
      company: "Fórum Whaou – Jornadas da Teologia do Corpo",
      link: "https://www.jornadas-tdc.org/",
      badges: ["Event Support", "AV Team"],
      title: "Audiovisual Team Assistant",
      logo: "",
      start: "2024",
      end: "2025",
      description:
        `Configured and monitored audio‑visual equipment, guaranteeing seamless live sessions and recordings for a 300‑participant conference.`,
    },
    {
      company: "Lar Santa Joana Princesa",
      link: "https://scml.pt/equipamento/residencia-sta-joana-princesa/",
      badges: ["Volunteer"],
      title: "Volunteer – Elderly Support",
      logo: "",
      start: "2024",
      end: "2024",
      description:
        `Provide companionship, organize leisure activities, and assist staff, fostering a warm and caring environment for residents.`,
    },
    {
      company: "Banco Alimentar",
      link: "https://www.bancoalimentar.pt/",
      badges: ["Volunteer"],
      title: "Volunteer – Logistics",
      logo: "",
      start: "2024",
      end: "Present",
      description:
        `Collect, sort, and distribute food donations during national drives, contributing to local efforts against hunger and waste.`,
    },
    {
      company: "Campo de Férias Confia",
      link: "https://campodeferiasconfia.pt",
      badges: ["Animator"],
      title: "Youth Camp Animator",
      logo: "",
      start: "2023",
      end: "Present",
      description:
        `Design and lead recreational and educational activities for children and teenagers, ensuring safety and engagement throughout the camp.`,
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "Express.js",
    "Next.js",
    "C#",
    "MS SQL",
    "Tailwind CSS",
    "MongoDB",
    "FiveM server management & development",
    "Basic Network Engineering",
  ],
  projects: [
    {
      title: "Kairos – Bus Information Display System",
      techStack: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "MongoDB",
        "OpenWeatherMap API",
        "OpenRouteService API",
        "Discord API",
        "Spotify API",
      ],
      description:
        `Real‑time dashboard for buses combining live ETA, distance, weather data, and now‑playing music, served to onboard screens and Discord channels.`,
      link: {
        label: "GitHub repo",
        href: "https://github.com/Sintzy/kairos",
      },
    },
    {
      title: "Cached Image Host",
      techStack: ["Express.js", "Axios", "Multer"],
      description:
        `Lightweight file‑sharing service that issues a 5‑digit code for each upload; files remain accessible for up to 3 months before automatic cleanup.`,
      link: {
        label: "GitHub repo",
        href: "https://github.com/Sintzy/CachedImageHost",
      },
    },
    {
      title: "Carros da Cristina – Dealership Management Portal",
      techStack: ["C#", "AngularJS", "MS SQL"],
      description:
        `End‑to‑end web interface that streamlines inventory, customer records, and sales workflows for a fictional car dealership.`,
      link: {
        label: "Read more",
        href: "",
      },
    },
    {
      title: "OMG Black Guy Generator",
      techStack: ["Next.js", "Canva API", "Tailwind CSS"],
      description:
        `Playful web app that lets users generate meme‑style images through an easy Canva‑powered interface.`,
      link: {
        label: "GitHub repo",
        href: "https://github.com/Sintzy/OMGBlackGuyGenerator",
      },
    },
  ],
  languages: [
    {
      name: "Portuguese",
      level: "Native",
    },
    {
      name: "English",
      level: "Upper‑Intermediate (B2)",
    },
    {
      name: "Spanish",
      level: "Elementary (A2)",
    },
  ],
  hobbies: [
    {
      title: "Organ Performance",
      techStack: ["music", "creativity", "practice"],
      description:
        `Exploring classical and contemporary repertoires on the pipe organ – a balance of technical precision and artistic expression.`,
      link: {
        label: "What is an organ?",
        href: "https://en.wikipedia.org/wiki/Organ_(music)",
      },
    },
    {
      title: "Arduino & IoT Experiments",
      techStack: ["electronics", "microcontrollers", "DIY"],
      description:
        `Prototyping sensors, LED arrays, and quirky gadgets to scratch the maker itch and learn embedded basics.`,
      link: {
        label: "arduino.cc",
        href: "https://www.arduino.cc/",
      },
    },
    {
      title: "Home‑Lab Networking",
      techStack: ["servers", "switches", "routing"],
      description:
        `Deploying small‑scale network topologies with pfSense, VMware, and Unifi gear to deepen understanding of systems administration.`,
      link: {
        label: "Wireshark? Yes please!",
        href: "https://www.wireshark.org/",
      },
    },
    {
      title: "Photography & AV Systems",
      techStack: ["photography", "video", "event tech"],
      description:
        `Capturing moments and designing audio‑visual setups that make events look and sound outstanding.`,
      link: {
        label: "AV basics",
        href: "https://livtechnical.com/what-is-an-av-system/",
      },
    },
    {
      title: "Silly Coding Projects",
      techStack: ["C#", "JavaScript", "fun"],
      description:
        `Building small bots, scripts, and web experiments that exist purely to entertain friends and sharpen skills.`,
      link: {
        label: "Coding humour",
        href: "https://www.explainxkcd.com/wiki/index.php/303:_Compiling",
      },
    },
    {
      title: "Badminton",
      techStack: ["sports", "fitness", "coordination"],
      description:
        `Keeping agile and competitive on the court – a perfect counterbalance to screen time.`,
      link: {
        label: "Badminton basics",
        href: "https://pt.wikipedia.org/wiki/Badm%C3%ADnton",
      },
    },
  ],
} as const;
