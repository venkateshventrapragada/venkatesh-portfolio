import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  // {
  //   name: "Projects",
  //   hash: "#projects",
  // },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

type Experience = {
  title: string;
  company: string;
  description: React.ReactNode;
  icon: React.ReactNode;
  date: string;
};

export const experiencesData: Experience[] = [
  {
    title: "Sr. Mobile App Developer",
    company: "Noke Inc., GA",
    description: (
      <ul className="list-disc mt-1 font-normal text-gray-700 dark:text-white/75">
        <li className="mb-2">
          🚀 Learn and built responsive UI, optimizing pages for fast response
          using React-Native, Typescript, Swift, Kotlin.
        </li>
        <li className="mb-2">
          🔄 Built reusable components, documented application changes, and
          worked on multiple projects and updates.
        </li>
      </ul>
    ),
    icon: React.createElement(CgWorkAlt),
    date: "2023 - Present",
  },
  {
    title: "Sr. Software Developer",
    company: "Walmart Inc., AR",
    description: (
      <ul className="list-disc mt-1 font-normal text-gray-700 dark:text-white/75">
        <li className="mb-2">
          🚀 Worked with advanced mobile & web development technologies like React-Native, ReactJS,
          NextJS, TypeScript, ECMAScript6, JavaScript, Tailwind CSS, Material
          UI, CSS, HTML, and JSON.
        </li>
        <li className="mb-2">
          🔄 Worked on updated versions of React-Native, React, React-RouterDom, React-Hooks,
          and more.
        </li>
        <li className="mb-2">🔗 Worked on REST API and API integration.</li>
        <li className="mb-2">
          🔥 Developed dynamic applications using FIREBASE.
        </li>
        <li className="mb-2">
          🧠 Specialized in building logic for maximum performance across a vast
          array of devices and browsers.
        </li>
        <li className="mb-2">
          🤝 Coordinated with the development team and worked on projects like
          E-COMMERCE, ERP Management System, Inventory Management System, and
          more.
        </li>
      </ul>
    ),
    icon: <FaReact />,
    date: "2021 - 2023",
  },
];

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "React-Native",
  "JavaScript",
  "TypeScript",
  "Swift",
  "Kotlin",
  "Java",
  "CSS",
  "React",
  "Next.js",
  "Node.js",
  "Git",

  "Rest API",

  // "Redux",
  "GraphQL",
  // "Apollo",
  "Firebase",

  // "Python",
  // "Django",
  // "Framer Motion",
  "Context API",
] as const;
