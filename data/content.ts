import { additionalProjects } from './project-additions.ts';

export const cvUrl = 'https://flowcv.com/resume/q851s66nns';

export const heroContent = {
  name: 'Hassan Mohamed',
  title: 'Senior Full-Stack Engineer | Node.js, React, Next.js & TypeScript',
  bio: 'Senior full-stack engineer with 7+ years building web applications and backend services across mobility, telecom, healthcare, and tourism. I work with Node.js, NestJS, React, Next.js, and TypeScript, share ownership of critical mobility services, and guide cross-team integrations and RFC-based technical decisions.',
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
    items: ['Code reviews', 'Automated testing', 'Microservices', 'Domain-driven design', 'Hexagonal architecture', 'RFCs', 'Technical documentation', 'Mentoring', 'Cross-team delivery'],
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
      'Guide engineers across teams on service integration and contribute to technical decisions through RFCs covering requirements, design options, and tradeoffs.',
      "Co-develop a new service with another team, aligning its design with consuming teams' integration needs and preparing for ongoing ownership by Core.",
      'Replaced version-checked updates in dispatch pool joins with atomic MongoDB appends, reducing write conflicts and repeated database reads under concurrent requests.',
      "Contributed to MongoDB query and index optimization, reducing one query's execution time from 600 ms to 3 ms, measured in MongoDB Atlas.",
      "Worked with MongoDB's team to right-size the cluster from M400 to M200, reducing cluster cost by 50%.",
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
      "Developed ITBA's eco-tourism platform using React, Next.js App Router, TypeScript, Tailwind CSS, and Node.js, including server-side rendering for SEO and performance.",
      "Part of the team that took ownership of MyStc's Node.js and Elasticsearch search service, following a proof of concept our team developed during the earlier STC assignment.",
      'Built React and Node.js dashboards for SIRAR and a Saudi civil affairs authority, integrating with PEGA and webMethods for progress tracking, request review, and reporting.',
      'Integrated dotCMS through GraphQL for editorial content, automated Docker-based development deployments on AWS EC2, and supported Azure DevOps releases for client-managed production deployment.',
    ],
  },
  {
    id: 3,
    role: 'Senior Full-Stack Developer',
    company: 'Modeso',
    location: 'Cairo, Egypt',
    period: 'Sep 2023 - Feb 2024',
    description: [
      'Developed Node.js services and Angular features for TWINT Super Deals, the discounts and promotions experience in the TWINT app, using MongoDB, RabbitMQ, Docker, and Google Cloud.',
      'Modernized the codebase by upgrading React, Angular, and Node.js versions, restructuring projects, adding state management, and documenting and testing components with Storybook.',
      "Maintained Dental Axess's multi-tenant digital dentistry platform using Angular, Node.js, MongoDB, and Keycloak, resolving defects and supporting existing workflows.",
      'Mentored junior engineers through onboarding and code reviews and coordinated delivery with QA and business teams.',
    ],
  },
  {
    id: 4,
    role: 'Full-Stack Developer',
    company: 'InnovationTeam (Client assignment: STC)',
    location: 'Remote',
    period: 'Feb 2022 - Sep 2023',
    description: [
      'Built an internal engineering dashboard using Angular, TypeScript, Node.js, and MongoDB, integrating GitHub and Jira so developers could view branches and tasks and trigger builds.',
      'Connected the dashboard to an internal CI/CD service for real-time build status, Slack notifications, build uploads to Amazon S3, and analytics charts.',
      'Contributed React, Angular, and Node.js features to Rateel, a Quran reciter-identification application, using AWS services including EC2, API Gateway, and Lambda.',
      'Configured dashboard hosting and HTTPS using AWS EC2, Route 53, AWS Certificate Manager, and Certbot.',
    ],
  },
  {
    id: 5,
    role: 'Full-Stack Developer',
    company: 'VOIS (Vodafone Intelligent Solutions)',
    location: 'Cairo, Egypt',
    period: 'Apr 2021 - Feb 2022',
    description: [
      "Developed and maintained Vodafone Germany's web application using Angular, TypeScript, and Node.js.",
      "Built features in the platform's tariff and payment sections, working with QA and business stakeholders through Agile sprints.",
      "Built reusable interface components following Vodafone's UI standards and shared component libraries.",
      'Refactored existing application code and wrote component unit tests to support ongoing changes.',
    ],
  },
  {
    id: 6,
    role: 'Full-Stack Developer',
    company: 'Codiles',
    location: 'Cairo, Egypt',
    period: 'Apr 2019 - Apr 2021',
    description: [
      'Developed TheClinicians and Medlink healthcare mobile applications using Angular, Ionic, TypeScript, Node.js, and MongoDB, supporting doctor discussions, real-time messaging, and paid consultations.',
      'Built core React, Redux, and TypeScript features for Sijil, a healthcare network for clinics, labs, and imaging centers, including booking, patient registration, shift scheduling, Arabic and English localization, and real-time reservation updates over Socket.io.',
      'Integrated third-party drug data with Elasticsearch for drug-name search and Google Maps for location features.',
      'Set up AWS CodePipeline and GitHub Actions delivery, supported AWS EC2 hosting and S3 media storage, and wrote technical documentation and Swagger API specifications.',
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
    degree: "Bachelor's in Computer Science",
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
    contribution: "Developed ITBA's eco-tourism platform using React, Next.js App Router, TypeScript, Tailwind CSS, and Node.js, including server-side rendering. Integrated dotCMS through GraphQL and supported Azure DevOps releases for client-managed production deployment.",
    outcome: 'Tourism frontend and backend features, editorial content integration, and automated Docker-based development deployments on AWS EC2.',
    tags: ['React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS', 'GraphQL', 'dotCMS', 'Docker', 'AWS EC2', 'Azure DevOps'],
    displayTags: ['React', 'Next.js', 'Node.js', 'GraphQL', 'dotCMS', 'Azure DevOps'],
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
    description: 'Multi-tenant digital dentistry platform.',
    contribution: "Maintained Dental Axess's multi-tenant platform using Angular, Node.js, MongoDB, and Keycloak, resolving defects and supporting existing workflows.",
    outcome: 'Maintenance and defect resolution for existing digital dentistry workflows.',
    tags: ['Angular', 'Node.js', 'MongoDB', 'Keycloak', 'TypeScript', 'Docker'],
    displayTags: ['Angular', 'Node.js', 'MongoDB', 'Keycloak', 'TypeScript'],
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
    contribution: 'Developed Node.js services and Angular features using MongoDB, RabbitMQ, Docker, and Google Cloud. Modernized React, Angular, and Node.js versions, restructured projects, added state management, and used Storybook to document and test components.',
    outcome: 'Deals platform work involving backend services, Angular interfaces, queues, and cloud deployment.',
    tags: ['Node.js', 'Angular', 'React', 'MongoDB', 'RabbitMQ', 'TypeScript', 'Google Cloud', 'Docker', 'Storybook'],
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
    contribution: 'Contributed React, Angular, and Node.js features to a Quran reciter-identification application using AWS EC2, API Gateway, and Lambda.',
    outcome: 'Frontend and backend contributions to an audio recognition application.',
    tags: ['React', 'Angular', 'Node.js', 'TypeScript', 'AWS EC2', 'API Gateway', 'AWS Lambda'],
    displayTags: ['React', 'Angular', 'Node.js', 'TypeScript', 'AWS'],
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
    description: 'Internal engineering dashboard for branch and task visibility, build execution, status updates, and analytics.',
    contribution: 'Built an Angular, TypeScript, Node.js, and MongoDB dashboard integrating GitHub and Jira for branches, tasks, and build execution. Connected an internal CI/CD service for real-time build status, Slack notifications, and S3 build uploads; configured hosting and HTTPS with EC2, Route 53, AWS Certificate Manager, and Certbot.',
    outcome: 'Engineering build workflows with real-time delivery visibility and analytics.',
    tags: ['Angular', 'TypeScript', 'Node.js', 'MongoDB', 'GitHub', 'Jira', 'Slack', 'AWS EC2', 'Amazon S3', 'Route 53'],
    displayTags: ['Angular', 'TypeScript', 'Node.js', 'MongoDB', 'AWS'],
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
    contribution: 'Developed React dashboards and Node.js features and contributed to a React Native application for restaurant branch, menu, order, coupon, and voucher management, integrating Foodics, Google Maps, and Socket.io.',
    outcome: 'Part-time freelance contributions to restaurant operations and real-time order workflows.',
    tags: [
      'TypeScript',
      'Node.js',
      'React',
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
    contribution: "Developed and maintained Vodafone Germany's Angular, TypeScript, and Node.js web application, including tariff and payment features. Built reusable components following Vodafone's UI standards and shared libraries, refactored code, and wrote component unit tests.",
    outcome: 'Enterprise web delivery for Vodafone Germany customer-facing experiences.',
    tags: ['Angular', 'TypeScript', 'Node.js', 'JavaScript', 'Unit Testing'],
    displayTags: ['Angular', 'TypeScript', 'Node.js', 'Unit Testing'],
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
