// ============================================================
// portfolioData.js — Centralized configuration for Aditya Joshi's Portfolio
// ============================================================

import imgX3 from '../assets/images/X3 hackathon.jpeg';
import imgBlockforge from '../assets/images/Blockforge Hackathon.jpeg';
import imgNullpoint from '../assets/images/nullpointctf.jpeg';

export const personalInfo = {
  name: "Aditya Joshi",
  firstName: "Aditya",
  brandName: "Aditya Joshi",
  title: "Web Developer & Blockchain Enthusiast",
  location: "Belgaum, Karnataka, India",
  phone: "+91 8431848445",
  emails: {
    primary: "adityajoshi18vk@gmail.com",
    secondary: "",
  },
  summary:
    "B.Tech Computer Science Engineering student with a strong interest in Web Development and Blockchain Technology. Passionate about building secure systems, solving real-world problems, and understanding how technologies work under the hood. Curious, self-driven, and eager to learn emerging technologies while developing impactful software solutions.",
  resumeUrl: "/Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com", 
  linkedin: "https://linkedin.com", 
  instagram: "",
};

export const heroContent = {
  greeting: "Hi, I'm Aditya Joshi",
  titleHighlight: "Software Engineer & Blockchain Dev",
  subtitle:
    "I build secure decentralized applications and robust web platforms using React, Solidity, and Java.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:adityajoshi18vk@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello Aditya,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, I'm <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Aditya Joshi</span>, a first-year B.Tech Computer Science student with a strong interest in Web Development and Blockchain Technology. I enjoy solving problems, experimenting with new tools, and understanding how systems work under the hood. I'm always curious, eager to learn, and passionate about building projects that expand both my technical and creative skills.`,
  techStack: ["React.js", "Solidity", "Node.js"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world applications",
  description:
    "I follow a structured, creative, and highly technical approach to turn ideas into robust applications.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "I start by understanding goals, user requirements, and technical constraints to lay a rock-solid foundation for the project.",
    },
    {
      number: "02",
      title: "Design",
      text: "Crafting clean architecture, intuitive interfaces, and pixel-perfect wireframes that guarantee an engaging and accessible user experience.",
    },
    {
      number: "03",
      title: "Develop",
      text: "Building scalable backends and responsive frontends using modern tech stacks and best practices.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "Rigorous testing, performance optimization, and seamless deployment to cloud infrastructure, followed by ongoing support.",
    },
  ],
  endText: "Ready to ship!",
};

export const technicalSkills = {
  categories: [
    {
      title: "Programming Languages",
      skills: [
        { name: "C / C++", level: 90 },
        { name: "JavaScript", level: 90 },
        { name: "Java", level: 80 },
        { name: "Solidity", level: 85 }
      ]
    },
    {
      title: "Frontend",
      skills: [
        { name: "HTML / CSS", level: 95 },
        { name: "React.js", level: 90 },
        { name: "TypeScript", level: 85 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Express.js", level: 85 }
      ]
    },
    {
      title: "Blockchain",
      skills: [
        { name: "Ethereum", level: 90 },
        { name: "Smart Contracts", level: 90 },
        { name: "ethers.js", level: 85 },
        { name: "Foundry", level: 80 }
      ]
    },

    {
      title: "Developer Tools",
      skills: [
        { name: "Git & GitHub", level: 95 },
        { name: "VS Code", level: 95 },
        { name: "Docker", level: 80 },
        { name: "IPFS", level: 85 },
        { name: "Remix IDE", level: 88 }
      ]
    }
  ]
};

// Exporting to prevent undefined imports in components that we might not use
export const contentCreation = { categories: [] };
export const leadershipList = [];

export const internshipsList = [
  {
    organization: "AWS Cloud Club SRM AP",
    role: "1st Prize in X3 Hackathon",
    duration: "Hackathon",
    skills: ["Problem Solving", "Team Collaboration", "Cloud Computing"],
    tech: ["AWS", "Web Development"],
    img: imgX3
  },
  {
    organization: "Team1 Blockchain & Hackshastra",
    role: "2nd Runner Up in BlockForge Mini Hackathon",
    duration: "Hackathon",
    skills: ["Smart Contracts", "dApp Development", "Blockchain"],
    tech: ["Solidity", "React", "Ethereum"],
    img: imgBlockforge
  },
  {
    organization: "NULL Point CTF (Our University)",
    role: "2nd Prize in Documentation and Writing",
    duration: "CTF",
    skills: ["Documentation", "Technical Writing", "Security"],
    tech: ["Cybersecurity", "Writing"],
    img: imgNullpoint
  }
];

export const softSkillsList = [
  { name: "Problem Solving", icon: "🧩", desc: "Breaking down complex engineering tasks into clean, logical, and modular pieces." },
  { name: "Self-driven", icon: "🚀", desc: "Curious and eager to learn emerging technologies." },
  { name: "Team Collaboration", icon: "🤝", desc: "Collaborating across fields, participating in hackathons." },
  { name: "Adaptability", icon: "🌟", desc: "Quick to pick up new frameworks and languages like Java and Solidity." }
];

export const projects = [
  {
    id: "chainproof",
    number: "01",
    badge: null,
    title: "ChainProof — Trustless Bug Bounty Platform",
    description: "A decentralized zero-trust bug bounty platform where organizations escrow ETH rewards in Solidity smart contracts, security researchers submit AES-256 encrypted exploit reports via IPFS, and verified exploits automatically trigger on-chain payouts after sandbox verification.",
    techTags: ["Solidity", "Ethereum", "Foundry", "Node.js", "Express", "Docker", "IPFS", "ethers.js"],
    links: {
      github: "https://github.com",
      demo: null,
    },
    isFlagship: false,
  },
  {
    id: "aegis-robotics",
    number: "02",
    badge: null,
    title: "Aegis Robotics",
    description: "A zero-shot imitation learning framework that enables humanoid robots to learn tasks from video demonstrations using multimodal large language models, while a local TensorFlow safety classifier prevents unsafe behaviors before execution.",
    techTags: ["Python", "TensorFlow", "Computer Vision", "Robotics", "LLMs"],
    links: {
      github: "https://github.com",
      demo: "https://demo.com",
    },
    isFlagship: false,
  },
  {
    id: "gigly",
    number: "03",
    badge: null,
    title: "Gigly",
    description: "Decentralized Escrow, Zero-Knowledge Compliance, and Verifiable Reputation for the Web3 Gig Economy featuring Smart Contract Escrows, ZK-KYC, and Soulbound Tokens.",
    techTags: ["Next.js", "Thirdweb", "Solidity", "ZK-SNARKs", "Supabase", "React"],
    links: {
      github: "https://github.com/adityajoshi18vk-art/Gigly-",
      demo: null,
    },
    isFlagship: false,
  },
];


export const education = {
  degree: "B.Tech – Computer Science & Engineering",
  institution: "SRM University AP",
  cgpa: "2025 – 2029", 
  graduation: "2029",
  twelfth: "Class XII (KLE IPC) – 81%",
  tenth: "Class X (Good Shepherd Central School) – 81%",
};

export const footerContent = {
  taglines: [
    "Web Development & Blockchain",
    "Solidity · React.js · Java",
    "Building secure decentralized systems",
  ],
  credential: "B.Tech CSE Student",
  copyright: `© ${new Date().getFullYear()} Aditya Joshi`,
};

export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
