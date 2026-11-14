export const profile = {
  name: "Karim Mohamed",
  firstName: "Karim",
  role: "Security Researcher",
  focus: "Web · API · Android Application Security",
  summary:
    "Security researcher specializing in Web, API, and Android application security with over two years of hands-on bug bounty experience. Focused on vulnerability discovery, exploit validation, Android reverse engineering, and security assessment of real-world systems — with a consistent record of responsibly disclosed vulnerabilities through HackerOne.",
  location: "Cairo, Egypt",
  email: "km808155@gmail.com",
  phone: "01026273099",
  socials: {
    github: "https://github.com/karim-mohamed-mrdix",
    githubHandle: "karim-mohamed-mrdix",
    hackerone: "https://hackerone.com/0xkarim_dix",
    hackeroneHandle: "0xkarim_dix",
  },
};

export const heroStats = [
  { value: "2+", label: "Years in Bug Bounty" },
  { value: "40+", label: "Organizations Acknowledged" },
  { value: "#6", label: "Global · Android Assets (H1, Q2 2026)" },
];

export const about = {
  paragraphs: [
    "I'm a security researcher specializing in Web, API, and Android application security, with over two years of bug bounty experience. My work centers on vulnerability discovery, exploit validation, reverse engineering Android applications, and assessing the security of real-world systems under authorized programs.",
    "I have a proven track record of responsibly disclosing security vulnerabilities through HackerOne — including access control, authentication, authorization, deep link, and business logic flaws. I'm passionate about offensive security, continuous learning, and developing practical, repeatable security research methodologies.",
  ],
  education: {
    institution: "Faculty of Technology, Industry, and Energy in Helwan",
    field: "Computer Science (CS)",
    period: "2023 – 2027",
  },
  interests: [
    "Offensive Security",
    "Android Reverse Engineering",
    "Exploit Validation & Chaining",
    "Security Research Methodologies",
  ],
};

export const skillGroups = [
  {
    title: "Offensive Security",
    skills: [
      "Web & API Penetration Testing",
      "Android App Security (Static & Dynamic Analysis)",
      "Reverse Engineering",
      "Deep Link Security Assessment",
      "Vulnerability Research & Validation",
      "Responsible Disclosure",
      "OWASP Web Top 10",
      "OWASP Mobile Top 10",
      "Authentication & Authorization Testing",
      "Business Logic Testing",
      "Security Automation",
      "Reconnaissance",
    ],
  },
  {
    title: "Programming & Scripting",
    skills: ["Python", "Java", "JavaScript", "PHP", "HTML"],
  },
  {
    title: "Security Tools",
    skills: [
      "Burp Suite",
      "Frida",
      "ADB",
      "JADX",
      "MobSF",
      "Nuclei",
      "Nmap",
      "FFUF",
    ],
  },
  {
    title: "Platforms & Environments",
    skills: ["HackerOne", "Bugcrowd", "Microsoft 365 (Office 365)"],
  },
];

export const experience = [
  {
    role: "Bug Bounty Hunter / Security Researcher",
    org: "Independent — HackerOne & Bugcrowd",
    period: "2+ years",
    current: true,
    summary:
      "Strong track record of discovering and responsibly reporting security vulnerabilities in web and mobile applications through public bug bounty programs.",
    highlights: [
      "Cross-Site Scripting (XSS), Cross-Site Request Forgery (CSRF), and SQL Injection (SQLi)",
      "Information Disclosure & Account Takeover (ATO)",
      "Server-Side Misconfigurations",
      "Broken Access Control — IDOR, Privilege Escalation, and Business Logic Flaws",
      "Two-Factor / Multi-Factor Authentication (2FA/MFA) Bypasses",
      "Acknowledged by major vendors and programs, including Adobe, Coinbase, Nextcloud, HubSpot, Intercom, Škoda, Sony, IBM, and 40+ additional organizations",
    ],
  },
  {
    role: "Android Pentesting & Bug Bounty",
    org: "Mobile Security Research",
    period: "HackerOne & Bugcrowd",
    current: true,
    summary:
      "Assessing Android applications through penetration testing and bug bounty programs, combining static analysis with dynamic instrumentation.",
    highlights: [
      "Static analysis and dynamic instrumentation using Frida",
      "Insecure WebView implementations and deep link misconfigurations",
      "Exposed components and insecure data storage",
      "API security issues, cryptographic misuse, and hard-coded secrets",
      "Hands-on work with emulators, runtime analysis, and real-device testing",
      "Multiple valid Android vulnerabilities reported through bug bounty platforms",
    ],
  },
];

export const research = [
  {
    title: "Android Application Security Assessment",
    description:
      "End-to-end assessment of Android applications: reverse engineering with static analysis, runtime instrumentation with Frida, and validation across emulators and real devices. Focus areas include insecure WebViews, deep link handling, exposed components, insecure data storage, cryptographic misuse, and hard-coded secrets.",
    tags: ["Frida", "JADX", "ADB", "MobSF", "Static & Dynamic Analysis"],
  },
  {
    title: "Web & API Exploitation",
    description:
      "Discovering and validating high-impact web and API vulnerabilities against real-world targets — broken access control (IDOR and privilege escalation), authentication and authorization flaws, 2FA/MFA bypasses, information disclosure, and server-side misconfigurations, with an emphasis on exploit chains over single bugs.",
    tags: ["Burp Suite", "IDOR", "Auth Bypass", "MFA Bypass", "Business Logic"],
  },
  {
    title: "Reconnaissance & Security Automation",
    description:
      "Building practical research methodologies for large attack surfaces: automated reconnaissance workflows, structured vulnerability triage, and disciplined responsible disclosure through public bug bounty platforms.",
    tags: ["Nuclei", "Nmap", "FFUF", "Python", "Automation"],
  },
];

export const certificates = [
  {
    name: "Cisco CyberOps",
    issuer: "NTI",
    status: "Certified",
  },
  {
    name: "eJPT v1",
    issuer: "NetRiders",
    status: "Certified",
  },
];

export const courses = [
  {
    name: "CCNA 200-301",
    issuer: "Self Study",
    status: "Completed",
  },
  {
    name: "eJPT v1",
    issuer: "NetRiders Academy",
    status: "Completed",
  },
  {
    name: "eWPTX",
    issuer: "NetRiders Academy",
    status: "Completed",
  },
  {
    name: "Android App Hacking Black Belt",
    issuer: null,
    status: "Completed",
  },
  {
    name: "CWES",
    issuer: null,
    status: "In Progress",
  },
];

export const achievements = {
  rankings: [
    {
      rank: "#50",
      scope: "Egypt All-Time Leaderboard",
      detail: "Quarter 2 (Apr–Jun 2025)",
      platform: "HackerOne",
    },
    {
      rank: "#23",
      scope: "Egypt All-Time Leaderboard",
      detail: "Quarter 4 (Oct–Dec 2025)",
      platform: "HackerOne",
    },
    {
      rank: "#18",
      scope: "Egypt All-Time Leaderboard",
      detail: "Quarter 1 (Jan–Mar 2026)",
      platform: "HackerOne",
    },
    {
      rank: "#21",
      scope: "Egypt All-Time Leaderboard",
      detail: "Quarter 2 (Apr–Jun 2026)",
      platform: "HackerOne",
    },
    {
      rank: "#25",
      scope: "Global — Android Assets",
      detail: "Quarter 1 (Jan–Mar 2026)",
      platform: "HackerOne",
    },
    {
      rank: "#6",
      scope: "Global — Android Assets",
      detail: "Quarter 2 (Apr–Jun 2026)",
      platform: "HackerOne",
    },
  ],
  finals:
    "Qualified for the HackerOne Egypt Club Live Event Finals, recognizing top Egyptian security researchers.",
  vendors: [
    "Adobe",
    "Coinbase",
    "Nextcloud",
    "HubSpot",
    "Intercom",
    "Škoda",
    "Sony",
    "IBM",
  ],
  vendorsNote: "and 40+ additional organizations",
};

export const nav = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "research", label: "Research" },
  { id: "certifications", label: "Certifications" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];
