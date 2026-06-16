export type PortfolioProject = {
  slug: string;
  title: string;
  period: string;
  summary: string;
  tech: string[];
  challenge: string;
  solution: string;
  image: string;
  accent: string;
  links: Array<{ label: string; url: string }>;
};

export type PortfolioSection = {
  id: string;
  label: string;
  route: string;
  content: string[];
};

export type ExperienceEntry = {
  period: string;
  company: string;
  role: string;
  logo?: string;
  bullets: string[];
};

export type EducationEntry = {
  degree: string;
  school: string;
  period: string;
  details: string[];
};

export type SkillCategory = {
  id: string;
  label: string;
  items: Array<{ name: string; abbr: string; color: string }>;
};

export type LanguageEntry = {
  name: string;
  level: string;
};

export const profile = {
  name: "Christoffer Svensson",
  title: "IT-sakerhetsspecialist & Systemutvecklare",
  location: "Malmo",
  phone: "0708148167",
  email: "stuff___3@hotmail.com",
  avatar: "/profile.svg",
  status: "Soker jobb",
  roles: ["IT-sakerhet", "Systemutveckling", "Webbutveckling", "Applikationstestning"],
  tagline:
    "IT-sakerhetsspecialist och systemutvecklare med fokus pa sakra, testade och valunderhallna losningar.",
  intro:
    "Jag ar en IT-sakerhetsspecialist och systemutvecklare som kombinerar sakerhetstank med utvecklingskompetens. Med utbildning inom IT-sakerhet, natverk, penetrationstestning, Java-programmering, webbutveckling och applikationstestning vill jag bidra till sakra och kvalitetssakrade IT-losningar."
};

export const socialLinks = [
  { label: "GitHub", url: "https://github.com/Nabutte-s" },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/christoffer-svensson-b09582230/"
  }
];

export const education: EducationEntry[] = [
  {
    degree: "Systemutvecklare med testinriktning",
    school: "JENSEN education, Malmo",
    period: "2024 - 2026",
    details: ["Java, webbutveckling (HTML, CSS, JavaScript)", "Applikationstestning, testplanering och kodgranskning"]
  },
  {
    degree: "IT-sakerhetsspecialist",
    school: "Stockholms Internationella Handelsskola, Malmo",
    period: "2020 - 2022",
    details: [
      "Linux- och Windows-sakerhet, Cisco, affarsmannaskap och IT-juridik",
      "Penetrationstestning av natverk samt en kort Python-kurs"
    ]
  },
  {
    degree: "Allman linje",
    school: "Onnestads folkhogskola, Onnestad",
    period: "2016 - 2017",
    details: []
  }
];

export const experience: ExperienceEntry[] = [
  {
    period: "2018 - 2019",
    company: "Kristianstad kommun",
    role: "VA-tekniker",
    bullets: [
      "Installation, reparation och underhall av VA-anlaggningar.",
      "Felsokning och efterlevnad av sakerhetsstandarder.",
      "Noggrann dokumentation och effektivt teamsamarbete for hog kvalitet och sakerhet."
    ]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    id: "security",
    label: "Sakerhet",
    items: [
      { name: "IT-sakerhet", abbr: "SEC", color: "#f48771" },
      { name: "Penetrationstest", abbr: "PEN", color: "#ce9178" },
      { name: "Natverk", abbr: "NET", color: "#4ec9b0" }
    ]
  },
  {
    id: "dev",
    label: "Utveckling",
    items: [
      { name: "Java", abbr: "JV", color: "#d7ba7d" },
      { name: "JavaScript", abbr: "JS", color: "#dcdcaa" },
      { name: "HTML/CSS", abbr: "WEB", color: "#569cd6" }
    ]
  },
  {
    id: "test",
    label: "Test",
    items: [
      { name: "Applikationstest", abbr: "QA", color: "#89d185" },
      { name: "Testplanering", abbr: "TP", color: "#4fc1ff" },
      { name: "Kodgranskning", abbr: "CR", color: "#c586c0" }
    ]
  },
  {
    id: "tools",
    label: "Verktyg",
    items: [
      { name: "Linux", abbr: "LX", color: "#cccccc" },
      { name: "Python", abbr: "PY", color: "#4ec9b0" },
      { name: "Git", abbr: "GIT", color: "#f14c28" }
    ]
  }
];

export const languages: LanguageEntry[] = [
  { name: "Svenska", level: "Modersmal" },
  { name: "Engelska", level: "Flytande" }
];

export const sections: PortfolioSection[] = [
  {
    id: "about",
    label: "about.md",
    route: "/about",
    content: [
      profile.intro,
      "Jag ar engagerad och ser fram emot nya utmaningar dar sakerhet och utveckling mots."
    ]
  },
  {
    id: "education",
    label: "education.md",
    route: "/education",
    content: education.flatMap((entry) => [
      `${entry.school} - ${entry.degree} (${entry.period}).`,
      ...entry.details
    ])
  },
  {
    id: "experience",
    label: "experience.md",
    route: "/experience",
    content: experience.flatMap((entry) => [
      `${entry.company} - ${entry.role} (${entry.period}).`,
      ...entry.bullets
    ])
  },
  {
    id: "skills",
    label: "skills.md",
    route: "/skills",
    content: skillCategories.flatMap((cat) => cat.items.map((item) => item.name))
  },
  {
    id: "languages",
    label: "languages.md",
    route: "/languages",
    content: languages.map((lang) => `${lang.name} - ${lang.level}`)
  },
  {
    id: "contact",
    label: "contact.md",
    route: "/contact",
    content: [
      `Ort: ${profile.location}`,
      `Telefon: ${profile.phone}`,
      `E-post: ${profile.email}`,
      "GitHub: https://github.com/Nabutte-s",
      "LinkedIn: https://www.linkedin.com/in/christoffer-svensson-b09582230/"
    ]
  }
];

export const projects: PortfolioProject[] = [
  {
    slug: "secure-ticketing",
    title: "Secure Ticketing",
    period: "2026",
    summary:
      "En skolprojekt-ide for ett internt supportsystem med fokus pa behorighet och sparbarhet.",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    challenge:
      "Skapa ett enkelt system dar olika roller endast ser ratt data och dar alla kritiska handelser loggas.",
    solution:
      "Role-based access i API-lagret, tydliga audit-loggar och validering av all inkommande data innan lagring.",
    image: "/projects/secure-ticketing.svg",
    accent: "#4ea1ff",
    links: []
  },
  {
    slug: "network-health-dashboard",
    title: "Network Health Dashboard",
    period: "2025",
    summary:
      "En dashboard som visualiserar status for servrar och natverksnoder med fokus pa snabb incident-oversikt.",
    tech: ["React", "Tailwind", "Express", "MongoDB"],
    challenge:
      "Gora driftstatus tydlig och snabb att lasa i stressade situationer.",
    solution:
      "Fargkodad status, tidslinje for incidenter och filtrering pa miljo, tjanst och allvarlighetsgrad.",
    image: "/projects/network-health.svg",
    accent: "#89d185",
    links: []
  },
  {
    slug: "test-automation-lab",
    title: "Test Automation Lab",
    period: "2024",
    summary:
      "Ett mindre projekt for att prova teststrategier i en webbapplikation.",
    tech: ["Java", "JavaScript", "Playwright", "GitHub Actions"],
    challenge:
      "Kombinera manuell testplanering med automatiserade tester utan att gora processen tung.",
    solution:
      "Riskbaserad testplan, ett mindre men stabilt regressionspaket och CI-korning vid varje pull request.",
    image: "/projects/test-automation.svg",
    accent: "#c586c0",
    links: []
  }
];

export const chatPrompts = [
  "Vad gor dig stark inom IT-sakerhet?",
  "Vilken typ av roll soker du?",
  "Hur kombinerar du test och utveckling?",
  "Visa dina kontaktuppgifter"
];

export const statusBarMeta = {
  branch: "main*",
  problems: "0",
  encoding: "UTF-8",
  lineEnding: "CRLF",
  languageMode: "TypeScript JSX"
};
