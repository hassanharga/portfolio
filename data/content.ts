import { additionalProjects } from './project-additions.ts';

export const cvUrl = 'https://flowcv.com/resume/q851s66nns';

export const heroContent = {
  name: 'Hassan Mohamed',
  title: 'Senior Full-Stack Engineer | React, Next.js, Node.js & TypeScript',
  bio: 'Senior full-stack engineer with 7+ years building web applications and backend services across mobility, telecom, marketplace, and SaaS. I work with React, Next.js, TypeScript, Node.js, and NestJS, share ownership of critical mobility services, and guide cross-team integrations and RFC-based technical decisions.',
  proofPoints: ['Frontend applications', 'Backend services', 'Cross-team delivery'],
};

export const skills = {
  productEngineering: {
    title: 'Product engineering',
    summary: 'Build product surfaces from interface to data model.',
    items: ['React', 'Next.js', 'Angular', 'React Native', 'TypeScript', 'Redux', 'React Query', 'Tailwind CSS', 'Storybook'],
  },
  backendSystems: {
    title: 'Backend systems',
    summary: 'Design APIs and services that stay maintainable under real product traffic.',
    items: ['Node.js', 'NestJS', 'Express', 'Go', 'REST APIs', 'GraphQL', 'Socket.io', 'BullMQ', 'RabbitMQ', 'Google Cloud Pub/Sub'],
  },
  dataInfrastructure: {
    title: 'Data & infrastructure',
    summary: 'Choose pragmatic storage, caching, and deployment paths for the problem.',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'DynamoDB', 'SQLite', 'Elasticsearch', 'Prisma', 'Docker', 'NGINX', 'AWS', 'Google Cloud', 'GitHub Actions', 'AWS CodePipeline', 'Azure DevOps', 'CI/CD'],
  },
  engineeringLeadership: {
    title: 'Engineering leadership',
    summary: 'Raise delivery quality through reviews, testing, mentoring, and clear tradeoffs.',
    items: ['Code reviews', 'Automated testing', 'Domain-driven design', 'Hexagonal architecture', 'RFCs', 'Mentoring', 'Cross-team delivery'],
  },
  aiAugmented: {
    title: 'AI-augmented workflow',
    summary: 'Use AI coding tools for planning, implementation, testing, and review, with responsibility for validating changes.',
    items: ['Claude Code', 'Codex', 'OpenCode', 'Implementation planning', 'Codebase exploration', 'Test generation', 'Code review'],
  },
};

export const aiWorkflow = {
  eyebrow: 'How I work now',
  title: 'AI-augmented delivery, engineer in the loop',
  intro:
    'I use Claude Code, Codex, and OpenCode to explore codebases, plan changes, implement features, generate tests, and review code. I validate the output and remain responsible for architecture decisions and the resulting changes.',
  tools: [
    {
      name: 'Claude Code',
      use: 'Codebase exploration, implementation, refactoring, and test generation.',
    },
    {
      name: 'OpenCode',
      use: 'Terminal-based implementation, scripting, and changes across multiple files.',
    },
    {
      name: 'Codex',
      use: 'Implementation planning, architecture analysis, code review, and verification.',
    },
  ],
  principles: ['Review generated changes', 'Verify affected behavior', 'Own the technical decisions'],
};

export const experience = [
  {
    id: 1,
    role: 'Senior Full-Stack Developer',
    company: 'Yassir',
    location: 'Remote',
    period: 'Oct 2025 - Present',
    description: [
      'Share ownership of critical Node.js and NestJS mobility services across dispatch, location, and mapping within the Core team, covering delivery, reliability, and ongoing maintenance.',
      'Guide engineers across teams on service integration and help shape technical decisions through RFCs covering requirements, design options, and tradeoffs.',
      'Co-develop a new service with another team, aligning its design with consuming teams’ integration needs and preparing for ongoing ownership by Core.',
      'Replaced version-checked updates in dispatch pool joins with atomic MongoDB appends, reducing write conflicts and repeated database reads under concurrent requests.',
      'Contributed to MongoDB query and index optimization, reducing one query’s execution time from 600 ms to 3 ms, measured in MongoDB Atlas.',
      'Worked with MongoDB’s team to right-size the cluster from M400 to M200, reducing cluster cost by 50%.',
      'Built and extended an internal Next.js operations dashboard for investigating dispatch behavior and managing dispatch strategies.',
      'Improved service reliability through automated testing, fault handling, graceful shutdown for the location service, and clearer diagnostic logging.',
    ],
  },
  {
    id: 2,
    role: 'Senior Full-Stack Developer',
    company: 'InnovationTeam',
    location: 'Remote',
    period: 'Feb 2024 - Oct 2025',
    description: [
      'Built the Next.js frontend and Node.js backend services for ITBA, an eco-tourism platform covering nature reserves, wildlife, and cultural sites. Delivered releases through Azure DevOps for client-managed deployment.',
      'Developed a Node.js and Elasticsearch search service for the STC app, enabling search across its content and features.',
      'Built a React application for an internal affairs client, covering request tracking and reporting workflows.',
      'Integrated dotCMS as a headless CMS through GraphQL, allowing editorial content updates independently of application releases.',
    ],
  },
  {
    id: 3,
    role: 'Senior Full-Stack Developer',
    company: 'Modeso',
    location: 'Cairo, Egypt',
    period: 'Sep 2023 - Feb 2024',
    description: [
      'Upgraded framework and library versions across production TypeScript, React, Angular, and Node.js applications, including Redux, Zustand, and NgRx state management, and introduced Storybook for shared components.',
      'Developed Node.js services and Angular features for TWINT Super Deals, the discounts and promotions experience in the TWINT app, using MongoDB, RabbitMQ, Docker, and Google Cloud.',
      'Built Angular and Node.js product workflows backed by MongoDB for Dental Axess, a digital dentistry product catalogue for treatment providers.',
      'Mentored junior engineers through onboarding, code reviews, and guidance on implementation and maintainability.',
    ],
  },
  {
    id: 4,
    role: 'Full-Stack Developer',
    company: 'InnovationTeam (Client assignment: STC)',
    location: 'Remote',
    period: 'Feb 2022 - Sep 2023',
    description: [
      'Designed and built an internal team-management and delivery dashboard using TypeScript, Node.js, Angular, and React.',
      'Integrated GitHub, Jira, and Slack to automate task tracking, branch retrieval, and build notifications.',
      'Implemented real-time notifications and live-data features using Socket.io and Node.js to support coordination across web and mobile releases.',
      'Deployed and managed applications on AWS Lambda, EC2, S3, and Route 53.',
    ],
  },
  {
    id: 5,
    role: 'Full-Stack Developer',
    company: 'VOIS (Vodafone Intelligent Solutions)',
    location: 'Cairo, Egypt',
    period: 'Apr 2021 - Feb 2022',
    description: [
      'Developed responsive React and Angular interfaces for Vodafone Germany’s customer-facing web platform.',
      'Built features in the platform’s tariff and payment sections, among other product areas.',
      'Contributed reusable components to the team’s internal UI library and used them across the platform, reducing repeated implementation.',
      'Added Jest and Angular Testing Library coverage to verify shared interface behavior and guard against regressions.',
    ],
  },
  {
    id: 6,
    role: 'Full-Stack Developer',
    company: 'Codiles',
    location: 'Cairo, Egypt',
    period: 'Apr 2019 - Apr 2021',
    description: [
      'Built core React, Redux, and TypeScript features for Sijil, a healthcare booking platform for clinics, labs, and imaging centers.',
      'Developed booking, patient registration, and shift-scheduling workflows with real-time updates over Socket.io, plus Arabic and English localization and reports for labs and imaging centers.',
      'Built mobile applications with React Native and Expo alongside web products.',
      'Developed real-time dashboards and chat features using Node.js and Socket.io, with Redis for caching and session management.',
      'Established CI/CD pipelines using AWS CodePipeline and GitHub Actions to automate build, test, and deployment workflows.',
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
    slug: 'yassir',
    category: 'Professional',
    title: 'Yassir',
    description: 'Ride-hailing product work across backend services, delivery tooling, and platform operations.',
    contribution:
      'Share Core-team ownership of critical Node.js and NestJS services across dispatch, location, and mapping, guide cross-team integrations, and help shape technical decisions through RFCs. Replaced version-checked updates in dispatch pool joins with atomic MongoDB appends and built an internal Next.js operations dashboard.',
    outcome: 'Core mobility services and operations tooling. Contributed to query and index optimization that reduced one query from 600 ms to 3 ms in MongoDB Atlas, and cluster right-sizing from M400 to M200 that halved cluster cost.',
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
    displayTags: ['TypeScript', 'NestJS', 'Next.js', 'MongoDB', 'Redis', 'Google Cloud'],
    image: '/images/yassir.svg',
    link: 'https://yassir.com/',
    linkLabel: 'Product site',
    featured: true,
    github: '',
  },
  {
    slug: 'go-social-api',
    category: 'Personal',
    title: 'GO-Social-API',
    description:
      'A robust social networking API built with Go, featuring user authentication, post management, commenting system, follower relationships, and user feeds.',
    contribution:
      'Designed this portfolio API around authentication, posts, comments, follower relationships, feeds, PostgreSQL, Redis, Swagger, and Docker.',
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
    slug: 'itba',
    category: 'Professional',
    title: 'ITBA',
    description: 'Eco-tourism platform for exploring nature reserves, wildlife, and cultural sites.',
    contribution:
      'Built the Next.js frontend and Node.js backend services for ITBA, an eco-tourism platform covering nature reserves, wildlife, and cultural sites. Delivered releases through Azure DevOps for client-managed deployment.',
    outcome: 'Next.js frontend and Node.js backend services delivered through Azure DevOps for client-managed deployment.',
    tags: ['React', 'Next.js', 'Node.js', 'Typescript', 'Material-UI', 'Azure'],
    displayTags: ['React', 'Next.js', 'Node.js', 'TypeScript', 'Azure'],
    image: '/images/itba.jpg',
    link: 'https://www.srfsh.com/',
    linkLabel: 'Visit site',
    featured: false,
    github: '',
  },
  {
    slug: 'dental-axess',
    category: 'Professional',
    title: 'Dental Axess',
    description: 'Digital dentistry product catalogue and workflow for treatment providers.',
    contribution:
      'Worked on Angular and Node.js product workflows backed by MongoDB for a digital dentistry platform.',
    outcome: 'Product workflow experience for dental technology buyers and treatment providers.',
    tags: ['Angular', 'Node.js', 'MongoDB', 'TypeScript', 'Docker', 'SCSS'],
    displayTags: ['Angular', 'Node.js', 'MongoDB', 'TypeScript', 'Docker'],
    image: '/images/xflow.png',
    link: 'https://dentalaxess.com/products/xflow/',
    linkLabel: 'Product page',
    featured: false,
    github: '',
  },
  {
    slug: 'twint-super-deals',
    category: 'Professional',
    title: 'Twint Super Deals',
    description: 'Deals experience for discounts and promotions available through the TWINT app.',
    contribution:
      'Worked across Node.js backend services, Angular interfaces, RabbitMQ queues, MongoDB, Docker, and GCP.',
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
    featured: false,
    github: '',
  },
  {
    slug: 'rateel',
    category: 'Professional',
    title: 'Rateel',
    description: 'Audio recognition app that identifies Quran reciters and the surah being recited.',
    contribution:
      'Worked on a TypeScript and Angular product backed by Node.js, DynamoDB, and AWS services.',
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
    featured: false,
    github: '',
  },
  {
    slug: 'stc-dashboard',
    category: 'Professional',
    title: 'STC Dashboard',
    description: 'Internal dashboard for mobile delivery progress, analytics, and test-team workflows.',
    contribution:
      'Designed and built the internal team-management and delivery dashboard, including GitHub, Jira, Slack, analytics, and real-time workflow integrations.',
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
    featured: false,
    github: '',
  },
  {
    slug: 'saldwich',
    category: 'Part-time freelance',
    title: 'Saldwich',
    description: 'Customer app and operations dashboard for restaurant branches, delivery, menus, and location-based orders.',
    contribution:
      'Contributed part-time freelance work to a React operations dashboard and Node.js backend, including subscription and order workflows, alongside full-time employment.',
    outcome: 'Part-time freelance contribution to restaurant operations, subscriptions, and order management.',
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
    featured: false,
    github: '',
  },
  {
    slug: 'vodafone-germany',
    category: 'Professional',
    title: 'Vodafone Germany',
    description: 'Customer-facing web delivery for Vodafone Germany.',
    contribution:
      'Developed responsive React and Angular interfaces for Vodafone Germany’s customer-facing platform, including tariff and payment features, reusable components, and automated interface tests.',
    outcome: 'Enterprise web delivery for Vodafone Germany customer-facing experiences.',
    tags: ['TypeScript', 'JavaScript', 'React', 'Angular', 'JIRA'],
    displayTags: ['TypeScript', 'React', 'Angular', 'JavaScript', 'Jira'],
    image: '/images/vodafone.png',
    link: 'https://www.vodafone.de/',
    linkLabel: 'Visit site',
    featured: false,
    github: '',
  },
  ...additionalProjects,
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
    description:
      'Guide cross-team service integrations, document technical tradeoffs through RFCs, and strengthen delivery through code reviews, testing, and mentoring.',
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
  { name: 'About', href: '/about' },
  { name: 'Work', href: '#portfolio' },
  { name: 'Experience', href: '#resume' },
  { name: 'Capabilities', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];
