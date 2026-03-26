export type SocialLink = { label: string; href: string };

export type Project = {
  name: string;
  description: string;
  stack: string[];
  href?: string;
};

export type ProjectCategory = {
  title: string;
  summary: string;
  points: string[];
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  highlights: string[];
};

export const PROFILE = {
  name: "R. A. Kavithra Rupasinghe",
  headline: "Software Engineer",
  location: "Sri Lanka ",
  summary:
    "I am a fourth-year Computer Science undergraduate at the Informatics Institute of Technology (IIT) with over a year of industry experience, including working as a Software Engineering Intern. Through my experience in multiple organizations, I have gained a strong understanding of professional work environments, teamwork, and industry practices. I am passionate about contributing to innovative projects while continuously developing my technical and problem-solving skills in alignment with organizational goals.",
  socials: [
    { label: "Email", href: "https://mail.google.com/mail/?view=cm&fs=1&to=kmethnula@gmail.com" },
    { label: "LinkedIn", href: "https://linkedin.com/in/kavithra-rupasinghe" },
    { label: "GitHub", href: "https://github.com/Kavithra2002" },
  ] satisfies SocialLink[],
};

export const SKILLS = {
  primary: [
    "React",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Node.js",
    "REST APIs",
    "SQL",
    "Git",
  ],
  secondary: ["Webpack", "Three.js", "Radix UI", "Figma", "Testing (Jest/RTL)"],
};

export const EXPERIENCE: Experience[] = [];

export const PROFESSIONAL_PROJECTS: ProjectCategory = {
  title: "Professional Projects",
  summary: "Industry work delivered in professional environments.",
  points: [
    "MDM — Master Data Management Application: Designed UI in Figma and developed frontend (React) and backend (Node.js) for a master data management solution for HUTCH.",
    "Snow Converter Application: Created an internal data conversion application, UI designing using Figma and frontend and backend development with React and Node.js.",
    "SAPData Warehouse Project: Dashboard development using Power BI to support internal application for business insights.",
    "Company Website Development (Startup): Designed and developed the official company website using modern technologies, contributing to the organization’s digital presence and branding.",
    "Research Supporter System: Collecting, managing, and analyzing data within a centralized platform, improving efficiency and accessibility of research insights.",
  ],
};

export const UNIVERSITY_PROJECTS: ProjectCategory = {
  title: "University Projects",
  summary: "Academic projects completed during my degree.",
  points: [
    "Food Store Management System: Developed a food supply management and customer row management system using Python.",
    "University Grading System: Using Java, developed a grading system according to users input data.",
    "Tourism Website: Developed a website about Sri Lankan Tourism using HTML and CSS.",
    "Simple Programs (Simple Games, Android Apps): A flag choosing game and a calculator apps using Kotlin.",
    "Software Development Group project: Developed a Tea Factory Management system using Java and React Native to tranfer the paper based Tea Factory Management system in to a Digitalized System.",
    "Final Year Project — Supply Chain Management Prediction Model: Developing a predictive model to analyze and forecast supply chain operations for improved decision-making.",
  ],
};

/** Modules completed as part of the degree (two columns on detail page). */
export const ACADEMIC_MODULES: string[] = [
  "Professional Development",
  "Web Development",
  "Computer System Fundamentals",
  "Trends in Computer Science",
  "Mathematics for Computing",
  "Database Systems",
  "Object-Oriented Programming",
  "Machine Learning and Data Mining",
  "Client-Server Architecture",
  "Internet of Things (IoT)",
  "Usability Testing and Evaluation",
  "Applied Artificial Intelligence (AI)",
  "Mobile Application Development",
  "Cyber Security",
  "Software Development Group Project",
  "Final Year Project",
];

export type ProfessionalDevelopmentCourse = {
  course: string;
  completed: string;
};

export const PROFESSIONAL_DEVELOPMENT_IIT: ProfessionalDevelopmentCourse[] = [
  { course: "Java Programming with OOP", completed: "May 2023" },
  { course: "Web Development", completed: "May 2023" },
];

/** Workshops and programmes (University Participants detail page). */
export const UNIVERSITY_PARTICIPANTS_ITEMS: string[] = [
  "Professional Development Program — Skill Up",
  "Agile Methodology — Skill Up 2.0",
  "GitHub Community Workshops",
  "UI / UX Workshops",
  "Software Development Group project",
];

