import AAU from '../assets/AAU.png';
import alx from '../assets/alx.svg';
import maryland from '../assets/maryland.jpg';
import evangadiLogo from '../assets/evangadi.png';
import insaLogo from '../assets/INSA.jpg';
import marylandLogo from '../assets/marlanduniversity.svg';
import telegramfetching from '../assets/Telegramfetching.png';
import ANBNB from '../assets/ANBNB.png';
import Airnb from '../assets/Airnb.jpg';
import emamu from '../assets/emamu.png';
import realstate from '../assets/realstate.jpg';
import portfolio from '../assets/portfolio.png';
import fayda from '../assets/fayda.png';
import amazonProject from '../assets/company/amazon.jpeg';
import { apple, netflix, evangadi_forum, AbeGeraji } from '../assets';

// Import all tech icons from assets/tech
import htmlIcon from '../assets/tech/html.png';
import cssIcon from '../assets/tech/css.png';
import jsIcon from '../assets/tech/javascript.png';
import tsIcon from '../assets/tech/typescript.png';
import reactIcon from '../assets/tech/reactjs.png';
import nodeIcon from '../assets/tech/nodejs.png';
import mongoIcon from '../assets/tech/mongodb.png';
import mysqlIcon from '../assets/tech/Mysql.svg';
import gitIcon from '../assets/tech/git.png';
import githubIcon from '../assets/tech/Github.png';
import pythonIcon from '../assets/tech/Python.png';
import cppIcon from '../assets/tech/C++.png';
import phpIcon from '../assets/tech/PHP.png';
import kotlinIcon from '../assets/tech/kotlin.svg';
import flutterIcon from '../assets/tech/Flutter.svg';
import figmaIcon from '../assets/tech/figma.png';
import trelloIcon from '../assets/tech/Trello.png';

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
    icon: reactIcon, // Using reactIcon for web development
  },
  {
    title: "React Native Developer",
    icon: reactIcon, // Using reactIcon for React Native
  },
  {
    title: "Backend Developer",
    icon: nodeIcon,
  },
  {
    title: "UI/UX Designer",
    icon: figmaIcon, // Using figmaIcon for UI/UX design
  },
  {
    title: "Content Creator",
    icon: figmaIcon, // Using figmaIcon for content creator
  },
];

const skillsTitle = "Skills";

const technologies = [
  { name: "HTML", icon: htmlIcon },
  { name: "CSS", icon: cssIcon },
  { name: "JavaScript", icon: jsIcon },
  { name: "TypeScript", icon: tsIcon },
  { name: "React", icon: reactIcon },
  { name: "Node.js", icon: nodeIcon },
  { name: "MongoDB", icon: mongoIcon },
  { name: "MySQL", icon: mysqlIcon },
  { name: "Git", icon: gitIcon },
  { name: "GitHub", icon: githubIcon },
  { name: "Python", icon: pythonIcon },
  { name: "C++", icon: cppIcon },
  { name: "PHP", icon: phpIcon },
  { name: "Kotlin", icon: kotlinIcon },
  { name: "Flutter", icon: flutterIcon },
  { name: "Figma", icon: figmaIcon },
  { name: "Trello", icon: trelloIcon },
  { name: "Bootstrap", icon: null },
  { name: "Java", icon: null },
  { name: "Linux", icon: null }
];

const experiences = [
  {
    title: "Bachelor of Computer Information Science",
    company_name: "Addis Ababa University",
    icon: AAU,
    iconBg: "#1E3932",
    date: "2014 – Present",
    points: [
      "Studied a wide range of topics including programming languages (C, Java), Internet Programming, Data Structures & Algorithms",
      "Gained expertise in System Analysis & Design, Object-Oriented Programming, and Database Management",
      "Explored advanced topics in AI, Cybersecurity, and Networking",
      "Developed multiple mini-projects to apply learned skills in practical scenarios"
    ],
  },
  {
    title: "Software Engineering (Backend Specialization)",
    company_name: "ALX",
    icon: alx,
    iconBg: "#E82127",
    date: "Feb 20, 2023 – Apr 5, 2024",
    points: [
      "Specialized in Backend & Systems Engineering / DevOps",
      "Mastered technologies: C, Python, Flask, SQL, NoSQL, Redis, JavaScript (ES6), TypeScript, Node.js, JQuery",
      "Covered Modern JS, Async, Unit & Integration Tests, Pagination, Caching, and Queuing Systems",
      "Gained expertise in User Authentication, APIs, and Deployment",
      "Key Projects: Airbnb Backend Project, Portfolio Project"
    ],
  },
  {
    title: "Full Stack Web Development",
    company_name: "Evangadi Networks",
    icon: evangadiLogo,
    iconBg: "#4CAF50",
    date: "Mar 25, 2025 – Oct 30, 2025",
    points: [
      "Developed full-stack applications using modern web technologies",
      "Gained hands-on experience with HTML, CSS, Bootstrap, and JavaScript",
      "Built projects using React, Node.js, and MySQL",
      "Key Projects: Apple, Google, EvangadiForum, Abe Geraji, Amazon, Food Menu, Portfolio"
    ],
  },
  {
    title: "FAYDA National ID Verification & Access Control System",
    company_name: "INSA Cyber Talent Center – Summer Camp 2025",
    icon: insaLogo,
    iconBg: "#2196F3",
    date: "Summer 2025",
    points: [
      "Built a unified platform for Ethiopian companies and institutions",
      "Implemented 'One ID, Everywhere Access' solution",
      "Tech Stack: React.js, Node.js, Express, MySQL (via MAMP)",
      "Participated in mindset training, exercises, and assessments"
    ],
  },
  {
    title: "AI & Career Empowerment",
    company_name: "University of Maryland",
    icon: marylandLogo,
    iconBg: "#9C27B0",
    date: "2025",
    points: [
      "Explored Artificial Intelligence applications in business",
      "Learned career development strategies and professional growth techniques",
      "Studied organizational integration of AI technologies",
      "Gained insights into AI's impact on modern workplaces"
    ],
  }
];


const projects = [
  {
    name: "Amazon Clone",
    description:
      "A clone of Amazon's e-commerce platform, demonstrating frontend and backend skills.",
    tags: [
      { name: "react", color: "tag-blue" },
      { name: "nodejs", color: "tag-orange" },
      { name: "firebase", color: "tag-red" },
      { name: "stripe", color: "tag-yellow" },
    ],
    image: amazonProject,
    source_code_link: "https://github.com/TEMESGENABDISSA/Amazon_Clone",
    deployment_link: "https://temesgen-amazon-clone.netlify.app/",
  },
  {
    name: "Apple Landing Page",
    description:
      "A responsive landing page clone of Apple's product page, showcasing modern UI/UX design.",
    tags: [
      { name: "React", color: "tag-blue" },
      { name: "CSS3, Bootstrap", color: "tag-green" },
      { name: "node", color: "tag-orange" },
    ],
    image: apple,
    source_code_link: "https://github.com/temesgen-abdissa/Apple-Landing-Page",
    deployment_link: "https://apple-project-six.vercel.app/",
  },
  {
    name: "Netflix Clone",
    description:
      "A Netflix clone with user authentication and movie browsing, utilizing a movie database API.",
    tags: [
      { name: "React", color: "tag-blue" },
      { name: "TMDB", color: "tag-green" },
      { name: "api", color: "tag-yellow" },
    ],
    image: netflix,
    source_code_link: "https://github.com/TEMESGENABDISSA/Netflix_Clone",
    deployment_link: "https://temesgenabdissa.github.io/Netflix_Clone/",
  },
  {
    name: "Evangadi Forum",
    description:
      "A forum application for Evangadi Bootcamp, allowing users to post questions, answers, and interact.",
    tags: [
      { name: "React", color: "tag-blue" },
      { name: "Node.js", color: "tag-orange" },
      { name: "Express", color: "tag-yellow" },
      { name: "MySQL", color: "tag-green" },
      { name: "AI", color: "tag-red" },

    ],
    image: evangadi_forum,
    source_code_link: "https://github.com/temesgen-abdissa/EvangadiForum",
    deployment_link: "https://evangadi-forum-temesgenabdissas-projects.vercel.app",
  },
  {
    name: "Telegram Fetching Bot",
    description:
      "A bot that fetches data from Telegram channels and groups, with configurable settings and data storage.",
    tags: [
      { name: "Python", color: "tag-blue" },
      { name: "Telegram API", color: "tag-yellow" },
      { name: "Database", color: "tag-green" },
    ],
    image: telegramfetching,
    source_code_link: "https://github.com/temesgen-abdissa/TelegramFetching",
    deployment_link: "https://t.me/Emamu_Techs",
  },
  {
    name: "AbeGeraji",
    description:
      "A garage management system for vehicle maintenance, scheduling, and inventory tracking.",
    tags: [
      { name: "React", color: "tag-blue" },
      { name: "Express", color: "tag-orange" },
      { name: "Node", color: "tag-yellow" },
      { name: "Msql", color: "tag-green" },
    ],
    image: AbeGeraji,
    source_code_link: "https://github.com/temesgen-abdissa/ABE-Garaji",
    deployment_link: "#",
  },
  {
    name: "Airbnb Clone",
    description: "A full-stack clone of Airbnb with property listings, search, and booking functionality. Built with Python and Flask, replicating core features with a responsive user experience and clean UI.",
    tags: [
      { name: "Python", color: "tag-blue" },
      { name: "Flask", color: "tag-orange" },
      { name: "HTML5", color: "tag-yellow" },
      { name: "CSS3", color: "tag-green" },
      { name: "Jinja2", color: "tag-red" },
    ],
    image: ANBNB,
    source_code_link: "https://github.com/temesgen-abdissa/airbnb-clone",
    deployment_link: "#",
  },
  {
    name: "Airbnb 2.0",
    description:
      "An enhanced version of the Airbnb clone with additional features and improvements, including a custom command interpreter and interactive booking interface.",
    tags: [
      { name: "Python", color: "tag-blue" },
      { name: "Flask", color: "tag-orange" },
      { name: "HTML5", color: "tag-yellow" },
      { name: "CSS3", color: "tag-green" },
      { name: "JSON", color: "tag-red" },
    ],
    image: Airnb,
    source_code_link: "https://github.com/TEMESGENABDISSA/AirBnB_clone_v2",
    deployment_link: "#",
  },
  {
    name: "Emamu Mall",
    description: "A full-featured MERN stack e-commerce platform with secure authentication, product management, and admin dashboard.",
    tags: [
      { name: "React", color: "tag-blue" },
      { name: "Node.js", color: "tag-orange" },
      { name: "MongoDB", color: "tag-yellow" },
      { name: "Express", color: "tag-green" },
      { name: "Tailwind", color: "tag-red" },
      { name: "JWT Auth", color: "tag-blue" },
    ],
    image: emamu,
    source_code_link: "https://github.com/TEMESGENABDISSA/EMAMU-MALL",
    deployment_link: "",
  },
  {
    name: "Emamu Real Estate",
    description: "A modern real estate platform with intuitive property browsing, buying, and selling features across all devices.",
    tags: [
      { name: "HTML5", color: "tag-yellow" },
      { name: "CSS3", color: "tag-blue" },
      { name: "JavaScript", color: "tag-orange" },
      { name: "Responsive", color: "tag-green" },
    ],
    image: realstate,
    source_code_link: "https://github.com/TEMESGENABDISSA/EMamu.github.io",
    deployment_link: "#",
  },
  {
    name: "Portfolio",
    description: "A personal portfolio website showcasing projects, skills, and experience with a modern, responsive design.",
    tags: [
      { name: "React", color: "tag-blue" },
      { name: "Tailwind CSS", color: "tag-orange" },
      { name: "Three.js", color: "tag-yellow" },
      { name: "Framer Motion", color: "tag-green" },
      { name: "Tailwind", color: "tag-red" },
      { name: "EmailJS", color: "tag-blue" },
    ],
    image: portfolio,
    source_code_link: "https://github.com/TEMESGENABDISSA/PORTFOLIO.git",
    deployment_link: "#",
  },
  {
    name: "FAYDA ID Verification",
    description:
      "A secure system for national ID verification and access control, built with modern web technologies.",
    tags: [
      { name: "React", color: "tag-blue" },
      { name: "Node.js", color: "tag-orange" },
      { name: "MongoDB", color: "tag-yellow" },
      { name: "Express", color: "tag-green" },
      { name: "JWT", color: "tag-red" },
      { name: "API Integration", color: "tag-blue" },
    ],
    image: fayda,
    source_code_link: "https://github.com/TEMESGENABDISSA/INSA-FAYDA.git",
    deployment_link: "https://fayda-finance.vercel.app/",
  },
];

const testimonials = [
{
testimonial:
"I've had the pleasure of working with Temesgen in several projects, and I can confidently say he is one of the most reliable and skilled developers I've collaborated with. His ability to write clean, efficient code, combined with his positivity and creative thinking, has been a huge asset to our team. He's not only a talented coder but also a great teammate  Always willing to help, share knowledge, and find solutions when challenges arise. His dedication and quality work make him someone you can always count on.",
name: "Tsegaw Kebede",
designation: "Software Engineer",
company: "Maryland, USA",
image: "/src/assets/tsegish.jpg",
},
{
testimonial:
" I met Temesgen during our full stack web development course. Since our team met four days a week, I saw how well he understood the material and how he introduced new challenges to help the team grow. Later, as team leaders, he divided projects into manageable parts and led the team efficiently. He is a skilled leader friendly, clear, and open to new ideas.",
name: "Fasika",
designation: "Full Stack Development Peer",
company: "Pennsylvania, USA",
image: "/src/assets/Fasika.jpg",
},
{
testimonial:
"I had the pleasure of working alongside Temesgen at Evangadi Networks. He's one of the most talented Full Stack Developers I've collaborated with. Temesgen consistently delivered clean, efficient code and had a unique ability to bridge design and functionality. Beyond his technical expertise, he is approachable, proactive, and eager to help others. Any team would be lucky to have him  He brings skill and positivity to every project.",
name: "Bethelhem Solomon",
designation: "Full Stack Developer",
company: "Austin, TX",
image: "src/assets/womanavatar.jpg",
},
{
testimonial:
"I met Temesgen during our MERN course. From the start, he stood out as a smart, dedicated, and curious student. He collaborates effectively, consistently seeks to deepen his understanding, and enhances his skills. His passion for learning and excellent problem solving mindset make him a promising and valuable future developer.",
name: "Hailu Hailu",
designation: "Network & Cybersecurity Professional",
company: "California, USA",
image: "src/assets/Manavatar.jpg",
},
{
testimonial:
"I've had the pleasure of learning and collaborating with Temesgen  throughout our Full Stack Development Bootcamp. He has strong technical skills, creativity, and a deep passion for software development. Temesgen turns complex programming concepts into practical, efficient, and well-designed applications. Beyond his talent, he is reliable, communicative, and always willing to help others succeed. Working with him has been inspiring and enjoyable.",
name: "Abnet Mekonen",
designation: "Full Stack Development Bootcamp Peer",
company: "",
image: "src/assets/Manavatar.jpg",
},
{
testimonial:
"I had the chance to study with Temesgen during our web development course, and it was a great experience. He was always supportive, collaborative, and helped others understand difficult topics. I appreciated his positive attitude and problem-solving mindset during group projects. He's the kind of teammate who motivates everyone to do their best.",
name: "Seble T. Martinez",
designation: "Sales Associate / Course Peer",
company: "Texas, USA",
image: "src/assets/womanavatar.jpg",
},
{
testimonial:
"It was a great experience learning alongside Temesgen at Evangadi. He was one of the most hardworking and dedicated students in our group. He managed his time well, stayed organized, and helped others whenever he could. His positive attitude and consistency stood out, and he was always focused on improving his skills and understanding new concepts. I truly respect his work ethic and commitment  he's definitely someone who will go far in his career.",
name: "Yonas",
designation: "Software Engineer",
company: "Hartford, Connecticut, USA",
image: "src/assets/Manavatar.jpg",
},
{
testimonial:
"Working with Temesgen has been a great experience. He's a talented developer who consistently brings creativity, focus, and technical excellence to every project. His ability to solve problems efficiently and write clean, maintainable code makes him a standout teammate. What I really appreciate about Temesgen is his professionalism and collaborative spirit. He's always open to ideas, quick to help others, and dedicated to producing quality results. You can always rely on him to approach challenges with a positive attitude and a strong sense of responsibility. As a full-stack web developer, I've enjoyed collaborating with Temesgen and have learned a lot from his approach to both development and teamwork. He's truly an asset to any team he's part of.",
name: "Emran Nasser",
designation: "Full-Stack Web Developer",
company: "Maryland, USA",
image: "src/assets/Manavatar.jpg",
},
{
testimonial:
"Working alongside Temesgen has been an exceptionally inspiring experience. They demonstrate remarkable dedication, consistently approaching every task with focus and professionalism. Beyond their technical skills, Temesgen is highly collaborative, always willing to share knowledge and help others understand complex concepts in a clear and approachable way. I've been particularly impressed by their strong problem-solving abilities, attention to detail, and the passion they bring to every project. They approach challenges with creativity and persistence, making them a reliable and valuable team member in any setting. With their technical expertise, positive attitude, and eagerness to learn, I am confident that Temesgen will thrive in any professional environment and contribute meaningfully to any team or project they join.",
name: "Seid Sualeh",
designation: "Full-Stack Web Developer",
company: "Addis Ababa, Ethiopia",
image: "src/assets/Manavatar.jpg",
},
];

export { services, technologies, experiences, projects, testimonials };
