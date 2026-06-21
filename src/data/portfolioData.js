import img1 from "../images/shop hub.png"
import img2 from  "../images/Untitled design.png"
import img3 from "../images/_travel agencey web.png"
import img4 from "../images/multipage ecommrece website.png"
import img5 from "../images/digital services.png"
import img6 from "../images/movie-hub.png"
import img7 from "../images/shoe website.png"









export const personalInfo = {
  name: 'Asra Nawaz',
  title: 'Frontend Web Developer | React Developer | Computer Science Graduate',
  tagline:
    'I build modern, responsive, and user-friendly web applications using React, JavaScript, HTML, CSS, and modern frontend technologies. Passionate about creating clean user interfaces and solving real-world problems through code.',
  email: 'asranawaz345@email.com',
  phone: '+92 3427264031',
  location: 'Pakistan',
  resumeUrl: '/resume/Asra-Nawaz-Resume.pdf',
  social: {
    linkedin: 'https://linkedin.com/in/asra-nawaz',
    github: 'https://github.com/asra-nawaz',
    facebook: 'https://facebook.com/asra-nawaz',
    instagram: 'https://instagram.com/asra-nawaz',
  },
};





export const aboutHighlights = [
  'Computer Science Graduate',
  'Frontend Developer',
  'React Enthusiast',
  'Continuous Learner',
  'Problem Solver',
];

export const aboutContent = [
  'I am a Computer Science graduate with a strong interest in web development and modern frontend technologies. I enjoy creating responsive and visually appealing websites that provide excellent user experiences.',
  'Over time, I have developed projects using React, JavaScript, HTML, CSS, Context API, APIs, and responsive design principles. My goal is to continuously improve my skills and contribute to meaningful digital solutions.',
  'I am currently focused on frontend development while expanding my knowledge of modern web technologies and best development practices.',
];

export const skills = {
  frontend: [
    { name: 'HTML5', level: 90 },
    { name: 'CSS3', level: 88 },
    { name: 'JavaScript', level: 85 },
    { name: 'React.js', level: 85 },
    { name: 'React Router', level: 80 },
    { name: 'Context API', level: 82 },
    { name: 'Responsive Design', level: 90 },
    { name: 'Bootstrap', level: 75 },
    { name: 'Tailwind CSS', level: 78 },
  ],
  programming: [
    { name: 'Python', level: 75 },
    { name: 'OOP', level: 80 },
  ],
  tools: [
    { name: 'VS Code', level: 92 },
    { name: 'Git', level: 80 },
    { name: 'GitHub', level: 85 },
    { name: 'Vite', level: 82 },
    { name: 'Figma', level: 70 },
  ],
};

export const services = [
  {
    title: 'Frontend Development',
    description:
      'Building responsive and modern web interfaces using React and JavaScript.',
    icon: 'code',
  },
  {
    title: 'Website Design',
    description:
      'Creating attractive and user-friendly layouts focused on user experience.',
    icon: 'design',
  },
  {
    title: 'Responsive Web Design',
    description:
      'Ensuring websites work perfectly on desktop, tablet, and mobile devices.',
    icon: 'responsive',
  },
  {
    title: 'API Integration',
    description:
      'Connecting applications with external APIs and handling dynamic data.',
    icon: 'api',
  },
];

export const projects = [
  {
    id: '1',
    title: 'ShopHub E-Commerce Store',
    category: 'react',
    description:
      'A complete React-based e-commerce application featuring product browsing, category filtering, wishlist management, shopping cart functionality, dark mode, and multi-step checkout process.',
    technologies: [
      'React',
      'Vite',
      'React Router',
      'Context API',
      'Fake Store API',
      'CSS Modules',
    ],
    features: [
      'Product Listing',
      'Category Filtering',
      'Search Functionality',
      'Wishlist',
      'Cart Management',
      'Checkout Flow',
      'Dark Mode',
      'Responsive Design',
    ],
    liveUrl: 'https://shop-hub-lovat-sigma.vercel.app/',
    githubUrl: 'https://github.com/asra46/shopHub',
    image: img1,
    featured: true,
  },
 {
  id: '2',
  title: 'MovieHub - Movie Discovery App',
  category: 'react',
  description:
    'A modern movie discovery platform built with React and TMDB API. Users can browse trending movies, search for films, view detailed movie information, manage watchlists, and explore popular movies through an intuitive and responsive interface.',

  technologies: [
    'React',
    'Vite',
    'React Router',
    'Context API',
    'TMDB API',
    'Tailwind CSS',
  ],

  features: [
    'Trending Movies',
    'Movie Search',
    'Movie Details',
    'Watchlist Management',
    'Pagination',
    'Responsive Design',
    'Dark Theme UI',
    'TMDB API Integration',
  ],

  liveUrl: 'https://ai-movie-hub.vercel.app/',
  githubUrl: 'https://github.com/asra46/AI-Movie-Hub.git',

  image: img6,
  featured: true,
},
  {
    id: '3',
    title: "Expense Tracker Website",
    category: 'react',
    description:
      'An expense tracking web app that helps users manage and track their daily expenses with a simple interface.',
    technologies: ['React', 'Vite', 'CSS3', 'Context API'],
    features: [
      'Scroll Animations',
      'Project Filtering',
      'Responsive Design',
    ],
    liveUrl: 'https://expense-trackor-website.vercel.app/',
    githubUrl: 'https://github.com/asra46/Expense-Trackor-Website.git',
    image: img2,
    featured: true,
  },
  {
  id: '4',
  title: 'AeroKicks - Sneaker E-Commerce Website',
  category: 'web',

  description:
    'A modern and responsive sneaker e-commerce website built with React. Users can browse premium shoe collections, view product details, manage shopping carts, authenticate accounts, and enjoy a smooth shopping experience through an elegant dark-themed interface.',

  technologies: [
    'React',
    'Vite',
    'Bootstrap',
    'Context API',
    'React Router',
    'CSS3'
  ],

  features: [
    'Product Catalog',
    'Product Details Page',
    'Shopping Cart',
    'User Authentication',
    'Featured Collections',
    'Responsive Design',
    'Dark Modern UI',
    'Interactive Animations'
  ],

  liveUrl: 'https://shoe-website-pxgk-git-main-asras-projects-c1afabaf.vercel.app/', 
  githubUrl: 'https://github.com/asra46/shoe-website.git',

  image: img7,
  featured: true,
},
  {
    id: '5',
    title: 'Traveling Agencey Website',
    category: 'web',
    description:"A simp built with React to add, update, and delete daily tasksle and interactive Todo app.",
      
    technologies: ["React", 'Bootstrap' , "Context API"],
    features: [
      'Course Listings',
      'Admissions Info',
      'Faculty Profiles',
      'Contact Forms',
    ],
  
    liveUrl: 'https://travel-agency-website-8voh.vercel.app/',
    githubUrl: 'https://github.com/asra46/Travel-Agency-Website.git',
    image: img3,
    featured: false,
  },
  {
    id: '6',
    title: 'Ecommerce Website Design',
    category: 'web',
    description:'A multi-page ecommerce website design with product listings, categories, and modern UI layout.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    features: [
      'Product Catalog',
      'Category Navigation',
      'Elegant UI',
      'Mobile Responsive',
    ],
    liveUrl: 'https://multipage-ecommerce-web.netlify.app/',
    githubUrl: 'https://github.com/asra46/multi-page-ecommerce-website-main.git',
    image: img4,
    featured: false,
  },
  {
    id: '7',
    title:'Digital Services Website',
    category: 'web',
    description:'A professional digital services website showcasing services, features, and business information with a clean design.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    features: [
      'Product Catalog',
      'Category Navigation',
      'Elegant UI',
      'Mobile Responsive',
    ],

    liveUrl: 'https://digital-services-web.netlify.app/',
    githubUrl: 'https://github.com/asra46/Digital-Services-Website.git',
    image: img5,
    featured: false,
  },
];

export const education = {
  degree: 'BS Computer Science',
  description:
    'Graduated with a strong foundation in programming, software development, databases, web technologies, and problem-solving.',
};

export const experience = {
  title: 'Web Development Projects',
  description: 'Developed multiple frontend projects focusing on:',
  highlights: [
    'React Development',
    'Responsive Design',
    'API Integration',
    'UI/UX Implementation',
    'State Management',
  ],
};

export const achievements = [
  'Built Multiple React Projects',
  'Developed Full E-Commerce Application',
  'Completed Web Development Training',
  'Improved Frontend Development Skills',
  'Continuous Learning in Modern Web Technologies',
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const typingRoles = [
  'Frontend Web Developer',
  'React Developer',
  'UI Enthusiast',
  'Problem Solver',
];

export const techIcons = [
  { name: 'React', symbol: '⚛️' },
  { name: 'JS', symbol: 'JS' },
  { name: 'HTML', symbol: '5' },
  { name: 'CSS', symbol: '3' },
  { name: 'Git', symbol: '⎇' },
  { name: 'Vite', symbol: '⚡' },
];
