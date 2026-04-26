export const yearOfExperience = new Date().getFullYear() - 2019;

export const heroContent = {
  name: 'Hassan Mohamed',
  title: 'Senior Full Stack Developer',
  bio: `Senior full stack engineer with ${yearOfExperience}+ years building production web systems across marketplace, telecom, mobility, and SaaS products. Strongest in Node.js, React, Next.js, cloud deployments, APIs, and the messy integration work that turns product ideas into shipped software.`,
  proofPoints: [`${yearOfExperience}+ years shipping`, 'Backend + frontend depth', 'Cloud, APIs, microservices'],
};

export const skills = {
  productEngineering: {
    title: 'Product engineering',
    summary: 'Build recruiter-visible product surfaces from interface to data model.',
    items: ['React', 'Next.js', 'Angular', 'React Native', 'TypeScript'],
  },
  backendSystems: {
    title: 'Backend systems',
    summary: 'Design APIs and services that stay maintainable under real product traffic.',
    items: ['Node.js', 'Nest.js', 'Express.js', 'Go', 'Microservices'],
  },
  dataInfrastructure: {
    title: 'Data & infrastructure',
    summary: 'Choose pragmatic storage, caching, and deployment paths for the problem.',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'DynamoDB', 'Docker', 'AWS', 'GCP', 'CI/CD'],
  },
  engineeringLeadership: {
    title: 'Engineering leadership',
    summary: 'Raise delivery quality through reviews, testing, mentoring, and clear tradeoffs.',
    items: ['Code reviews', 'Unit testing', 'Architecture', 'Mentoring', 'Agile delivery'],
  },
};

export const experience = [
  {
    id: 1,
    role: 'Senior Backend Developer',
    company: 'Yassir',
    location: 'Remote',
    period: 'Oct 2025 - Present',
    description: [
      'Build Node.js microservices and system architecture for high-traffic mobility products where reliability, clear service boundaries, and maintainable delivery matter.',
      'Improve code quality through unit tests, automation, and code reviews that help the team move faster without accumulating avoidable production risk.',
      'Translate product, design, and operations requirements into pragmatic backend solutions that can be shipped, observed, and iterated on schedule.',
      'Contribute to architecture discussions and implementation planning, balancing delivery pressure with long-term maintainability for core platform services.',
    ],
  },
  {
    id: 2,
    role: 'Senior Fullstack Developer',
    company: 'InnovationTeam',
    location: 'Remote',
    period: 'Feb 2024 - Oct 2025',
    description: [
      'Built responsive React and Next.js applications with server-side rendering, improving performance, SEO readiness, and the overall quality of public product pages.',
      'Architected Node.js backend services with authentication, logging, validation, and structured error handling so teams could extend features with confidence.',
      'Integrated dotCMS through GraphQL to deliver structured content into React interfaces without coupling editorial workflows to application releases.',
      'Managed Docker deployments on AWS EC2, supporting more predictable releases and reducing manual operational friction during product delivery.',
    ],
  },
  {
    id: 3,
    role: 'Senior Fullstack Developer',
    company: 'Modeso',
    location: 'Cairo, Egypt',
    period: 'Sep 2023 - Feb 2024',
    description: [
      'Modernized TypeScript, React, Angular, and Node.js applications while improving state management patterns across Redux, Zustand, and NgRx code paths.',
      'Introduced Storybook for React and Angular component documentation, making shared UI behavior easier to test, review, and reuse across teams.',
      'Mentored junior developers through reviews, onboarding, and practical engineering guidance focused on readability, ownership, and delivery habits.',
      'Worked with MongoDB-backed application flows, keeping data access practical while supporting dynamic product requirements and fast iteration.',
    ],
  },
  {
    id: 4,
    role: 'Fullstack Developer',
    company: 'InnovationTeam / STC',
    location: 'Remote',
    period: 'Feb 2022 - Sep 2023',
    description: [
      'Designed team management tooling with TypeScript, Node.js, Angular, and React to make delivery progress, tasks, and team activity easier to track.',
      'Integrated GitHub, Jira, and Slack workflows to automate task tracking, branch visibility, and build updates across engineering teams.',
      'Built real-time Socket.io features for notifications and live data updates, improving coordination for teams working across mobile and web releases.',
      'Deployed and managed AWS services across Lambda, EC2, S3, and Route53, balancing operational cost, performance, and release reliability.',
    ],
  },
  {
    id: 5,
    role: 'Fullstack Developer',
    company: 'VOIS (Vodafone Intelligent Solutions)',
    location: 'Cairo, Egypt',
    period: 'Apr 2021 - Feb 2022',
    description: [
      'Engineered responsive React and Angular interfaces for enterprise telecom workflows where consistency, accessibility, and predictable behavior were important.',
      'Improved maintainability with Jest and Angular Testing Library coverage, giving teams better confidence around shared UI changes and regressions.',
      'Contributed reusable components to an internal UI library, reducing repeated implementation work and helping teams deliver screens more consistently.',
      'Collaborated through sprint planning, reviews, and retrospectives, keeping implementation decisions aligned with delivery priorities and team standards.',
    ],
  },
  {
    id: 6,
    role: 'Fullstack Developer',
    company: 'Codiles',
    location: 'Cairo, Egypt',
    period: 'Apr 2019 - Apr 2021',
    description: [
      'Delivered full-stack applications with TypeScript, React, Node.js, Angular, MongoDB, and AWS for products that needed fast, practical execution.',
      'Built React Native and Expo mobile applications alongside web products, moving between client interfaces, APIs, and release requirements as needed.',
      'Created real-time dashboards with Socket.io and Redis caching for live updates, messaging, session handling, and operational visibility.',
      'Established CI/CD pipelines with AWS CodePipeline and GitHub Actions, automating build, test, and deployment steps for repeatable delivery.',
    ],
  },
];

export const education = [
  {
    degree: 'Web Development Diploma',
    school: 'Information Technology Institute (ITI)',
    period: '2018 - 2019',
  },
  {
    degree: 'BSc Computer Science',
    school: 'Mansoura University',
    period: '2011 - 2015',
  },
];

export const projects = [
  {
    title: 'Yassir',
    description: 'Hassle-free ride-hailing, designed for your convenience and safety',
    outcome: 'Backend engineering for a regional mobility platform with microservice-scale delivery needs.',
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
    displayTags: ['Node.js', 'Microservices', 'MongoDB', 'Redis', 'Docker', 'GCP'],
    image: '/images/yassir.svg',
    link: 'https://yassir.com/',
    linkLabel: 'Product site',
    featured: true,
    github: '',
  },
  {
    title: 'GO-Social-API',
    description:
      'A robust social networking API built with Go, featuring user authentication, post management, commenting system, follower relationships, and user feeds.',
    outcome: 'A portfolio API project showing backend design, caching, documentation, and deployable infrastructure.',
    tags: ['GO', 'PostgreSQL', 'Redis', 'Swagger', 'Docker'],
    displayTags: ['Go', 'PostgreSQL', 'Redis', 'Swagger', 'Docker'],
    image: '/images/go.png',
    link: 'https://github.com/hassanharga/go-social',
    linkLabel: 'View code',
    featured: true,
    github: 'https://github.com/hassanharga/go-social',
  },
  {
    title: 'ITBA',
    description:
      'Our innovative Eco-Tourism and North Reserve Tourism application is designed to promote sustainable travel experiences, enabling adventurers and nature enthusiasts to explore pristine landscapes responsibly. With a focus on conservation and minimal environmental impact, the app provides travelers with detailed guides to North Reserve’s untouched ecosystems, highlighting local wildlife, flora, and culturally significant sites.',
    outcome: 'Tourism product build spanning a public Next.js experience and supporting backend services.',
    tags: ['React', 'Next.js', 'Node.js', 'Typescript', 'Material-UI', 'Azure'],
    displayTags: ['React', 'Next.js', 'Node.js', 'TypeScript', 'Azure'],
    image: '/images/itba.jpg',
    link: 'https://www.srfsh.com/',
    linkLabel: 'Visit site',
    github: '',
  },
  {
    title: 'Dental Axess',
    description:
      'Dental Axess are specialists in digital dentistry, providing a large range of hardware and software components to complete your digital workflow sourced from market leading firms for dental treatment providers and selected using Dental Axess experience',
    outcome: 'Product workflow experience for dental technology buyers and treatment providers.',
    tags: ['Angular', 'Node.js', 'MongoDB', 'TypeScript', 'Docker', 'SCSS'],
    displayTags: ['Angular', 'Node.js', 'MongoDB', 'TypeScript', 'Docker'],
    image: '/images/xflow.png',
    link: 'https://dentalaxess.com/products/xflow/',
    linkLabel: 'Product page',
    github: '',
  },
  {
    title: 'Twint Super Deals',
    description: 'Benefit from exclusive discount, promotions and special offers every week through twint app',
    outcome: 'Deals platform work involving backend services, Angular interfaces, queues, and cloud deployment.',
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
    displayTags: ['Node.js', 'Angular', 'RabbitMQ', 'MongoDB', 'GCP', 'Docker'],
    image: '/images/twint.svg',
    link: 'https://deals.twint.ch/',
    linkLabel: 'Product page',
    github: '',
  },
  {
    title: 'Rateel',
    description:
      'Rateel is a free app that lets you know the reciter of any Quran audio. By only listening to the audio, Rateel provides you with all the information you need, such as the name of the reciter, and what surah (chapter) he is reciting.',
    outcome: 'Mobile-backed product experience using AWS services and TypeScript application code.',
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
    displayTags: ['Node.js', 'Angular', 'TypeScript', 'DynamoDB', 'AWS'],
    image: '/images/rateel.webp',
    link: 'https://play.google.com/store/apps/details?id=sa.com.stc.Rateel',
    linkLabel: 'App listing',
    github: '',
  },
  {
    title: 'STC Dashboard',
    description:
      'Monitor Task for IOS and Android team while developing apps and provide charts for measuring analytics and developing subs for test teams to test their work',
    outcome: 'Internal dashboard for delivery visibility, analytics, and mobile team coordination.',
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
    displayTags: ['Node.js', 'Angular', 'TypeScript', 'DynamoDB', 'AWS'],
    image: '',
    link: 'https://mcicd.com/login',
    linkLabel: 'Platform login',
    github: '',
  },
  {
    title: 'Saldwich',
    description:
      'Food application and dashboard for managing restaurants branches, delivery, meals, menu items and orders for each branch based on customer location',
    outcome: 'Restaurant operations platform spanning customer app, dashboard, delivery, and menu management.',
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
    displayTags: ['TypeScript', 'Node.js', 'React', 'React Native', 'DynamoDB', 'AWS'],
    image: '/images/saldwich.png',
    link: 'https://dashboard.saldwich.com/login',
    linkLabel: 'Dashboard login',
    github: '',
  },
  {
    title: 'Vodafone Germany',
    description: 'Develop vodafone site in germany',
    outcome: 'Enterprise web delivery for Vodafone Germany customer-facing experiences.',
    tags: ['TypeScript', 'JavaScript', 'Angular', 'JIRA'],
    displayTags: ['TypeScript', 'Angular', 'JavaScript', 'Jira'],
    image: '/images/vodafone.png',
    link: 'https://www.vodafone.de/',
    linkLabel: 'Visit site',
    github: '',
  },
];

export const services = [
  {
    id: 1,
    title: 'Ship production web products',
    description:
      'Turn product requirements into fast, maintainable React, Next.js, and Angular applications that are ready for real users.',
    icon: 'globe',
  },
  {
    id: 2,
    title: 'Design backend systems',
    description:
      'Build Node.js, Go, REST, GraphQL, and microservice foundations with the observability, validation, and testing expected in senior teams.',
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
    title: 'Raise engineering quality',
    description: 'Strengthen codebases through architecture reviews, mentoring, test strategy, and practical delivery tradeoffs.',
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
  whatsapp: {
    message: 'Hi Hassan, I came across your portfolio and would like to discuss a project.',
  },
};

export function getWhatsAppUrl() {
  const phone = contact.phone.replace('+', '');
  return `https://wa.me/${phone}?text=${encodeURIComponent(contact.whatsapp.message)}`;
}

export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Skills', href: '#skills' },
  { name: 'Resume', href: '#resume' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];
