import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Project from '../models/Project.js';
import Skill from '../models/Skill.js';
import Contact from '../models/Contact.js';

dotenv.config();

const projects = [
    {
        name: 'CreavixAI – AI-Integrated Creative Suite',
        description: 'A comprehensive MERN stack application that integrates cutting-edge AI technologies for creative content generation. Features include AI-powered text generation using Gemini API, DALL·E image generation with Cloudinary AI for storage and optimization, and a modern, responsive interface built with React 19 and Tailwind CSS 4.',
        technologies: [
            'MongoDB',
            'Express.js',
            'React 19',
            'Node.js',
            'Tailwind CSS 4',
            'Gemini API',
            'DALL·E',
            'Cloudinary AI',
            'Clerk Auth',
            'Neon PostgreSQL',
            'Vercel'
        ],
        features: [
            'AI-powered text generation with Gemini API',
            'DALL·E image generation and manipulation',
            'Cloudinary AI integration for intelligent asset management',
            'Secure authentication with Clerk',
            'Modern React 19 features and optimizations',
            'Responsive design with Tailwind CSS 4',
            'Deployed on Vercel for optimal performance'
        ],
        liveUrl: 'https://creavix.vercel.app',
        githubUrl: 'https://github.com/muhammadsaad/creavixai',
        order: 1
    },
    {
        name: 'Songplayer – Mood-Based Music App',
        description: 'An innovative MERN stack music application that uses real-time emotion detection to automatically select and play songs matching your current mood. Built with Face API for emotional analysis, the app provides a unique, personalized music experience with seamless playback and intelligent song recommendations.',
        technologies: [
            'MongoDB',
            'Express.js',
            'React',
            'Node.js',
            'Face API',
            'ImageKit',
            'WebRTC',
            'REST API'
        ],
        features: [
            'Real-time emotion detection using Face API',
            'Automatic mood-based song selection',
            'Modular backend architecture for scalability',
            'ImageKit integration for efficient file management',
            'Seamless music playback with playlist management',
            'Responsive and intuitive user interface',
            'RESTful API design for data management'
        ],
        liveUrl: 'https://moodytyunes.vercel.app',
        githubUrl: 'https://github.com/muhammadsaad/songplayer',
        order: 2
    }
];

const skills = [
    {
        category: 'Frontend',
        skills: ['React.js', 'Next.js', 'JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Redux', 'Context API'],
        order: 1
    },
    {
        category: 'Backend',
        skills: ['Node.js', 'Express.js', 'RESTful APIs', 'GraphQL', 'Microservices', 'WebSockets', 'Server-Side Rendering'],
        order: 2
    },
    {
        category: 'Databases',
        skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Neon', 'Redis', 'Mongoose', 'Prisma'],
        order: 3
    },
    {
        category: 'DevOps & Tools',
        skills: ['Git', 'GitHub', 'Docker', 'Vercel', 'AWS', 'CI/CD', 'Webpack', 'Vite', 'npm/yarn'],
        order: 4
    },
    {
        category: 'Authentication & Storage',
        skills: ['Clerk Auth', 'JWT', 'OAuth', 'Cloudinary', 'ImageKit', 'AWS S3'],
        order: 5
    },
    {
        category: 'Core Strengths',
        skills: [
            'Production-grade application development',
            'Clean architecture & design patterns',
            'Scalable backend systems',
            'Modern JavaScript frameworks',
            'AI integration (Gemini, DALL·E)',
            'Real-time processing',
            'Performance optimization',
            'Debugging & troubleshooting'
        ],
        order: 6
    }
];

const contact = {
    name: 'Muhammad Saad',
    title: 'Full Stack Engineer',
    phone: '0333-5959-829',
    email: 'dev.bysaad@gmail.com',
    linkedin: 'https://linkedin.com/in/muhammadsaad',
    github: 'https://github.com/muhammadsaad'
};

const seedDatabase = async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('✅ Connected to MongoDB');

        // Clear existing data
        await Project.deleteMany({});
        await Skill.deleteMany({});
        await Contact.deleteMany({});
        console.log('🗑️  Cleared existing data');

        // Insert new data
        await Project.insertMany(projects);
        console.log('✅ Projects seeded successfully');

        await Skill.insertMany(skills);
        console.log('✅ Skills seeded successfully');

        await Contact.create(contact);
        console.log('✅ Contact information seeded successfully');

        console.log('🎉 Database seeded successfully!');
        process.exit(0);
    } catch (error) {
        console.error('❌ Error seeding database:', error);
        process.exit(1);
    }
};

seedDatabase();
