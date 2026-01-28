import { FaPaintBrush } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { FaCodeCompare } from "react-icons/fa6";
import { GiIdea } from "react-icons/gi";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import {
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  project7,
  project8,
  project9,
  project10,
  project11,
  project12,
  project13,
  project14,
  project15,
  project16,
  project17,
  project18,
  project19,
  profile3,
  profile4,
  profile5,
  profile6,
  figma,
  sketch,
  xd,
  css,
  html,
  javascript,
  tailwind,
  bootstrap,
  react,
  reactnative,
  nodejs,
  express,
  mongodb,
  mysql,
  postgresql,
  firebase,
  restapi,
  graphql,
  emailicon,
  messengericon,
  whatsappicon,
  canva,
  ts,
  cplusplus,
  csharp,
  java,
  php,
  sql,
  git,
  npm,
  cmd,
  laravel,
  api,
  python,
  django,
  audio,
  deepseek,
  ejs,
  expo,
  gemini,
  selenium,
  supabase,
  nextjs,
} from "./assets";

export const menu = [
  { name: "About" },
  { name: "Services" },
  { name: "Skills" },
  { name: "Resume" },
  { name: "Projects" },
  { name: "Contact" },
];

export const services = [
  {
    title: "UI/UX Design",
    icon: <FaPaintBrush />,
    description: `Crafting visually stunning and user-centric designs that ensure seamless user experiences. 
                  From wireframes to high-fidelity prototypes, I focus on creating intuitive interfaces that 
                  blend creativity and functionality, enhancing engagement and usability.`,
  },
  {
    title: "Web Development",
    icon: <FaCodeCompare />,
    color: "blueviolet",
    colorRGB: "138, 43, 226",
    description: `Building responsive, dynamic, and high-performance websites tailored to your needs. 
    Using modern technologies like React, Node.js, and more, I ensure your site is optimized 
    for speed, scalability, and accessibility, delivering a robust online presence.`,
  },
  {
    title: "Mobile Developement",
    icon: <GiIdea />,
    color: "var(--color-success)",
    colorRGB: "var(--color-success-rgb)",
    description: `Producing compelling digital content that resonates with your audience. From blogs 
                  and technical documentation to engaging website copy, I ensure your brand's message 
                  is clear, impactful, and aligned with your business goals.`,
  }
];

export const projects = [
  {
    title: "Dev Space",
    image: project17,
    category: "Community Platform",
    description: `A comprehensive developer community platform that unifies project management, discussions, and real-time messaging. Features authentication, live updates, and an admin suite.`,
    demoLink: "https://the-dev-space.vercel.app/",
    stacks: [
      { name: "Next.js", logo: nextjs },
      { name: "React", logo: react },
      { name: "TypeScript", logo: ts },
      { name: "Tailwind CSS", logo: tailwind },
      { name: "Firebase", logo: firebase },
    ],
  },
  {
    title: "VoxTalent",
    image: project19,
    category: "AI Resume & Interview",
    description: `A voice-first resume builder and interview preparation platform. Builds ATS-optimized resumes via natural conversation and simulates interviews with real-time AI feedback.`,
    demoLink: "https://vox-talent.vercel.app/",
    stacks: [
      { name: "Next.js", logo: nextjs },
      { name: "React", logo: react },
      { name: "Tailwind CSS", logo: tailwind },
      { name: "Gemini API", logo: gemini },
      { name: "ElevenLabs", logo: audio },
    ],
  },
  {
    title: "Ignite",
    image: project1,
    category: "Developer Tool",
    description: `A TypeScript-based framework that accelerates mobile app development with React Native. Ignite includes boilerplates, built-in utilities, and seamless navigation setup to help developers ship faster.`,
    demoLink: "https://ignitedocs.vercel.app/",
    stacks: [
      { name: "TypeScript", logo: ts },
      { name: "CLI", logo: cmd },
      { name: "Expo", logo: expo },
      { name: "React Native", logo: reactnative },
    ],
  },
  {
    title: "Vex - Anonymous Content Platform",
    image: project16,
    category: "Web Platform",
    description: `A modern, enterprise-grade anonymous posting platform that allows users to freely share text, media, files, and audio without any registration or authentication. Built with Next.js, Supabase, and Cloudinary.`,
    demoLink: "https://vex-anonymous.vercel.app/",
    stacks: [
      { name: "Next.js", logo: nextjs },
      { name: "React", logo: react },
      { name: "TypeScript", logo: ts },
      { name: "Tailwind CSS", logo: tailwind },
      { name: "Supabase", logo: supabase },
    ],
  },
  {
    title: "Swift AI Recruit",
    image: project18,
    category: "AI Platform",
    description: `An advanced AI-powered recruitment platform with smart matching, AI tools for applicants/employers/recruiters, ATS Kanban board, and role-based dashboards. Powered by Google Gemini.`,
    demoLink: "https://swift-ai-recruit.vercel.app/",
    stacks: [
      { name: "Next.js", logo: nextjs },
      { name: "TypeScript", logo: ts },
      { name: "Tailwind CSS", logo: tailwind },
      { name: "Supabase", logo: supabase },
      { name: "Gemini API", logo: gemini },
    ],
  },
  {
    title: "Aquilla Blog",
    image: project3,
    category: "Web Platform",
    description: `A centralized blog platform for the Aquilla Cyber Tech community. Powered by MongoDB and managed with a custom PHP/MySQL backend, it supports secure content publishing, user engagement, and email notifications.`,
    demoLink: "https://aquillablog.vercel.app/",
    stacks: [
      { name: "Next.js", logo: nextjs },
      { name: "MongoDB", logo: mongodb },
      { name: "PHP", logo: php },
      { name: "MySQL", logo: mysql },
    ],
  },
  {
    title: "Vibe Flow",
    image: project2,
    category: "Mobile App",
    description: `A real-time social media app built with React Native and Supabase. Vibe Flow lets users create posts, like, and comment in a modern mobile-first experience.`,
    demoLink: "https://vibe-flow-launch.vercel.app/",
    stacks: [
      { name: "React Native", logo: react },
      { name: "Supabase", logo: supabase },
      { name: "Expo", logo: expo },
    ],
  },
  {
    title: "AI Chatbot",
    image: project5,
    category: "AI Interface",
    description: `A modern chatbot interface using Next.js and DeepSeek API. It handles user prompts and responds intelligently via a styled frontend backed with PHP-MySQL user logging.`,
    demoLink: "https://best-gold.vercel.app/",
    stacks: [
      { name: "Next.js", logo: nextjs },
      { name: "DeepSeek", logo: deepseek },
      { name: "PHP", logo: php },
      { name: "MySQL", logo: mysql },
    ],
  },
  {
    title: "School Management System",
    image: project6,
    category: "Web App",
    description: `A platform for managing school communication and student activities. Built with PHP and styled with Tailwind CSS to streamline academic coordination.`,
    demoLink: "https://pageland-three.vercel.app/",
    stacks: [
      { name: "PHP", logo: php },
      { name: "MySQL", logo: mysql },
      { name: "Tailwind CSS", logo: tailwind },
    ],
  },
  {
    title: "HandyMan (WIP)",
    image: project7,
    category: "Mobile App",
    description: `HandyMan bridges the gap between homeowners and skilled professionals. Whether plumbing, wiring, or furniture assembly, users can find nearby experts instantly. Currently in development.`,
    demoLink: "#",
    stacks: [
      { name: "React Native", logo: react },
      { name: "Expo", logo: expo },
      { name: "Firebase", logo: firebase },
    ],
  },
  {
    title: "Desk Buddy (Prototype)",
    image: project8,
    category: "AI Desktop Assistant",
    description: `A prototype of an AI-powered desktop assistant using Python, Gemini API, speech recognition and TTS. It responds to voice, opens apps, and interacts with the user in real time.`,
    demoLink: "#",
    stacks: [
      { name: "Python", logo: python },
      { name: "Gemini API", logo: gemini },
      { name: "TTS/STT", logo: audio },
    ],
  },
  {
    title: "Figma MCP",
    image: project9,
    category: "Dev Tool",
    description: `A bridge between Figma and VSCode Copilot. Converts design elements into ready-to-use code components. Built to streamline design-to-development workflow.`,
    demoLink: "https://github.com/kingjethro999/figma-mcp",
    stacks: [
      { name: "Figma", logo: figma },
      { name: "TypeScript", logo: ts },
      { name: "Node.js", logo: nodejs },
    ],
  },
  {
    title: "Spark",
    image: project10,
    category: "Web App",
    description: `A YouTube-style video sharing platform built with PHP and MySQL. Users can upload, view, and interact with video content. Currently in development.`,
    demoLink: "https://github.com/kingjethro999/spark",
    stacks: [
      { name: "PHP", logo: php },
      { name: "MySQL", logo: mysql },
    ],
  },
  {
    title: "Instagram Automation Bot",
    image: project11,
    category: "Python Script",
    description: `A Python automation tool for scheduling and auto-posting content to Instagram. Useful for creators looking to automate their daily workflow.`,
    demoLink: "https://github.com/kingjethro999/iinstagrambot",
    stacks: [
      { name: "Python", logo: python },
      { name: "Selenium", logo: selenium },
    ],
  },
  {
    title: "Currency Converter",
    image: project12,
    category: "Web App",
    description: `Supports all currencies with real-time exchange rates. A clean and interactive converter built with EJS and basic APIs.`,
    demoLink: "https://mycurrency-convertor.netlify.app/",
    stacks: [
      { name: "EJS", logo: ejs },
      { name: "Node.js", logo: nodejs },
    ],
  },
  {
    title: "Semester 2 Quiz App",
    image: project13,
    category: "Web App",
    description: `Quiz platform developed to test key concepts learned in semester 2. Built with EJS and JavaScript for fast interaction and clean UI.`,
    demoLink: "https://semester-2-quiz.netlify.app/",
    stacks: [
      { name: "EJS", logo: ejs },
      { name: "JavaScript", logo: javascript },
    ],
  },
  {
    title: "Ecommerce UI Design",
    image: project14,
    category: "UI/UX",
    description: `A visually rich ecommerce interface designed in Figma for online shopping platforms. Focused on clean layouts, modern typography, and intuitive user flow from product view to checkout.`,
    demoLink: "https://www.figma.com/design/klemxcEJQOJXDOynSqZAi5/UI-kit---Ecommerce-Mobile-App--Community-?node-id=244-2&p=f&t=8pHwmsja0sLYZpqN-0",
    stacks: [
      { name: "Figma", logo: figma },
    ],
  },
  {
    title: "Text to SVG Generator",
    image: project15, //you can ask me to generate a 1:1 image too
    category: "Tool",
    description: `A simple but handy JavaScript tool that converts text input into clean, scalable SVG graphics. Great for generating web-friendly icons, typography assets, or custom vector designs.`,
    demoLink: "https://github.com/kingjethro999/text-svg",
    stacks: [
      { name: "JavaScript", logo: javascript },
      { name: "HTML", logo: html },
      { name: "CSS", logo: css },
    ],
  },

];

export const skills = [
  {
    title: "Frontend Development",
    data: [
      {
        skill: "HTML",
        level: "Experienced",
        logo: html,
      },
      {
        skill: "Tailwind",
        level: "Intermediate",
        logo: tailwind,
      },
      {
        skill: "React",
        level: "Experienced",
        logo: react,
      },
      {
        skill: "React Native",
        level: "Experienced",
        logo: reactnative,
      },
      {
        skill: "TypeScript",
        level: "Intermediate",
        logo: ts,
      },
      {
        skill: "C++",
        level: "Beginner",
        logo: cplusplus,
      },
      {
        skill: "C#",
        level: "Beginner",
        logo: csharp,
      },
      {
        skill: "Java",
        level: "Beginner",
        logo: java,
      },
      {
        skill: "Expo",
        level: "Intermediate",
        logo: expo,
      },
      {
        skill: "Next.js",
        level: "Intermediate",
        logo: nextjs,
      },
    ],
  },
  {
    title: "Backend Development",
    data: [
      {
        skill: "Node.js",
        level: "Experienced",
        logo: nodejs,
      },
      {
        skill: "MongoDB",
        level: "Experienced",
        logo: mongodb,
      },
      {
        skill: "MySQL",
        level: "Intermediate",
        logo: mysql,
      },
      {
        skill: "PostgreSQL",
        level: "Beginner",
        logo: postgresql,
      },
      {
        skill: "Firebase",
        level: "Experienced",
        logo: firebase,
      },
      {
        skill: "Laravel",
        level: "Intermediate",
        logo: laravel,
      },
      {
        skill: "REST API",
        level: "Intermediate",
        logo: restapi,
      },
      {
        skill: "PHP",
        level: "Beginner",
        logo: php,
      },
      {
        skill: "Django",
        level: "Intermediate",
        logo: django,
      },
      {
        skill: "Python",
        level: "Experienced",
        logo: python,
      },
      {
        skill: "Supabase",
        level: "Intermediate",
        logo: supabase,
      },
      {
        skill: "EJS",
        level: "Intermediate",
        logo: ejs,
      },
    ],
  },
  {
    title: "UI/UX",
    data: [
      {
        skill: "Figma",
        level: "Experienced",
        logo: figma,
      },
      {
        skill: "Sketch",
        level: "Intermediate",
        logo: sketch,
      },
      {
        skill: "XD",
        level: "Intermediate",
        logo: xd,
      },
    ],
  },
  {
    title: "AI/ML",
    data: [
      {
        skill: "DeepSeek",
        level: "Experienced",
        logo: deepseek,
      },
      {
        skill: "Gemini",
        level: "Experienced",
        logo: gemini,
      },
      {
        skill: "Audio (TTS/STT)",
        level: "Beginner",
        logo: audio,
      },
    ],
  },
  {
    title: "Tools",
    data: [
      {
        skill: "Git",
        level: "Experienced",
        logo: git,
      },
      {
        skill: "npm",
        level: "Experienced",
        logo: npm,
      },
      {
        skill: "CMD",
        level: "Intermediate",
        logo: cmd,
      },
      {
        skill: "Canva",
        level: "Intermediate",
        logo: canva,
      },
      {
        skill: "Selenium",
        level: "Beginner",
        logo: selenium,
      },
    ],
  },
];
export const contactInfo = [
  {
    name: "Email",
    value: "jethrojerrybj@gmail.com",
    link: "mailto:jethrojerrybj@gmail.com",
    icon: emailicon,
    btnIcon: <MdOutlineEmail />,
    color: "rgb(56,115,205)",
  },
  {
    name: "Messenger",
    value: "King Jethro",
    link: "http://m.me/profile?id=profile-i",
    icon: messengericon,
    btnIcon: <RiMessengerLine />,
    color: "rgb(139,74,251)",
  },
  {
    name: "WhatsApp",
    value: "+2349077249922",
    link: "https://api.whatsapp.com/send?phone=+2349077249922",
    icon: whatsappicon,
    btnIcon: <BsWhatsapp />,
    color: "rgb(38,234,112)",
  },
];
export const socialHandles = [
  {
    name: "Fiverr",
    icon: <SiFiverr />,
    link: "https://github.com/kingjethro999",
  },
  {
    name: "Github",
    icon: <AiFillGithub />,
    link: "https://github.com/kingjethro999",
  },
  {
    name: "LinkedIn",
    icon: <AiFillLinkedin />,
    link: "https://ng.linkedin.com/in/king-jethro-jerry",
  },
  {
    name: "Youtube",
    icon: <AiFillYoutube />,
    link: "https://www.youtube.com/@materingprogrammingwithking",
  },
];

export const testimonials = [
  {
    avatar: profile3,
    name: "Samuel Eze",
    review: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`,
  },
  {
    avatar: profile4,
    name: "Emmanuel Joseph",
    review: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`,
  },
  {
    avatar: profile5,
    name: "Gloria Chiwendu",
    review: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`,
  },
  {
    avatar: profile6,
    name: "Precious Stone",
    review: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`,
  },
];

export const resume = {
  profile: {
    name: "Jethro Oluwaseun Jerry",
    title: "Software Engineer",
    location: "Federal Capital Territory, Nigeria · Remote",
    email: "jethrojerrybj@gmail.com",
    portfolio: "https://jethroportfolio.vercel.app",
    linkedin: "https://www.linkedin.com/in/king-jethro-jerry/",
    github: "https://www.github.com/kingjethro999/",
    summary: `Software Engineer with 3+ years architecting enterprise applications in JavaScript/TypeScript and PHP (Laravel) ecosystems. Led development of applications serving 10,000+ users, achieving 98% code coverage and 95+ Lighthouse scores while reducing system latency by 40%, and established CI/CD pipelines with comprehensive testing across 15+ production deployments.`,
  },
  keyProjects: [
    {
      title: "Ignite DSL",
      role: "Lead JavaScript/TypeScript Developer",
      tech: "TypeScript",
      outcome: "Architected a domain-specific language (DSL) for React Native using .ignite files and folder-based routing (inspired by Next.js), resulting in a 67% increase in developer productivity through simplified code structure and automated navigation.",
      links: [
        { text: "View Project", url: "https://ignitedocs.vercel.app/" }
      ]
    },
    {
      title: "Aquilla Blog",
      role: "Lead Full-Stack Developer",
      tech: "Next Js, CSS, Node Js, MongoDB, Mail SMTP, PHP, MySQL",
      outcome: "Created a tech community platform enabling users to share knowledge, collaborate on projects, and engage in discussions. Implemented scalable architecture with Next.js and MongoDB, supporting 100+ active members with 98% uptime and robust content management features.",
      links: [
        { text: "Live Preview", url: "https://aquillablog.vercel.app" },
        { text: "View Project", url: "https://github.com/kingjethro999/aquillablog" }
      ]
    }
  ],
  techStack: {
    "Core Engineering": [
      "TypeScript/JavaScript",
      "MERN Stack (MongoDB, Express, React, Node.js)",
      "System Design & Architecture",
      "PHP/Laravel",
      "Java",
      "C++/C#"
    ],
    "Frontend & Mobile": [
      "React/Next.js",
      "React Native",
      "Angular",
      "Vue.js",
      "Redux/Zustand",
      "HTML5/CSS3",
      "Bootstrap/Tailwind CSS",
      "UI/UX Implementation"
    ],
    "Backend & Data": [
      "REST/GraphQL APIs",
      "Microservices Architecture",
      "MySQL/PostgreSQL",
      "MongoDB/Redis",
      "WebSockets",
      "XAMPP/LAMP Stack"
    ],
    "DevOps & Quality": [
      "AWS/Cloud Services",
      "Docker/Kubernetes",
      "CI/CD Pipelines",
      "Git/GitHub",
      "Jest/Cypress",
      "Figma/Adobe XD"
    ]
  },
  experience: [
    {
      title: "React Native Developer (The HandyMan Project)",
      company: "THE BEST (Startup)",
      time: "2025 – Present",
      employment: "Remote, Full-Time",
      results: [
        "Developed and launched The HandyMan, a cross-platform mobile application using React Native, TypeScript, and Redux for seamless service booking and real-time notifications.",
        "Integrated RESTful APIs, push notifications, and secure authentication to enhance user experience and engagement.",
        "Implemented scalable architecture and reusable UI components, ensuring maintainability and rapid feature delivery.",
        "Utilized ATS-friendly technologies: React Native, TypeScript, Redux, REST APIs, Firebase, and Expo."
      ]
    },
    {
      title: "Founder & Tech Lead",
      company: "THE BEST (Startup)",
      time: "2025 – Present",
      employment: "Remote, Full-Time",
      results: [
        "Founded and set the strategic vision for a tech startup, driving innovation in AI, web, and mobile development.",
        "Led cross-functional teams using agile methodologies to deliver high-impact projects, including a React Native DSL and a tech community platform.",
        "Oversaw technical innovation, resource allocation, and stakeholder communication to scale and grow the startup successfully."
      ]
    },
    {
      title: "Lead JavaScript/TypeScript Developer",
      company: "Ignite DSL Project",
      time: "2024 – Present",
      employment: "Remote, Contract",
      results: [
        "Architected a domain-specific language (DSL) for React Native using .ignite files and folder-based routing (inspired by Next.js), resulting in a 67% increase in developer productivity.",
        "Developed a custom transpiler to convert DSL code into production-ready React Native applications, streamlining the development process for mobile teams."
      ]
    },
    {
      title: "Lead Full-Stack Developer",
      company: "Aquilla Blog",
      time: "2024 – Present",
      employment: "Remote, Contract",
      results: [
        "Created a tech community platform enabling users to share knowledge, collaborate on projects, and engage in discussions.",
        "Implemented scalable architecture with Next.js and MongoDB, supporting 100+ active members with 98% uptime and robust content management features."
      ]
    },
    {
      title: "Senior PHP Developer & Scrum Leader",
      company: "Lincoln College of Science Management and Technology",
      time: "2024 – 2025",
      employment: "Azatha Abuja, Full-Time",
      results: [
        "Led the scrum team for the School Ecosystem Project, orchestrating agile sprints and coordinating cross-functional tasks.",
        "Engineered a responsive user interface with TailwindCSS and Bootstrap, and developed dynamic features with JavaScript and PHP."
      ]
    },
    {
      title: "Web Developer",
      company: "IceWebDezignz",
      time: "2021",
      employment: "Kurudu Abuja, Full-Time",
      results: [
        "Developed and customized WordPress websites tailored to client specifications, ensuring optimal performance across devices.",
        "Integrated essential plugins, maintained security, and collaborated with design/content teams for engaging user experiences."
      ]
    }
  ],
  education: [
    {
      school: "Lincoln University College, Nigeria",
      degree: "Diploma in Computer Software Engineering",
      year: "2023 – Present",
      focus: "Software Architecture & Cloud Computing"
    }
  ],
  certifications: [
    {
      cert: "Professional Scrum Master I (PSM I)",
      year: "2024",
      status: "Completed"
    },
    {
      cert: "CMS Development with WordPress",
      year: "2021",
      status: "Completed"
    },
    {
      cert: "SEO Optimization Fundamentals",
      year: "2021",
      status: "Completed"
    }
  ]
};
