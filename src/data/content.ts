export const profile = {
  name: 'Tarun Haribabu',
  title: 'Java Backend Engineer',
  tagline: 'Building scalable microservices for enterprise Financial Services & Automotive Lending',
  yearsOfExperience: '4+',
  location: 'Chennai, India',
  availabilityNote: 'Open to international relocation · Requires employer visa sponsorship',
  noticePeriod: '45-day notice period',
  email: 'tarunh195@gmail.com',
  phone: '+91 9444408318',
  linkedin: 'https://www.linkedin.com/in/tarun-h195/',
  linkedinHandle: 'linkedin.com/in/tarun-h195',
  github: 'https://github.com/Tarun0105',
  githubHandle: 'github.com/Tarun0105',
  resumePdf: '/resume.pdf',
}

export const summary = {
  paragraphs: [
    'Java Backend Engineer with 4+ years of experience building scalable, high-availability microservices for enterprise clients in Financial Services and Automotive Lending.',
    'At Zemoso Technologies, I lead backend development for the eBay Co-Branded Credit Card platform — designing RESTful APIs, integrating real-time credit decisioning systems with Bread Financial, and reducing average API response times by 35%.',
    'Previously at Cognizant Technology Solutions, I delivered production-grade Java/Spring Boot applications for Ford Credit, owning API development, database schema design, security tooling, and test automation across the full SDLC.',
  ],
  highlights: [
    { label: 'Years of experience', value: '4+' },
    { label: 'Production microservices delivered', value: '15+' },
    { label: 'Enterprise domains', value: '2' },
    { label: 'API response time reduced', value: '35%' },
  ],
}

export const skills = [
  {
    category: 'Languages',
    items: ['Java 8', 'Java 11', 'Java 17', 'Java 21'],
  },
  {
    category: 'Backend Frameworks',
    items: [
      'Spring Boot',
      'Spring MVC',
      'Spring Data JPA',
      'Spring Security',
      'Hibernate',
    ],
  },
  {
    category: 'APIs & Integration',
    items: ['REST APIs', 'Microservices', 'OAuth2', 'JWT', 'RabbitMQ'],
  },
  {
    category: 'Databases & Caching',
    items: ['MySQL', 'PostgreSQL', 'Redis'],
  },
  {
    category: 'Cloud & DevOps',
    items: [
      'Google Cloud Platform (GCP)',
      'Cloud Pub/Sub',
      'Docker',
      'Jenkins',
      'Cloud Build',
      'CI/CD Pipelines',
    ],
  },
  {
    category: 'Testing',
    items: [
      'JUnit',
      'Karate Framework',
      'TestNG',
      'API Automation',
      'End-to-End Testing',
      'Regression Testing',
    ],
  },
  {
    category: 'Code Quality & Security',
    items: ['SonarQube', 'Checkmarx', '42Crunch', 'Fossa', 'Cycode'],
  },
  {
    category: 'Developer Tools',
    items: [
      'Git',
      'GitHub',
      'IntelliJ IDEA',
      'Maven',
      'Gradle',
      'Postman',
      'DataGrip',
    ],
  },
]

export const experience = [
  {
    role: 'Software Engineer III',
    company: 'Zemoso Technologies',
    duration: 'April 2026 – Present',
    type: 'Full-time',
    project: 'eBay Co-Branded Credit Card (CBCC)',
    client: 'eBay',
    description:
      'End-to-end credit card onboarding platform for eBay customers, supporting Prescreen, Prequalification, and Instant Credit journeys. Integrated with Bread Financial for real-time credit decisioning, Virtual Account Number (VAN) provisioning, and post-approval customer communications.',
    technologies: [
      'Java',
      'Spring Boot',
      'Hibernate',
      'REST APIs',
      'Microservices',
      'GCP',
      'Cloud Pub/Sub',
      'RabbitMQ',
      'MySQL',
      'Docker',
    ],
    achievements: [
      'Developed and enhanced 15+ RESTful APIs and microservices using Java, Spring Boot, and Hibernate to support Prescreen, Prequalification, and Instant Credit onboarding journeys.',
      'Integrated 10+ Bread Financial APIs for real-time credit decisioning and issuer response handling, increasing transaction success rates by 30%.',
      'Optimized API and database performance, reducing average response times by 35% and supporting high-volume customer application traffic.',
      'Led root cause analysis for critical production issues, resolving 95% of incidents within SLA — ensuring uninterrupted customer onboarding.',
      'Implemented logging and monitoring strategies reducing troubleshooting time by 40% and improving production stability.',
      'Contributed to 20+ technical design and architecture reviews, shaping scalable microservice design patterns for high-volume workflows.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Cognizant Technology Solutions',
    duration: 'July 2022 – April 2026',
    type: 'Full-time',
    project: 'Ford Credit – FOBOS',
    client: 'Ford Motor Credit Company',
    description:
      'Automotive lending platform enabling Ford Credit dealers to submit, manage, and track vehicle purchase proposals through the Central Auto Purchase (CAP) system, handling new and used vehicle inventory and pricing workflows.',
    technologies: [
      'Java',
      'Spring Boot',
      'Spring MVC',
      'Hibernate',
      'REST APIs',
      'MySQL',
      'PostgreSQL',
      'GCP',
      'Cloud Build',
      'Docker',
      'Jenkins',
      'Karate Framework',
      'TestNG',
      'JUnit',
      'SonarQube',
    ],
    achievements: [
      'Enhanced platform security by integrating 42Crunch, Cycode, Checkmarx, and Fossa into the CI/CD pipeline, reducing security vulnerabilities by 60%.',
      'Increased unit test coverage from 50% to 90% using JUnit and SonarQube, reducing code quality violations by 80%.',
      'Designed and developed RESTful APIs for dealer proposal workflows using Java and Spring Boot, reducing average API response times by 30% through optimized data access.',
      'Built a comprehensive API automation test suite using Karate Framework and TestNG, reducing manual regression testing effort by 40%.',
      'Designed database schemas for new application features, improving data retrieval speed by 35%.',
      'Diagnosed and resolved production bugs, reducing system defect rate by 25% through root cause analysis.',
    ],
  },
  {
    role: 'Intern',
    company: 'Cognizant Technology Solutions',
    duration: 'February 2022 – July 2022',
    type: 'Internship',
    project: 'Employee Management System',
    client: null,
    description:
      'Backend development internship focused on building a full-stack employee management application using Spring Boot and Hibernate.',
    technologies: ['Java', 'Spring Boot', 'Hibernate', 'MySQL', 'REST APIs'],
    achievements: [
      'Built an Employee Management System using Spring Boot and Hibernate, implementing CRUD REST APIs, role-based access control, and database schema design as a functional end-to-end backend project.',
      'Deepened expertise in Spring Boot, Hibernate, and SQL through applied project work and shared technical insights with team members to support collective upskilling.',
    ],
  },
]

export const projects = [
  {
    title: 'eBay Co-Branded Credit Card Platform',
    domain: 'Financial Technology · Consumer Lending',
    client: 'eBay / Bread Financial',
    overview:
      'Production-scale credit card onboarding platform supporting three distinct customer journeys: Prescreen, Prequalification, and Instant Credit. The platform integrates with Bread Financial for real-time credit decisioning and Virtual Account Number provisioning.',
    myRole:
      'Led backend API development — designed and built the microservice layer handling credit application flows, financial data processing, customer consent workflows, and real-time third-party API integrations.',
    technologies: [
      'Java',
      'Spring Boot',
      'Microservices',
      'REST APIs',
      'Hibernate',
      'GCP',
      'Cloud Pub/Sub',
      'RabbitMQ',
      'MySQL',
      'Docker',
    ],
    outcomes: [
      '30% increase in transaction success rates',
      '35% reduction in average API response times',
      '25% faster customer onboarding completion',
      '95% of production incidents resolved within SLA',
    ],
  },
  {
    title: 'Ford Credit FOBOS – Automotive Lending Platform',
    domain: 'Automotive Finance · Enterprise Software',
    client: 'Ford Motor Credit Company',
    overview:
      'Enterprise automotive lending platform enabling Ford dealerships to submit, manage, and track vehicle purchase proposals through the Central Auto Purchase (CAP) system. The platform handles complex inventory workflows for new and used vehicles.',
    myRole:
      'Full backend ownership across API development, security toolchain integration, database design, test automation suite, and production monitoring — delivering measurable improvements across reliability, security, and developer velocity.',
    technologies: [
      'Java',
      'Spring Boot',
      'REST APIs',
      'MySQL',
      'PostgreSQL',
      'Jenkins',
      'Docker',
      'GCP',
      'Cloud Build',
      'Karate Framework',
      'TestNG',
      'JUnit',
      'SonarQube',
      'Checkmarx',
    ],
    outcomes: [
      '60% reduction in security vulnerabilities via CI/CD security toolchain',
      'Test coverage increased from 50% to 90%',
      '40% reduction in manual regression testing effort',
      '30% faster API response times',
    ],
  },
]

export const expertise = [
  {
    icon: '⚙️',
    title: 'Backend Engineering',
    description:
      'Designing and building production-grade Java/Spring Boot services for enterprise-scale platforms.',
  },
  {
    icon: '🔗',
    title: 'Microservices Architecture',
    description:
      'Breaking monolithic workflows into independently deployable, maintainable service boundaries.',
  },
  {
    icon: '🌐',
    title: 'API Development',
    description:
      'Designing RESTful APIs with clean contracts, proper error handling, and optimized data access patterns.',
  },
  {
    icon: '🔐',
    title: 'Security & Code Quality',
    description:
      'Integrating SAST tools (42Crunch, Checkmarx, SonarQube, Fossa) into CI/CD pipelines to enforce quality gates.',
  },
  {
    icon: '🧪',
    title: 'Test Automation',
    description:
      'Building comprehensive API automation suites using Karate Framework and TestNG for end-to-end validation.',
  },
  {
    icon: '☁️',
    title: 'Cloud & DevOps',
    description:
      'Working with GCP services, Docker containers, Jenkins pipelines, and Cloud Build for reliable deployments.',
  },
  {
    icon: '🗄️',
    title: 'Database Engineering',
    description:
      'Designing relational schemas, writing optimized queries, and improving data retrieval performance.',
  },
  {
    icon: '🚀',
    title: 'Production Operations',
    description:
      'Monitoring application health, performing root cause analysis, and resolving production incidents within SLA.',
  },
]

export const education = [
  {
    degree: 'Bachelor of Engineering (B.E.)',
    field: 'Computer Science and Engineering',
    institution: 'Velammal Engineering College',
    affiliation: 'Anna University Affiliated',
    cgpa: '8.34 / 10',
    duration: '2018 – 2022',
  },
]

export const certifications = [
  {
    title: 'Google Cloud Platform (GCP) Associate Cloud Engineer – Exam Preparation',
    issuer: 'Udemy',
    date: 'November 2024',
    description: 'Cloud infrastructure, deployment automation, IAM, networking, and cloud operations.',
    link: 'https://www.linkedin.com/posts/tarun-h195_googlecloudplatform-gcp-cloudcomputing-share-7286617844534886401-7c3K/',
  },
  {
    title: 'Spring Framework & Spring Boot Certification',
    issuer: 'Udemy',
    date: 'August 2022',
    description: 'Enterprise application development, RESTful APIs, Microservices, Spring Security, and Data Access.',
    link: 'https://www.linkedin.com/posts/tarun-h195_spring-framework-ugcPost-7038875391175929856-jOfE/',
  },
  {
    title: 'Claude with the Anthropic API – Course Completion',
    issuer: 'DeepLearning.AI / Anthropic',
    date: 'April 2026',
    description: 'Generative AI, prompt engineering, AI-assisted software development, and workflow automation.',
    link: 'https://www.linkedin.com/posts/tarun-h195_claude-with-the-anthropic-api-ugcPost-7467410980692488193-cDU6/',
  },
]

export const achievements = [
  {
    title: "Rising Star Award",
    from: 'Ford Credit (client), while at Cognizant Technology Solutions',
    description:
      'Recognised for high-quality backend delivery, production support, and cross-team collaboration during the Ford Credit FOBOS engagement.',
    link: 'https://www.linkedin.com/posts/tarun-h195_gratitude-achievement-risingstar-share-7303992558827773953-d8wz/',
  },
  {
    title: 'Mentorship Recognition',
    from: 'Cognizant Technology Solutions leadership',
    description:
      'Recognised by leadership for mentoring new joiners, improving onboarding speed and overall team productivity.',
    link: null,
  },
]

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]
