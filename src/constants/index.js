import {
  mobile,
  backend,
  creator,
  web,
  ht,
  reactjs,
  nextJs,
  nodejs,
  mongodb,
  java,
  mysql,
  git,
  linkedIn,
  github,
  tf,
  python,
  pytorch,
  scikit,
  pandas,
  numpy,
  aicte,
  prodigy,
  synexoo,
  zyn,
  todo,
  panc,
  chr,
  imdb,
  prs,
  AIcart,
  AIRes,
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
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Machine Learning Engineer",
    icon: mobile,
  },
  {
    title: "Java Developer",
    icon: backend,
  },
  {
    title: "Python Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5, CSS, JS",
    icon: ht,
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
  {
    name: "TensorFlow",
    icon: tf,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "PyTorch",
    icon: pytorch,
  },
  {
    name: "Scikit-learn",
    icon: scikit,
  },
  {
    name: "Pandas",
    icon: pandas,
  },
  {
    name: "NumPy",
    icon: numpy,
  },
];

const experiences = [
  {
    title: "Web Development Intern",
    company_name: "Synexoo",
    company_website: "https://www.linkedin.com/company/synexoo/?originalSubdomain=in",
    icon: synexoo,
    iconBg: "#E6DEDD",
    date: "January 2025 – February 2025",
    points: [
      "Created a fully functional To-Do List app with task persistence using local storage.",
      "Implemented key task features including add, delete, and mark-as-complete.",
    ],
  },
  {
    title: "AI-ML Intern",
    company_name: "AICTE - EduSkills",
    company_website: "https://www.eduskillsfoundation.org/",
    icon: aicte,
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
    icon: prodigy,
    iconBg: "#E6DEDD",
    date: "June 2024 – July 2024",
    points: [
      "Enhanced REST API performance and built interactive UI components with HTML, CSS, and JS.",
      "Collaborated with cross-functional teams to deliver scalable web solutions.",
    ],
  },
];


const projects = [
  {
    name: "AI Resume Matcher",
    description:
      "An AI-powered resume matching system that uses TF-IDF and cosine similarity to match job seekers with relevant job postings. Built with Python and MERN for an interactive user experience.",
    tags: [
      { name: "Cosine Similarity", color: "blue-text-gradient" },
      { name: "TF-IDF", color: "green-text-gradient" },
      { name: "NLP", color: "pink-text-gradient" },
    ],
    image: AIRes,
    hosted_link: "https://resumemat.netlify.app/",
    source_code_link: "https://github.com/AnuragRaj11/AI-Resume-Matcher",
  },
  {
    name: "AI-Powered Smart Cart",
    description:
      "An intelligent shopping system with real-time object detection using OpenCV and Python. Recommends products based on user preferences and purchase history with 40% faster checkout processing.",
    tags: [
      { name: "OpenCV", color: "blue-text-gradient" },
      { name: "Python", color: "green-text-gradient" },
      { name: "AI/ML", color: "pink-text-gradient" },
    ],
    image: AIcart,
    hosted_link: "https://aicart.netlify.app/",
    source_code_link: "https://github.com/AnuragRaj11/Smart-Cart",
  },
  {
    name: "Bookstore App",
    description:
      "Full-stack CRUD application with JWT authentication, advanced filtering, and MongoDB integration. Deployed on Render with 40% improved runtime efficiency.",
    tags: [
      { name: "Node.js", color: "blue-text-gradient" },
      { name: "Express.js", color: "green-text-gradient" },
      { name: "MongoDB", color: "pink-text-gradient" },
    ],
    image: zyn,
    hosted_link: "https://zynetic-backend-1.onrender.com/",
    source_code_link: "https://github.com/AnuragRaj11/Bookstore-App",
  },
    {
    name: " AdGuard 360: A Tech-Enabled Framework for Billboard Compliance",
    description:
      "An AI-powered framework for ensuring billboard compliance using advanced tech solutions. Built with Python and MERN for an interactive user experience.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Node.js", color: "green-text-gradient" },
      { name: "MongoDB", color: "pink-text-gradient" },
    ],
    image: AIRes,
    hosted_link: "https://github.com/AnuragRaj11/AdGuard-360_Technova",
    source_code_link: "https://github.com/AnuragRaj11/AdGuard-360_Technova",
  },
  {
    name: "Pancreatic Cancer Awareness App",
    description:
      "Interactive web application educating users about pancreatic cancer symptoms, diagnosis, and treatment options. Built with Streamlit for accessible healthcare awareness.",
    tags: [
      { name: "Streamlit", color: "green-text-gradient" },
      { name: "Python", color: "blue-text-gradient" },
      { name: "Healthcare", color: "pink-text-gradient" },
    ],
    image: panc,
    hosted_link: "https://pancreaticancer.streamlit.app/",
    source_code_link: "https://github.com/AnuragRaj11/Pancreatic-Cancer-Info-App",
  },
  {
    name: "Smart Shopping AI Recommender",
    description:
      "Content-based product recommendation engine using TF-IDF and cosine similarity. Delivers real-time personalized suggestions through an interactive Streamlit interface.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "NLP", color: "green-text-gradient" },
      { name: "Streamlit", color: "pink-text-gradient" },
    ],
    image: prs,
    hosted_link: "https://github.com/AnuragRaj11/GFG_AH",
    source_code_link: "https://github.com/AnuragRaj11/GFG_AH",
  },
  {
    name: "IMDB Sentiment Analysis",
    description:
      "RNN-based sentiment classifier for movie reviews achieving 90%+ accuracy. Implemented custom embeddings and sequence padding using TensorFlow and Keras.",
    tags: [
      { name: "TensorFlow", color: "blue-text-gradient" },
      { name: "RNN", color: "green-text-gradient" },
      { name: "NLP", color: "pink-text-gradient" },
    ],
    image: imdb,
    hosted_link: "https://github.com/AnuragRaj11/IMDB-Movie-Review-RNN-Project",
    source_code_link: "https://github.com/AnuragRaj11/IMDB-Movie-Review-RNN-Project",
  },
  {
    name: "Customer Churn Prediction",
    description:
      "Deep learning-based Streamlit application predicting customer churn using ANN. Features data preprocessing, training visualization, and interactive prediction interface.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Streamlit", color: "green-text-gradient" },
      { name: "Deep Learning", color: "pink-text-gradient" },
    ],
    image: chr,
    hosted_link: "https://churnann.streamlit.app/",
    source_code_link: "https://github.com/AnuragRaj11/ANN-Classification-Churn",
  },
  {
    name: "To-Do List App",
    description:
      "Task management application with CRUD functionality and persistent local storage. Built with vanilla JavaScript featuring responsive design and intuitive UI.",
    tags: [
      { name: "JavaScript", color: "blue-text-gradient" },
      { name: "HTML5", color: "green-text-gradient" },
      { name: "CSS3", color: "pink-text-gradient" },
    ],
    image: todo,
    hosted_link: "https://github.com/AnuragRaj11/To_Do_List",
    source_code_link: "https://github.com/AnuragRaj11/To_Do_List",
  },
];


const personalInfo = {
  name: "Anurag Raj",
  fullName: "Anurag Raj",
  email: "cloudanurag11@gmail.com",
  role: "Full Stack Developer | AI/ML Engineer",
  about: `I'm a passionate Full Stack Developer and AI/ML enthusiast with strong hands-on experience in building scalable web applications and intelligent systems. I specialize in the MERN stack (MongoDB, Express.js, React.js, Node.js), REST APIs, and cloud deployments using GCP and Azure.
On the AI side, I've developed production-ready deep learning and NLP models using TensorFlow, PyTorch, and Scikit-learn. My projects span across sentiment analysis, recommendation engines, and intelligent web apps. I love solving real-world problems, learning continuously, and contributing to meaningful tech solutions.`,
  projectsIntro: `Here are a few selected projects that highlight my experience across full-stack development and AI/ML. Each project solves a real-world problem, showcasing my technical skills and my ability to build robust, scalable, and user-friendly applications.`,
};


const publicUrls = {
  resume:
    "https://docs.google.com/document/d/1MYxhnzr0TagVzx3iRtb1uYmodjcTPigfd2shFCOWmPg/ed",
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
