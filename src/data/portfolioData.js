export const portfolioData = {
  personal: {
    name: "Vedika Bawane",
    tagline: "Aspiring Software Developer & Full-Stack Engineer",
    role: "Aspiring Software Developer",
    email: "vedikabawane70@gmail.com",
    phone: "9309030556",
    github: "https://github.com/vedikabawane",
    githubDisplay: "github.com/vedikabawane",
    linkedin: "https://www.linkedin.com/in/vedika-bawane",
    linkedinDisplay: "linkedin.com/in/Vedika Bawane",
    location: "Chandrapur, Maharashtra, India",
    college: "Government College of Engineering, Chandrapur",
    degree: "B.Tech in Computer Science & Engineering",
    cgpa: "8.53",
    graduationYear: "2022 – 2026",
    avatar: "/vedika-photo.jpg",
    resumeUrl: "/resume.pdf",
    resumeDownloadName: "Vedika_Bawane_Resume.pdf",
    summary: `Aspiring Software Developer with a solid foundation in Python, web development, and database management. Familiar with Flask, React.js, REST APIs, MySQL, JavaScript, HTML, CSS, and Bootstrap. Gained practical experience in frontend development through a Web Development Internship at CodSoft and developed high-impact projects including a Marathi-first Police Bharati Student Learning Platform and a Campus Placement Management System. Passionate about building responsive, user-friendly web applications, clean RESTful architectures, and solving practical problems through continuous learning.`
  },

  stats: [
    { label: "B.Tech CGPA", value: "8.53", sublabel: "Govt College of Engg, Chandrapur", highlight: true },
    { label: "Graduation", value: "2026", sublabel: "B.Tech Computer Science" },
    { label: "Web Internship", value: "CodSoft", sublabel: "Frontend Dev (Aug 2024)" },
    { label: "Major Platforms", value: "2+", sublabel: "Police Bharati & Placement Portal" }
  ],

  skillCategories: [
    {
      id: "programming",
      name: "Programming Languages",
      icon: "Code2",
      gradient: "linear-gradient(90deg, #22d3ee, #0284c7)",
      accentColor: "#22d3ee",
      colorTag: "cyan",
      skills: ["Python", "JavaScript", "SQL", "Java", "C", "C++"],
      desc: "Core procedural, object-oriented, scripting & query languages for full-stack engineering."
    },
    {
      id: "backend",
      name: "Backend Development",
      icon: "Server",
      gradient: "linear-gradient(90deg, #8b5cf6, #ec4899)",
      accentColor: "#8b5cf6",
      colorTag: "violet",
      skills: ["Django", "Django REST Framework", "Flask", "RESTful APIs", "API Integration", "PHP"],
      desc: "High-performance server APIs, request lifecycle routing, controllers & business services."
    },
    {
      id: "security",
      name: "Authentication & Security",
      icon: "ShieldCheck",
      gradient: "linear-gradient(90deg, #10b981, #06b6d4)",
      accentColor: "#10b981",
      colorTag: "mint",
      skills: ["JWT Authentication", "RBAC", "Request Validation", "HTTP Error Handling"],
      desc: "Stateless security tokens, Student vs Admin role permission tiers & schema validation."
    },
    {
      id: "frontend",
      name: "Frontend Development",
      icon: "Layout",
      gradient: "linear-gradient(90deg, #f43f5e, #fb923c)",
      accentColor: "#f43f5e",
      colorTag: "rose",
      skills: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "React Router", "Axios"],
      desc: "Interactive reactive SPAs, modular UI components, responsive styling & client routing."
    },
    {
      id: "database",
      name: "Databases & ORM",
      icon: "Database",
      gradient: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
      accentColor: "#3b82f6",
      colorTag: "blue",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "SQLAlchemy", "Flask-Migrate"],
      desc: "Relational modeling, indexing, NoSQL collections & Alembic automated schema migrations."
    },
    {
      id: "devops",
      name: "DevOps & Cloud",
      icon: "Cloud",
      gradient: "linear-gradient(90deg, #06b6d4, #10b981)",
      accentColor: "#06b6d4",
      colorTag: "teal",
      skills: ["Docker", "Kubernetes", "Azure Cloud", "Azure DevOps"],
      desc: "Containerized environments, cloud computing, deployment pipelines & automated CI/CD."
    },
    {
      id: "tools",
      name: "Development Tools",
      icon: "Wrench",
      gradient: "linear-gradient(90deg, #f59e0b, #ef4444)",
      accentColor: "#f59e0b",
      colorTag: "amber",
      skills: ["Git", "GitHub", "Postman", "Linux", "Visual Studio Code"],
      desc: "Version control, branching workflows, endpoint testing mockups & UNIX command line."
    },
    {
      id: "concepts",
      name: "Core Concepts",
      icon: "Cpu",
      gradient: "linear-gradient(90deg, #a855f7, #6366f1)",
      accentColor: "#a855f7",
      colorTag: "purple",
      skills: ["OOPs", "Data Structures", "Algorithms", "Database Design", "REST API Design", "System Design", "Data Analytics"],
      desc: "System design principles, computational complexity, normalized schemas & data analytics."
    }
  ],

  projects: [
    {
      id: "police-bharti",
      title: "Police Bharati Student Learning Platform",
      badge: "Flagship Full-Stack Project",
      status: "Production Ready",
      headline: "A Marathi-first EdTech platform empowering Maharashtra Police Bharti aspirants with digital study resources, tests & performance tracking.",
      overview: "Developed a comprehensive, Marathi-first web platform for Maharashtra Police Bharti aspirants, featuring digital study resources, online tests, and physical & academic progress tracking.",
      accentColor: "#ff3366",
      liveUrl: "https://policebharati.justbytecoder.com/",
      githubUrl: "https://github.com/vedikabawane",
      techStack: [
        "Python", "Flask", "React.js", "MySQL", "SQLAlchemy", "REST APIs", "JWT", "HTML5", "CSS3", "JavaScript"
      ],
      highlights: [
        {
          title: "Backend & Secure Authentication",
          desc: "Engineered robust RESTful APIs using Flask, SQLAlchemy ORM, and MySQL. Implemented stateless JWT authentication and Role-Based Access Control (RBAC) separating student access from administrative dashboards."
        },
        {
          title: "6+ Specialized Learning Modules",
          desc: "Designed and built six dedicated learning resource categories: subject-wise Marathi notes, downloadable PDFs, curated educational videos, previous-year question (PYQ) banks, daily current affairs, and official recruitment notices."
        },
        {
          title: "Online Testing & Dual Progress Monitoring",
          desc: "Created timed online test workflows, instant scoring algorithms, leaderboard rankings, comprehensive student analytics dashboards, and physical training progress tracking for police fitness benchmarks."
        },
        {
          title: "Automated Backend Testing",
          desc: "Authored automated backend test suites validating API endpoint behavior, JWT token expiration, RBAC enforcement, and database transaction persistence."
        }
      ],
      interactiveDemo: {
        type: "police-bharti",
        buttonText: "Launch Interactive Test & Platform Demo"
      }
    },

    {
      id: "placement-management",
      title: "Campus Placement Management System",
      badge: "Web-Based Enterprise System",
      status: "Implemented",
      headline: "A centralized web portal connecting students and Training & Placement Officers (TPO) to streamline campus recruitment drives.",
      overview: "Developed a web-based placement management system for students and placement officers to centralize placement activities, automate announcements, and improve campus recruitment communication.",
      accentColor: "#a855f7",
      githubUrl: "https://github.com/vedikabawane/Vedika_CPMS_Project",
      techStack: [
        "HTML5", "CSS3", "JavaScript", "Bootstrap", "PHP", "MySQL", "XAMPP"
      ],
      highlights: [
        {
          title: "Student Management & Profiles",
          desc: "Architected student registration, credential validation, resume attachment, and dynamic profile management to organize eligible student databases by branch, CGPA, and skills."
        },
        {
          title: "Placement Tracking & Live Announcements",
          desc: "Developed real-time placement drive tracking, job opening notices, criteria filtering, and announcement broadcasting to keep students continuously informed of upcoming rounds."
        },
        {
          title: "Administrative Operations & TPO Workflows",
          desc: "Implemented secure administrative dashboards allowing placement officers to verify student eligibility, schedule interview rounds, export student shortlists, and publish selection results."
        }
      ],
      interactiveDemo: {
        type: "placement-management",
        buttonText: "Preview Placement Portal Simulator"
      }
    },

    {
      id: "codsoft-frontend-suite",
      title: "CodSoft Web Development Internship Projects",
      badge: "Internship Showcase",
      status: "Successfully Completed",
      headline: "A triad of responsive frontend web applications demonstrating modern UI/UX design, interactive DOM manipulation, and responsive layout craftsmanship.",
      overview: "Developed three distinct frontend projects during the Web Development Internship at CodSoft, with a strong focus on responsive design, page performance, and interactive user experiences.",
      accentColor: "#00f5a0",
      githubUrl: "https://github.com/vedikabawane",
      techStack: [
        "HTML5", "CSS3", "JavaScript", "Responsive Web Design", "Frontend Development"
      ],
      highlights: [
        {
          title: "Personal Portfolio Website",
          desc: "Designed and developed a structured, user-friendly personal portfolio website presenting technical projects, background, and skills through clean modern aesthetics."
        },
        {
          title: "High-Converting Landing Pages",
          desc: "Constructed engaging landing pages using HTML, CSS, and modern JavaScript with organized layout hierarchies, sticky navigations, and interactive call-to-action elements."
        },
        {
          title: "Interactive Calculator Application",
          desc: "Engineered a functional calculator web application implementing mathematical evaluation logic, error handling, interactive keypad animations, and responsive mobile display."
        }
      ],
      interactiveDemo: {
        type: "calculator",
        buttonText: "Test Live Embedded Calculator"
      }
    }
  ],

  experience: [
    {
      role: "Web Development Intern",
      company: "CodSoft",
      location: "Kolkata, West Bengal (Remote)",
      period: "Aug 2024",
      badge: "Internship Completed",
      summary: "Gained intensive practical experience in modern frontend web development, user interface implementation, and responsive layout optimization.",
      points: [
        "Frontend Development: Developed three frontend projects during the Web Development Internship, including a personal portfolio, landing pages, and a calculator using HTML, CSS, and JavaScript.",
        "Responsive Web Design: Created interactive and user-friendly web interfaces with a focus on responsive design, webpage layout, and cross-device usability.",
        "Personal Portfolio: Designed and developed a personal portfolio website to present information through a structured and user-friendly web interface.",
        "Landing Pages: Built landing pages using HTML, CSS, and JavaScript to create organized layouts and interactive user interface elements.",
        "Calculator Application: Developed a calculator project using HTML, CSS, and JavaScript to implement basic calculations and interactive functionality.",
        "Core Skills Acquired: HTML5, CSS3, JavaScript, Responsive Web Design, Frontend Development"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "DOM Manipulation", "UI/UX"]
    }
  ],

  education: [
    {
      id: "btech",
      institution: "Government College of Engineering, Chandrapur",
      degree: "B.Tech in Computer Science & Engineering",
      location: "Chandrapur, Maharashtra",
      period: "2022 – 2026",
      cgpa: "8.53",
      grade: "CGPA: 8.53 / 10.0",
      status: "Final Year · In Progress",
      accentColor: "#8b5cf6",
      desc: "Specializing in software engineering, database architectures, RESTful design, and web technologies.",
      coursework: [
        "Object Oriented Programming (OOPs)",
        "Data Structures & Algorithms (DSA)",
        "Database Management Systems (DBMS)",
        "REST API Design & Web Engineering",
        "Operating Systems & Linux",
        "Computer Networks",
        "Software Engineering",
        "Data Analytics"
      ],
      achievements: [
        "Maintained strong academic performance with an 8.53 cumulative CGPA",
        "Built the Marathi-first Police Bharati Student Learning Platform with full JWT RBAC auth",
        "Active technical contributor across web engineering and database design"
      ]
    },
    {
      id: "hsc-12th",
      institution: "Anand Niketan Junior College, Anandwan, Warora",
      degree: "Higher Secondary Certificate (HSC) — Class 12",
      location: "Anandwan, Warora, Maharashtra",
      period: "2020 – 2022",
      grade: "Score: 55.33%",
      status: "Completed",
      accentColor: "#22d3ee",
      desc: "Completed Class 12 Higher Secondary education under Maharashtra State Board with Science & Mathematics coursework.",
      coursework: [
        "Physics",
        "Chemistry",
        "Mathematics",
        "English",
        "Computer / Information Science"
      ],
      achievements: [
        "Successfully cleared the Maharashtra State Board Higher Secondary Certificate (HSC) Examination",
        "Built core analytical and scientific reasoning foundations"
      ]
    },
    {
      id: "ssc-10th",
      institution: "Hiralal Loya Vidyalaya, Warora",
      degree: "Secondary School Certificate (SSC) — Class 10",
      location: "Warora, Maharashtra",
      period: "2019 – 2020",
      grade: "Score: 88.40% (Distinction)",
      status: "Completed with Distinction",
      accentColor: "#10b981",
      desc: "Completed Class 10 secondary school education under Maharashtra State Board, securing an outstanding 88.40% score.",
      coursework: [
        "Mathematics",
        "Science & Technology",
        "Social Sciences",
        "English",
        "Marathi",
        "Hindi"
      ],
      achievements: [
        "Achieved Outstanding Distinction with 88.40% in Class 10 Board Examination",
        "Top academic performer in school curriculum"
      ]
    }
  ],

  // Interactive Quiz data for the Police Bharati Demo Simulator
  policeBhartiQuiz: [
    {
      question: "महाराष्ट्र पोलीस दलाचे ब्रीदवाक्य कोणते आहे?",
      options: [
        "सदरक्षणाय खलनिग्रहणाय",
        "सेवा परमो धर्मः",
        "जय हिंद, जय महाराष्ट्र",
        "सत्यमेव जयते"
      ],
      answer: 0,
      explanation: "'सदरक्षणाय खलनिग्रहणाय' (सज्जनांचे रक्षण आणि दुर्जनांचे निर्दालन) हे महाराष्ट्र पोलीस दलाचे अधिकृत ब्रीदवाक्य आहे."
    },
    {
      question: "महाराष्ट्र पोलीस अकॅडमी (MPA) कोठे स्थित आहे?",
      options: [
        "पुणे",
        "नाशिक",
        "नागपूर",
        "मुंबई"
      ],
      answer: 1,
      explanation: "महाराष्ट्र पोलीस अकॅडमी (Maharashtra Police Academy) नाशिक येथे स्थित आहे, जिथे पोलीस उपनिरीक्षक (PSI) व वरिष्ठ अधिकाऱ्यांचे प्रशिक्षण होते."
    },
    {
      question: "भारतीय संविधानाचे शिल्पकार कोण आहेत?",
      options: [
        "डॉ. बाबासाहेब आंबेडकर",
        "महात्मा गांधी",
        "पंडित जवाहरलाल नेहरू",
        "सरदार वल्लभभाई पटेल"
      ],
      answer: 0,
      explanation: "डॉ. बाबासाहेब आंबेडकर हे भारतीय संविधानाच्या मसुदा समितीचे अध्यक्ष आणि संविधानाचे शिल्पकार आहेत."
    }
  ],

  // Placement demo mock data
  placementDemoData: {
    stats: {
      registeredStudents: 412,
      activeDrives: 8,
      offersReleased: 94,
      highestPackage: "12.5 LPA"
    },
    upcomingDrives: [
      { company: "TCS Digital", role: "Software Engineer", date: "Nov 04, 2026", criteria: "CGPA >= 7.5", status: "Open" },
      { company: "Persistent Systems", role: "Associate Software Engineer", date: "Nov 12, 2026", criteria: "CGPA >= 7.0", status: "Open" },
      { company: "Capgemini", role: "Analyst / Developer", date: "Nov 20, 2026", criteria: "CGPA >= 6.8", status: "Registration Closed" }
    ],
    studentProfileMock: {
      name: "Vedika Bawane",
      rollNo: "CSE-2022-048",
      college: "GCOE Chandrapur",
      branch: "Computer Science & Engineering",
      cgpa: "8.53",
      status: "Eligible for All Core & IT Drives"
    }
  }
};
