import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    twitter,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Full Stack Web Application Developer",
        company_name: "Current",
        icon: github, // Using GitHub icon as placeholder for generic dev role
        iconBg: "#accbe1",
        date: "Current",
        points: [
            "Built and maintained production-ready web applications.",
            "Developed clean and responsive user interfaces.",
            "Integrated frontend with backend APIs and databases.",
            "Improved performance and fixed production issues.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/devbysaad',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/muhammad-saad-972185381/',
    },
    {
        name: 'Twitter',
        iconUrl: twitter,
        link: 'https://x.com/maisaadhon',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'CreavixAI – AI-Integrated Creative Suite',
        description: 'Full-stack MERN application deployed on Vercel. Integrated AI writing and image generation tools. Built using React 19, Tailwind CSS 4, Clerk Auth, and Neon PostgreSQL.',
        link: 'https://creavix.vercel.app/',
        githubLink: 'https://github.com/devbysaad/Creavix',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Songplayer – Mood-Based Music App',
        description: 'MERN app that detects user mood using face recognition. Automatically plays music based on emotion analysis. Modular backend with ImageKit for media handling.',
        link: 'https://moodytyunes.vercel.app/',
        githubLink: 'https://github.com/devbysaad/Moody-Player',
    }
];
