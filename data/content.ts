export const yearOfExperience = new Date().getFullYear() - 2019;

export const heroContent = {
  name: 'Hassan Mohamed',
  title: 'Senior Full Stack Developer',
  bio: `Versatile and impact-driven Full Stack Developer with ${yearOfExperience}+ years of experience building scalable, secure, and high-performance web applications. I specialize in crafting seamless user experiences with modern frontend technologies while architecting robust backend systems that handle millions of requests.`,
};

export const skills = {
  frontend: [
    { name: 'React', level: 95 },
    { name: 'Next.js', level: 96 },
    { name: 'Angular', level: 85 },
    { name: 'React Native', level: 75 },
  ],
  backend: [
    { name: 'Node.js', level: 95 },
    { name: 'Nest.js', level: 95 },
    { name: 'Express.js', level: 95 },
    { name: 'Go', level: 50 },
  ],
  databases: [
    { name: 'MongoDB', level: 90 },
    { name: 'PostgreSQL', level: 90 },
    { name: 'Redis', level: 90 },
    { name: 'DynamoDB', level: 80 },
  ],
  cloudDevops: [
    { name: 'Docker', level: 90 },
    { name: 'CI/CD', level: 85 },
    { name: 'AWS', level: 85 },
    { name: 'GCP', level: 75 },
  ],
};

export const experience = [
  {
    id: 1,
    role: 'Senior Backend Developer',
    company: 'Yassir',
    location: 'Remote',
    period: 'Oct 2025 - Present',
    description: [
      'Build robust and scalable software in Node js Design and create microservices and system architecture for projects, and contribute and provide feedback to other team members',
      'Help improve existing code quality through writing unit tests, automation and performing code reviews',
      'Participate in brainstorming sessions and contribute ideas to our technology, algorithms and products',
      'Work with the engineering and design teams to understand end-user requirements, formulate use-cases, and then translate that into a pragmatic and effective technical solution',
      'Dive into difficult problems and successfully deliver results on schedule',
    ],
  },
  {
    id: 2,
    role: 'Senior Fullstack Developer',
    company: 'InnovationTeam',
    location: 'Remote',
    period: 'Feb 2024 - Oct 2025',
    description: [
      'Designed and developed responsive web applications with Typescript, React, Next.js, and modern UI frameworks, implementing efficient state management using Redux and Context API',
      'Developed server-side rendering (SSR) with Next.js to improve SEO and performance',
      'Architected backend solutions using Node.js, integrating middleware for authentication, logging, request validation, and error handling',
      'Integrated dotCMS as a headless CMS, connecting via GraphQL APIs to deliver dynamic, structured content to React-based UIs',
      'Managed containerized deployments using Docker on AWS EC2, enabling autoscaling and reduced downtime',
    ],
  },
  {
    id: 3,
    role: 'Senior Fullstack Developer',
    company: 'Modeso',
    location: 'Cairo, Egypt',
    period: 'Sep 2023 - Feb 2024',
    description: [
      'Upgraded the application to the latest versions of Typescript, React, Angular, Node.js and efficiently managed state using Redux, Zustand, and Ngrx',
      'Implemented Storybook for React and Angular, resulting in thoroughly tested components and improved component reusability',
      'Employed MongoDB for efficient database management, utilizing its flexibility and scalability to drive dynamic web applications',
      'Mentored junior developers, providing code reviews, onboarding support, and guidance on development best practices to improve team productivity and skill growth',
    ],
  },
  {
    id: 4,
    role: 'Fullstack Developer',
    company: 'InnovationTeam / STC',
    location: 'Remote',
    period: 'Feb 2022 - Sep 2023',
    description: [
      'Designed a team management tool using Typescript, Node.js, Angular and React to track progress and tasks efficiently',
      'Integrated the tool with GitHub and Jira, automating task and branch retrieval for seamless workflow tracking',
      'Architected and built real-time applications with Socket.io and Node.js for notifications and live data updates, enhancing user engagement and interaction',
      'Implemented Slack notifications, enhancing team communication by alerting team members about build updates',
      'Deployed and managed applications on AWS cloud platform, leveraging services like AWS (Lambda, EC2, S3, Route53) to optimize cost and performance',
    ],
  },
  {
    id: 5,
    role: 'Fullstack Developer',
    company: 'VOIS (Vodafone Intelligent Solutions)',
    location: 'Cairo, Egypt',
    period: 'Apr 2021 - Feb 2022',
    description: [
      'Engineered responsive user interfaces using Typescript, React and Angular, ensuring high performance and adherence to best practices',
      'Collaborated in Agile ceremonies, such as sprint planning, retrospectives, and daily stand-ups, contributing to an organized and efficient development process',
      'Ensured application robustness and maintainability through rigorous testing strategies, employing Jest in combination with Angular Testing Library for comprehensive unit and integration tests',
      'Contributed to an internal UI library, developing reusable shared components for streamlined development',
    ],
  },
  {
    id: 6,
    role: 'Fullstack Developer',
    company: 'Codiles',
    location: 'Cairo, Egypt',
    period: 'Apr 2019 - Apr 2021',
    description: [
      "Developed robust full-stack applications using Typescript, React, Node.js, Angular, MongoDB and AWS (DynamoDB, EC2, S3), enhancing the company's capacity to meet critical deadlines",
      'Developed mobile applications leveraging React Native and Expo framework',
      'Created real-time dashboards and data synchronization using Node.js and Socket.io for real-time updates and chat messaging. Implemented Redis for session management and data caching',
      'Established CI/​CD pipelines in AWS CodePipeline and GitHub Actions, automating build, test, and deployment cycles',
    ],
  },
];

export const education = [
  {
    degree: 'BSc Computer Science',
    school: 'Mansoura University',
    period: '2011 - 2015',
  },
  {
    degree: 'Web Development Diploma',
    school: 'Information Technology Institute (ITI)',
    period: '2018 - 2019',
  },
];

export const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description:
      'Full-stack e-commerce solution with real-time inventory, payment processing, and AI-powered recommendations.',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'Stripe'],
    image: '/images/project1.jpg',
    link: '#',
    github: '#',
  },
  {
    id: 2,
    title: 'Real-Time Collaboration Tool',
    description: 'WebSocket-based collaboration platform with live document editing and video conferencing.',
    tags: ['React', 'Go', 'WebSocket', 'MongoDB', 'WebRTC'],
    image: '/images/project2.jpg',
    link: '#',
    github: '#',
  },
  {
    id: 3,
    title: 'Fintech Dashboard',
    description: 'Analytics dashboard for financial data visualization with real-time market updates.',
    tags: ['Angular', 'GraphQL', 'PostgreSQL', 'D3.js', 'AWS'],
    image: '/images/project3.jpg',
    link: '#',
    github: '#',
  },
  {
    id: 4,
    title: 'Mobile Banking App',
    description: 'Cross-platform mobile banking application with biometric authentication.',
    tags: ['React Native', 'Node.js', 'MongoDB', 'AWS Lambda'],
    image: '/images/project4.jpg',
    link: '#',
    github: '#',
  },
];

export const services = [
  {
    id: 1,
    title: 'Web Application Development',
    description:
      'Building modern, responsive, and performant web applications using React, Next.js, and Angular. From MVPs to enterprise-scale solutions.',
    icon: 'globe',
  },
  {
    id: 2,
    title: 'API & Backend Development',
    description:
      'Designing and implementing scalable RESTful and GraphQL APIs. Microservices architecture with Node.js and Go.',
    icon: 'server',
  },
  // {
  //   id: 3,
  //   title: 'Cloud & DevOps Solutions',
  //   description: 'Setting up CI/CD pipelines, containerization with Docker, and cloud infrastructure on AWS and Azure.',
  //   icon: 'cloud',
  // },
  {
    id: 4,
    title: 'Technical Consulting & Mentorship',
    description: 'Code reviews, architecture consulting, and team mentorship to elevate your development practices.',
    icon: 'users',
  },
];

export const contact = {
  email: 'hassanharga@gmail.com',
  phone: '+201282668013',
  secondPhone: '+201060707904',
  location: 'Egypt',
  linkedin: 'https://linkedin.com/in/hassanharga',
  github: 'https://github.com/hassanharga',
};

export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Skills', href: '#skills' },
  { name: 'Resume', href: '#resume' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];
