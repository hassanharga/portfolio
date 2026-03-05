export const yearOfExperience = new Date().getFullYear() - 2019;

export const heroContent = {
  name: 'Hassan Mohamed',
  title: 'Senior Full Stack Developer',
  bio: `Versatile and impact-driven Full Stack Developer with ${yearOfExperience}+ years of experience building scalable, secure, and high-performance web applications. I specialize in crafting seamless user experiences with modern frontend technologies while architecting robust backend systems that handle millions of requests.`,
};

export const skills = {
  frontend: ['React', 'Next.js', 'Angular', 'React Native'],
  backend: ['Node.js', 'Nest.js', 'Express.js', 'Go'],
  databases: ['MongoDB', 'PostgreSQL', 'Redis', 'DynamoDB'],
  cloudDevops: ['Docker', 'CI/CD', 'AWS', 'GCP'],
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
    title: 'Yassir',
    description: 'Hassle-free ride-hailing, designed for your convenience and safety',
    tags: [
      'TypeScript ',
      ' JavaScript ',
      ' Node.js ',
      ' MongoDB ',
      ' Express.js ',
      ' Full-Stack Development ',
      ' Redis ',
      ' Git ',
      ' Github ',
      ' Microservices ',
      ' Docker ',
      ' JIRA ',
      ' Agile Methodologies ',
      ' ECMAScript ',
      ' NoSQL ',
      ' Unit Testing ',
      ' Object-Oriented Programming (OOP) ',
      ' Presentation Skills ',
      ' Problem Solving ',
      ' REST APIs ',
      ' Agile Software Development ',
      ' SQL ',
      ' Server Programming ',
      ' Swagger ',
      ' Software Solutions ',
      ' JavaScript Frameworks ',
      ' Google Cloud Platform (GCP)',
    ],
    image: '/images/yassir.svg',
    link: 'https://yassir.com/',
    github: '',
  },
  {
    title: 'GO-Social-API',
    description:
      'A robust social networking API built with Go, featuring user authentication, post management, commenting system, follower relationships, and user feeds.',
    tags: ['GO', 'PostgreSQL', 'Redis', 'Swagger', 'Docker'],
    image: '/images/go.png',
    link: 'https://github.com/hassanharga/go-social',
    github: 'https://github.com/hassanharga/go-social',
  },
  {
    title: 'ITBA',
    description:
      'Our innovative Eco-Tourism and North Reserve Tourism application is designed to promote sustainable travel experiences, enabling adventurers and nature enthusiasts to explore pristine landscapes responsibly. With a focus on conservation and minimal environmental impact, the app provides travelers with detailed guides to North Reserve’s untouched ecosystems, highlighting local wildlife, flora, and culturally significant sites.',
    tags: ['React', 'Next.js', 'Node.js', 'Typescript', 'Material-UI', 'Azure'],
    image: '/images/itba.jpg',
    link: 'https://www.srfsh.com/',
    github: '',
  },
  {
    title: 'Dental Axess',
    description:
      'Dental Axess are specialists in digital dentistry, providing a large range of hardware and software components to complete your digital workflow sourced from market leading firms for dental treatment providers and selected using Dental Axess experience',
    tags: ['Angular', 'Node.js', 'MongoDB', 'TypeScript', 'Docker', 'SCSS'],
    image: '/images/xflow.png',
    link: 'https://dentalaxess.com/products/xflow/',
    github: '',
  },
  {
    title: 'Twint Super Deals',
    description: 'Benefit from exclusive discount, promotions and special offers every week through twint app',
    tags: [
      'Node.js',
      'MongoDB',
      'RabbitMQ',
      'Angular',
      'Express.js',
      'TypeScript',
      'Google Cloud Platform (GCP)',
      'Docker',
      'Confluence',
      'Agile Software Development',
      'Microservices',
      'NgRx',
      'JIRA',
      'docker',
    ],
    image: '/images/twint.svg',
    link: 'https://deals.twint.ch/',
    github: '',
  },
  {
    title: 'Rateel',
    description:
      'Rateel is a free app that lets you know the reciter of any Quran audio. By only listening to the audio, Rateel provides you with all the information you need, such as the name of the reciter, and what surah (chapter) he is reciting.',
    tags: [
      'Node.js',
      'Angular',
      'TypeScript',
      'JavaScript',
      'Amazon Dynamodb',
      'Amazon Web Services (AWS)',
      'Agile Software Development',
      'Github',
    ],
    image: '/images/rateel.webp',
    link: 'https://play.google.com/store/apps/details?id=sa.com.stc.Rateel',
    github: '',
  },
  {
    title: 'STC Dashboard',
    description:
      'Monitor Task for IOS and Android team while developing apps and provide charts for measuring analytics and developing subs for test teams to test their work',
    tags: [
      'Node.js',
      'Angular',
      'TypeScript',
      'JavaScript',
      'Amazon Dynamodb',
      'Amazon Web Services (AWS)',
      'Agile Software Development',
      'Github',
    ],
    image: '',
    link: 'https://mcicd.com/login',
    github: '',
  },
  {
    title: 'Saldwich',
    description:
      'Food application and dashboard for managing restaurants branches, delivery, meals, menu items and orders for each branch based on customer location',
    tags: [
      'TypeScript',
      'Node.js',
      'React.js',
      'Amazon Dynamodb',
      'JavaScript',
      'NoSQL',
      'Amazon Web Services (AWS)',
      'React Native',
      'Full-Stack Development',
      'Agile Software Development',
      'JIRA',
    ],
    image: '/images/saldwich.png',
    link: 'https://dashboard.saldwich.com/login',
    github: '',
  },
  {
    title: 'Vodafone Germany',
    description: 'Develop vodafone site in germany',
    tags: ['TypeScript', 'JavaScript', 'Angular', 'JIRA'],
    image: '/images/vodafone.png',
    link: 'https://www.vodafone.de/',
    github: '',
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
