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
  nextJs,
  redux,
  tailwind,
  angular,
  nodejs,
  mongodb,
  java,
  mysql,
  git,
  linkedIn,
  github,
} from "../assets";

const navigationPaths = {
  home: "/",
  about: "about",
  work: "work",
  contact: "contact",
};

export const navLinks = [
  {
    id: navigationPaths.about,
    title: "About",
  },
  {
    id: navigationPaths.work,
    title: "Work",
  },
  {
    id: navigationPaths.contact,
    title: "Contact",
  },
];

const services = [
  {
    title: "React Developer",
    icon: web,
  },
  {
    title: "AI/ML Developer",
    icon: mobile,
  },
  {
    title: "NodeJs Developer",
    icon: backend,
  },
  {
    title: "Python Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
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
    name: "Next JS",
    icon: nextJs,
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
    name: "Angular",
    icon: angular,
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
    name: "Java",
    icon: java,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [
  {
    title: "AI-ML Intern",
    company_name: "AICTE - EduSkills",
    company_website: "https://www.eduskillsfoundation.org/",
    icon: "", // Replace with imported icon if available
    iconBg: "#E6DEDD",
    date: "July 2024 - September 2024",
    points: [
      "Built 5+ ML models for image and time-series datasets using TensorFlow and PyTorch.",
      "Integrated ensemble methods to reduce prediction error by 18%.",
      "Optimized training workflows using automated feature selection, reducing training time by 40%.",
    ],
  },
  {
    title: "Web Development Intern",
    company_name: "Prodigy InfoTech",
    company_website: "https://prodigyinfotech.dev/",
    icon: "", // Replace with imported icon if available
    iconBg: "#E6DEDD",
    date: "June 2024 – July 2024",
    points: [
      "Enhanced REST API performance and built interactive UI components with HTML, CSS, and JS.",
      "Collaborated with cross-functional teams to deliver scalable web solutions.",
    ],
  },
  {
    title: "Web Development Intern",
    company_name: "Synexoo",
    company_website: "", // Add link if available
    icon: "", // Replace with imported icon if available
    iconBg: "#E6DEDD",
    date: "January 2025 – February 2025",
    points: [
      "Created a fully functional To-Do List app with task persistence using local storage.",
      "Implemented key task features including add, delete, and mark-as-complete.",
    ],
  },
];


const projects = [
  // Existing web dev projects (Bookstore, To-Do) ...

  {
    name: "Smart Shopping AI Recommender System",
    description:
      "An AI-based product recommender using TF-IDF and cosine similarity for content-based filtering. Delivered real-time personalized suggestions through a Streamlit web app.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "nlp", color: "green-text-gradient" },
      { name: "streamlit", color: "pink-text-gradient" },
    ],
    image: "", // Add image or screenshot if available
    hosted_link: "https://github.com/AnuragRaj11/GFG_AH.git",
  },
  {
    name: "IMDB Sentiment Analysis",
    description:
      "Trained an RNN model to classify movie reviews from the IMDB dataset using TensorFlow and Keras. Achieved 90%+ accuracy with custom embeddings and sequence padding.",
    tags: [
      { name: "tensorflow", color: "blue-text-gradient" },
      { name: "rnn", color: "green-text-gradient" },
      { name: "nlp", color: "pink-text-gradient" },
    ],
    image: "", // Add image or screenshot if available
    hosted_link: "https://github.com/AnuragRaj11/IMDB-Movie-Review-RNN-Project",
  },
   {
    name: "Bookstore App",
    description:
      "A full-stack app with Node.js, Express, MongoDB, and JWT that enables CRUD operations and advanced filtering for book records. Deployed on Render with 40% improved runtime efficiency.",
    tags: [
      { name: "nodejs", color: "blue-text-gradient" },
      { name: "express", color: "green-text-gradient" },
      { name: "mongodb", color: "pink-text-gradient" },
    ],
    image: "", // Add image asset if available
    hosted_link: "https://zynetic-backend-1.onrender.com/",
  },
  {
    name: "To-Do List App",
    description:
      "A task manager with CRUD functionality, local storage, and responsive frontend design using HTML, CSS, and JS. Built during internship at Synexoo.",
    tags: [
      { name: "javascript", color: "blue-text-gradient" },
      { name: "html", color: "green-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
    ],
    image: "", // Add image asset if available
    hosted_link: "https://github.com/AnuragRaj11/To_Do_List.git",
  },
];


const personalInfo = {
  name: "Anurag",
  fullName: "Anurag Raj",
  email: "cloudanurag11@gmail.com",
  role: "Full Stack Developer | AI/ML Practitioner",
  about: `I'm a passionate Full Stack Developer and AI/ML enthusiast with strong hands-on experience in building scalable web applications and intelligent systems. I specialize in the MERN stack (MongoDB, Express.js, React.js, Node.js), REST APIs, and cloud deployments using GCP and Azure.
On the AI side, I've developed production-ready deep learning and NLP models using TensorFlow, PyTorch, and Scikit-learn. My projects span across sentiment analysis, recommendation engines, and intelligent web apps. I love solving real-world problems, learning continuously, and contributing to meaningful tech solutions.`,
  projectsIntro: `Here are a few selected projects that highlight my experience across full-stack development and AI/ML. Each project solves a real-world problem, showcasing my technical skills and my ability to build robust, scalable, and user-friendly applications.`,
};


const publicUrls = {
  resume:
    "https://drive.google.com/file/d/1z7eKMfIOb9omWWOqBaLdN6lKZwvoTQIb/view?usp=sharing",
  socialProfiles: {
    linkedin: {
      title: "linkedin",
      link: "https://www.linkedin.com/in/anuragraj11/",
      icon: linkedIn,
    },
    github: {
      title: "github",
      link: "https://github.com/AnuragRaj11",
      icon: github,
    },
  },
};


export {
  services,
  technologies,
  experiences,
  projects,
  navigationPaths,
  personalInfo,
  publicUrls,
};
