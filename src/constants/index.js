import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  amazon,
  apple,
  netflix,
  evangadi_forum,
  telegram_fetching,
  AbeGeraji,
  airbnb,
  airnb2,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const skillsTitle = "Skills";

const technologies = [
  {
    name: "HTML5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Python",
    icon: null, // Using icon component instead
  },
  {
    name: "Java",
    icon: null,
  },
  {
    name: "C++",
    icon: null,
  },
  {
    name: "Data Structures & Algorithms",
    icon: null,
  },
  {
    name: "MySQL",
    icon: null,
  },
  {
    name: "Linux",
    icon: null,
  },
  {
    name: "PHP",
    icon: null,
  },
  {
    name: "Bootstrap",
    icon: null,
  },
  {
    name: "Bash Scripting",
    icon: null,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Trello",
    icon: null,
  },
  {
    name: "Jira",
    icon: null,
  },
  {
    name: "Discord",
    icon: null,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#1E3932",
    date: "March 2020 - April 2021",
    points: [
      "Developed and maintained a responsive customer loyalty web application using React.js, Redux, and Node.js, resulting in a 35% increase in user engagement.",
      "Collaborated with UX/UI designers to implement pixel-perfect, mobile-first interfaces that improved mobile order conversion rates by 28%.",
      "Optimized frontend performance, reducing initial page load time by 40% through code splitting and lazy loading techniques.",
      "Implemented A/B testing framework that increased conversion rates by 15% for the digital menu board feature.",
      "Mentored junior developers through code reviews and pair programming sessions, improving team velocity by 20%.",
    ],
  },
  {
    title: "Senior React Native Engineer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E82127",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Led development of Tesla's mobile app features for vehicle control and energy management, serving over 3 million active users.",
      "Architected and implemented real-time vehicle telemetry system using WebSockets, reducing data latency by 65%.",
      "Optimized app performance, achieving 60 FPS on 95% of user interactions and reducing crash rate by 40%.",
      "Pioneered accessibility improvements, making the app WCAG 2.1 compliant and expanding Tesla's user base to include more users with disabilities.",
      "Redesigned the charging station locator feature, improving location accuracy by 30% and user satisfaction by 25%.",
    ],
  },
  {
    title: "Lead Frontend Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#96BF48",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Spearheaded the development of Shopify's next-generation storefront experience using React, TypeScript, and GraphQL.",
      "Led a team of 5 developers to rebuild the merchant dashboard, resulting in a 50% improvement in page load times.",
      "Implemented a design system that reduced UI development time by 40% and improved consistency across the platform.",
      "Optimized the checkout flow, increasing conversion rates by 18% and generating an estimated $50M+ in additional annual revenue.",
      "Mentored junior developers and conducted technical interviews, helping to scale the frontend team from 15 to 30 engineers.",
    ],
  },
  {
    title: "Senior Software Engineer, AI/ML Infrastructure",
    company_name: "Meta",
    icon: meta,
    iconBg: "#0866FF",
    date: "Jan 2023 - Present",
    points: [
      "Developed and scaled AI infrastructure supporting Meta's recommendation systems, handling over 1 billion daily active users.",
      "Optimized model training pipelines, reducing training time by 60% and infrastructure costs by 40%.",
      "Led the migration of critical services to PyTorch 2.0, improving inference performance by 35%.",
      "Implemented real-time monitoring and alerting systems that reduced incident response time by 70%.",
      "Contributed to open-source ML frameworks used by thousands of developers worldwide, with over 2,500 GitHub stars on personal contributions.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Working with this team was an absolute pleasure. Their attention to detail and creative approach to problem-solving resulted in a website that perfectly represents our brand.",
    name: "Sarah Johnson",
    designation: "Marketing Director",
    company: "TechNova",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    testimonial:
      "The development team delivered exceptional results on time and within budget. Their technical expertise and communication were outstanding throughout the project.",
    name: "Michael Chen",
    designation: "CEO",
    company: "InnoTech",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    testimonial:
      "Our new website has exceeded all our expectations. The user experience is seamless, and we've seen a significant increase in customer engagement.",
    name: "Emily Rodriguez",
    designation: "Product Manager",
    company: "DesignHub",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    testimonial:
      "The team's ability to understand our vision and translate it into a functional, beautiful website was impressive. Highly recommended!",
    name: "David Kim",
    designation: "Founder",
    company: "StartUpX",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    testimonial:
      "Outstanding work! The website they built for us has helped us reach new customers and grow our business significantly.",
    name: "Jennifer Lee",
    designation: "Marketing Manager",
    company: "GrowthLabs",
    image: "https://randomuser.me/api/portraits/women/63.jpg",
  },
  {
    testimonial:
      "Professional, creative, and highly skilled. The team delivered a website that perfectly aligns with our brand identity and business goals.",
    name: "Robert Taylor",
    designation: "CTO",
    company: "CodeCraft",
    image: "https://randomuser.me/api/portraits/men/36.jpg",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Amazon Clone",
    description:
      "A clone of Amazon's e-commerce platform, demonstrating frontend and backend skills.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
      { name: "mongodb", color: "pink-text-gradient" },
    ],
    image: amazon,
    source_code_link: "https://github.com/TEMESGENABDISSA/Amazon_Clone",
    deployment_link: "https://temesgen-amazon-clone.netlify.app/",
  },
  {
    name: "Apple Landing Page",
    description:
      "A responsive landing page clone of Apple's product page, showcasing modern UI/UX design.",
    tags: [
      { name: "html", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "javascript", color: "pink-text-gradient" },
    ],
    image: apple,
    source_code_link: "https://github.com/temesgen-abdissa/Apple-Landing-Page",
    deployment_link: "",
  },
  {
    name: "Netflix Clone",
    description:
      "A Netflix clone with user authentication and movie browsing, utilizing a movie database API.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "firebase", color: "green-text-gradient" },
      { name: "api", color: "pink-text-gradient" },
    ],
    image: netflix,
    source_code_link: "https://github.com/TEMESGENABDISSA/Netflix_Clone",
    deployment_link: "",
  },
  {
    name: "Evangadi Forum",
    description:
      "A forum application for Evangadi Bootcamp, allowing users to post questions, answers, and interact.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
      { name: "express", color: "pink-text-gradient" },
    ],
    image: evangadi_forum,
    source_code_link: "https://github.com/temesgen-abdissa/EvangadiForum",
    deployment_link: "",
  },
  {
    name: "Telegram Fetching Bot",
    description:
      "A bot that fetches data from Telegram channels and groups, with configurable settings and data storage.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "telegram-api", color: "green-text-gradient" },
      { name: "database", color: "pink-text-gradient" },
    ],
    image: telegram_fetching,
    source_code_link: "https://github.com/temesgen-abdissa/TelegramFetching",
    deployment_link: "",
  },
  {
    name: "AbeGeraji",
    description:
      "A garage management system for vehicle maintenance, scheduling, and inventory tracking.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "supabase", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: AbeGeraji,
    source_code_link: "https://github.com/temesgen-abdissa/ABE-Garaji",
    deployment_link: "",
  },
  {
    name: "Airbnb Clone",
    description:
      "A clone of Airbnb's booking platform, featuring property listings, search filters, and booking functionality.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "nextjs", color: "green-text-gradient" },
      { name: "mongodb", color: "pink-text-gradient" },
    ],
    image: airbnb,
    source_code_link: "https://github.com/temesgen-abdissa/Airbnb-Clone",
    deployment_link: "",
  },
  {
    name: "AIrnb2",
    description:
      "An enhanced Airbnb clone with advanced features and improved UI/UX.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "nextjs", color: "green-text-gradient" },
      { name: "typescript", color: "pink-text-gradient" },
    ],
    image: airnb2,
    source_code_link: "https://github.com/temesgen-abdissa/AIrnb2",
    deployment_link: "",
  },
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
    deployment_link: "",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
    deployment_link: "",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
    deployment_link: "",
  },
  {
    name: "Fayda",
    description:
      "A comprehensive financial management platform that helps users track expenses, manage budgets, and analyze spending patterns with intuitive visualizations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: web,
    source_code_link: "https://github.com/temesgen-abdissa/fayda",
    deployment_link: "https://fayda-finance.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
