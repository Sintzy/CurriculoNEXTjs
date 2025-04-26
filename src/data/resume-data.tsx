import Link from "next/link";
import { GitHubIcon } from "../components/icons/GitHubIcon";
import { LinkedInIcon } from "../components/icons/LinkedInIcon";
import { XIcon } from "../components/icons/XIcon";
import { InstagramIcon } from "../components/icons/InstagramIcon";
import {DiscordIcon} from "@/components/icons/DiscordIcon";

export const RESUME_DATA = {
  name: "Miguel Menezes",
  initials: "mnzs",
  location: "Lisboa, Portugal",
  locationLink: "https://www.google.com/maps/place/Lisboa",
  about:
    "I am a 16-year-old student passionate about web development. I enjoy creating web applications and exploring new technologies. I'm always looking to learn and improve my skills, especially in front-end development. I work well both independently and in a team, and I'm excited to grow as a developer.\n" +
    "\n",
  summary:
    <>
      Check out my {" "}
      <Link className="underline" href="https://jxnl.github.io/blog/">blog</Link>, if you are looking for my writing.  
    </>,
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
      degree: "",
      start: "2019",
      end: "Current",
    },
  ],
  work: [
    {
      company: "Fórum Whaou – Jornadas da Teologia do Corpo",
      link: "https://www.jornadas-tdc.org/",
      badges: ["Event Support", "AV Team"],
      title: "Audiovisual Team Assistant",
      logo: "",
      start: "2024 /",
      end: "2025",
      description:
        "Worked behind the scenes managing audio and visual setups, ensuring smooth technical operations for a conference.",
    },
    {
      company: "Lar Santa Joana Princesa",
      link: "https://scml.pt/equipamento/residencia-sta-joana-princesa/",
      badges: ["Voluntary Work"],
      title: "Volunteer",
      logo: "",
      start: "2024",
      end: "",
      description:
        "Supported elderly residents through companionship and meaningful conversations, helping to create a warm and caring environment.",
    },
    {
      company: "Banco Alimentar",
      link: "https://www.bancoalimentar.pt/",
      badges: ["Voluntary Work"],
      title: "Volunteer",
      logo: "",
      start: "2025",
      end: "",
      description:
        "Assisted in collecting, sorting, and distributing food donations during national food drives, contributing to the fight against hunger and food waste.",
    },
    {
      company: "Campo de Férias Confia",
      link: "https://campodeferiasconfia.pt",
      badges: ["Animator"],
      title: "Animator",
      logo: "",
      start: "",
      end: "",
      description:
        "I am a helper at the Campo de Férias Confia, where I assist in organizing and leading activities for children and teenagers. My role involves ensuring a safe and enjoyable environment for all participants.",
    },
  ],
  skills: [
    "Javascript",
    "ExpressJS",
    "NextJS",
    "C#",
    "MsSQL",
    "Tailwind",
    "Network Engeineering",
    "Organ Music Player"
  ],
  projects: [
    {
      title: "Kairos (Bus Information Display System)",
      techStack: ["NextJS", "React", "OpenWeatherMap API", "OpenRouteService API", "Discord API", "Spotify API", "Tailwind"],
      description:
        "Real‑time bus information display: weather, now‑playing music, and live ETA & distance via OpenRouteService",
      link: {
        label: "learn more at",
        href: "https://github.com/Sintzy/kairos",
      },
    },
    {
      title: "Cached Image Host",
      techStack: ["ExpressJS", "Axios", "Multer"],
      description:
        "A simple way of sending files between people. You send the file and receive a 5-digit code. On the download page you can enter the code and download the file. The files are valid for 3 months.\n" +
        "\n",
      link: {
        label: "learn more at",
        href: "https://github.com/Sintzy/CachedImageHost",
      },
    },
    {
      title: "Carros da Cristina",
      techStack: ["C#", "AngularJS", "MSSQL"],
      description:
        "A car dealership management system with a web interface for managing cars, customers, and sales.",
      link: {
        label: "Car dealership",
        href: "",
      },
    },
    {
      title: "Image Manipulation",
      techStack: ["NextJS", "Canva", "Tailwind"],
      description:
        "A simple web application that allows users to create funny omg images using the Canva API.",
      link: {
        label: "omg",
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
      level: "Upper Intermediate (B2)",
    },
    {
      name: "Spanish",
      level: "Elementary (A2)",
    }

  ],
  hobbies: [
    {
      title: "Playing the Organ",
      techStack: ["music", "creativity", "practice"],
      description:
        "Exploring classical and modern music through the organ — a blend of technical discipline and creative expression.",
      link: {
        label: "My favorite instrument",
        href: "https://en.wikipedia.org/wiki/Organ_(music)",
      },
    },
    {
      title: "Arduino Projects",
      techStack: ["electronics", "microcontrollers", "DIY"],
      description:
        "Tinkering with sensors, LEDs, and small motors to build fun or absurd gadgets — sometimes useful, often just cool.",
      link: {
        label: "arduino.cc",
        href: "https://www.arduino.cc/",
      },
    },
    {
      title: "Network Engineering Experiments",
      techStack: ["servers", "switches", "routing"],
      description:
        "Messing around with network topologies, server configs, and switch management — for fun and learning.",
      link: {
        label: "Wireshark? Yes please",
        href: "https://www.wireshark.org/",
      },
    },
    {
      title: "Silly Programming Projects",
      techStack: ["c#", "javascript", "just for fun"],
      description:
        "Coding ridiculous tools, bots, and experiments that solve no problem but make people laugh (or at least raise an eyebrow).",
      link: {
        label: "My coding vibe",
        href: "https://www.explainxkcd.com/wiki/index.php/303:_Compiling",
      },
    },
    {
      title: "Outdoor Walks",
      techStack: ["mindfulness", "nature", "relaxation"],
      description:
        "Long walks in nature to recharge, spark creativity, and disconnect from the digital world.",
      link: {
        label: "Get outside",
        href: "https://www.nationalgeographic.com/environment/article/why-spending-time-outside-is-so-good-for-you",
      },
    },
  ],
} as const;
