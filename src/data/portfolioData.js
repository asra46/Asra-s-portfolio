import img1 from "../images/shop hub.png"
import img2 from  "../images/Untitled design.png"
import img3 from "../images/_travel agencey web.png"
import img4 from "../images/multipage ecommrece website.png"
import img5 from "../images/digital services.png"
import img6 from "../images/movie-hub.png"
import img7 from "../images/shoe website.png"
import img8 from "../images/TaskFlow_LinkedIn_Project_Showcase (1).png"
import img9 from "../images/ai-chatbot.png"

export const personalInfo = {
  name: 'Asra Nawaz',
  title: 'Full Stack Developer | WordPress Developer | Computer Science Graduate',
  tagline:
    'I build complete web applications from frontend to backend using React, JavaScript,  WordPress, and modern web technologies. Passionate about clean user interfaces, custom WordPress sites, and solving real-world problems through code.',
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
  'Full Stack Developer',
  'WordPress Developer',
  'Continuous Learner',
  'Problem Solver',
];

export const aboutContent = [
  'I am a Computer Science graduate and Full Stack Developer with a strong interest in building complete web solutions — from responsive React interfaces to backend APIs, databases, and WordPress websites that clients can manage themselves.',
  'Over time, I have developed projects using React, JavaScript, HTML, CSS, MongoDB, WordPress, WooCommerce, REST APIs, and responsive design principles. My goal is to continuously improve my skills and contribute to meaningful digital solutions.',
  'I currently work across the full stack: modern frontend applications, backend logic and databases, and custom WordPress themes and stores for businesses that need a fast, easy-to-update website.',
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
  backend: [
    { name: 'Node.js', level: 78 },
    { name: 'Express.js', level: 75 },
    { name: 'MongoDB', level: 80 },
    { name: 'REST APIs', level: 82 },
    { name: 'WordPress', level: 85 },
    { name: 'WooCommerce', level: 80 },
  ],
  tools: [
    { name: 'VS Code', level: 92 },
    { name: 'Git', level: 80 },
    { name: 'GitHub', level: 85 },
    { name: 'Vite', level: 82 },
    { name: 'Canva', level: 70 },
  ],
};

export const services = [
  {
    title: 'Full Stack Development',
    description:
      'Building complete web applications with React frontends, APIs, and Node.js or PHP backends.',
    icon: 'code',
  },
  {
    title: 'WordPress Development',
    description:
      'Custom WordPress themes, WooCommerce stores, and business sites that are easy to manage.',
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
      'Connecting applications with REST APIs, databases, and dynamic data.',
    icon: 'api',
  },
];

export const projects = [
  {
  id: '1',
  title: 'AI Assistant Chatbot',
  category: 'react',
  description:
    'A modern AI chatbot web application built with React, designed to provide intelligent assistance for programming, learning, debugging, and writing through a clean and interactive chat interface.',
  technologies: ['React', 'JavaScript', 'CSS', 'Gemini AI', 'API Integration'],
  features: [
    'AI-Powered Conversations',
    'Programming & Coding Assistance',
    'JavaScript Debugging Support',
    'Interactive Chat Interface',
    'New Chat & Clear Chat',
    'Responsive Design',
  ],

  liveUrl: 'https://ai-chatbot-246.netlify.app/',
  githubUrl: 'https://github.com/asra46/ai-chatbot.git',
  image: img9,
  featured: false,
},
  {
    id: '9',
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
  category: 'react',

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
    title: 'Travel Agency Website',
    category: 'react',
    description:
      'A modern travel agency website with destination highlights, booking-focused layout, and a responsive multi-page experience.',
    technologies: ["React", 'Bootstrap' , "Context API"],
    features: [
      'Destination Listings',
      'Tour Packages',
      'Responsive Layout',
      'Contact Forms',
    ],
  
    liveUrl: 'https://travel-agency-website-8voh.vercel.app/',
    githubUrl: 'https://github.com/asra46/Travel-Agency-Website.git',
    image: img3,
    featured: false,
  },
  {
    id: '6',
    title: 'WooCommerce E-Commerce Store',
    category: 'react',
    description:
      'A multi-page e-commerce storefront built as a custom WordPress and WooCommerce website, with product listings, categories, and a modern shopping layout that is easy for clients to update.',
    technologies: ['WordPress', 'WooCommerce', 'PHP', 'CSS', 'JavaScript'],
    features: [
      'Product Catalog',
      'Category Navigation',
      'WooCommerce Cart',
      'Mobile Responsive',
    ],
    liveUrl: 'https://multipage-ecommerce-web.netlify.app/',
    githubUrl: 'https://github.com/asra46/multi-page-ecommerce-website-main.git',
    image: img4,
    featured: false,
  },
  {
    id: '7',
    title:'WordPress Business Website',
    category: 'react',
    description:
      'A professional digital services website built as a custom WordPress theme, showcasing services, features, and business information with a clean, conversion-focused design.',
    technologies: ['WordPress', 'PHP', 'CSS', 'JavaScript', 'Custom Theme'],
    features: [
      'Custom WordPress Theme',
      'Services Sections',
      'Easy Content Updates',
      'Mobile Responsive',
    ],

    liveUrl: 'https://digital-services-web.netlify.app/',
    githubUrl: 'https://github.com/asra46/Digital-Services-Website.git',
    image: img5,
    featured: false,
  },

  {
  id: '8',
  title: "Task Flow Dashboard",
  category: 'backend',
  description:
    'A modern task management dashboard that helps users organize, manage, and track their tasks through a clean and intuitive interface.',
  technologies: ['React', 'Vite', 'JavaScript', 'CSS3', 'Node.js', 'Express.js', 'MongoDB'],
  features: [
    'Task Management',
    'Dashboard Analytics',
    'Task Board & Calendar',
    'User Authentication',
    'Team Management',
    'Responsive Design',
  ],
  liveUrl: 'YOUR_LIVE_URL',
  githubUrl: 'https://github.com/asra46/task-management-dashboard.git',
  image: img8,
  featured: true,
},



];

export const education = {
  degree: 'BS Computer Science',
  description:
    'Graduated with a strong foundation in programming, software development, databases, web technologies, WordPress, and problem-solving.',
};

export const experience = {
  title: 'Full Stack & WordPress Projects',
  description: 'Developed multiple full stack and WordPress projects focusing on:',
  highlights: [
    'Full Stack Development',
    'WordPress & WooCommerce',
    'React Applications',
    'REST API Integration',
    'Responsive UI/UX',
  ],
};

export const achievements = [
  'Built Multiple Full Stack Projects',
  'Developed WordPress & WooCommerce Sites',
  'Built Full E-Commerce Applications',
  'Completed Web Development Training',
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
  'Full Stack Developer',
  'WordPress Developer',
  'React Developer',
  'Problem Solver',
];

export const techIcons = [
  { name: 'React', symbol: '⚛️' },
  { name: 'JS', symbol: 'JS' },
  { name: 'WP', symbol: 'W' },
  { name: 'PHP', symbol: 'P' },
  { name: 'Git', symbol: '⎇' },
  { name: 'Node', symbol: 'N' },
];
