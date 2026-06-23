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
  title: "IT-säkerhetsspecialist & Systemutvecklare",
  location: "Malmö",
  phone: "0708148167",
  email: "stuff___3@hotmail.com",
  avatar: "/profile.svg",
  status: "Söker jobb",
  roles: ["IT-säkerhet", "Systemutveckling", "Webbutveckling", "Applikationstestning"],
  tagline:
    "IT-säkerhetsspecialist och systemutvecklare med fokus på säkra, testade och välunderhållna lösningar.",
  intro:
    "Jag är en IT-säkerhetsspecialist och systemutvecklare som kombinerar säkerhetstänk med utvecklingskompetens. Med utbildning inom IT-säkerhet, nätverk, penetrationstestning, Java-programmering, webbutveckling och applikationstestning vill jag bidra till säkra och kvalitetssäkrade IT-lösningar."
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
    school: "JENSEN education, Malmö",
    period: "2024 - 2026",
    details: ["Java, webbutveckling (HTML, CSS, JavaScript)", "Applikationstestning, testplanering och kodgranskning"]
  },
  {
    degree: "IT-säkerhetsspecialist",
    school: "Stockholms Internationella Handelsskola, Malmö",
    period: "2020 - 2022",
    details: [
      "Linux- och Windows-säkerhet, Cisco, affärsmannaskap och IT-juridik",
      "Penetrationstestning av nätverk samt en kort Python-kurs"
    ]
  },
  {
    degree: "Allmän linje",
    school: "Önnestads folkhögskola, Önnestad",
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
      "Installation, reparation och underhåll av VA-anläggningar.",
      "Felsökning och efterlevnad av säkerhetsstandarder.",
      "Noggrann dokumentation och effektivt teamsamarbete för hög kvalitet och säkerhet."
    ]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    id: "security",
    label: "Säkerhet",
    items: [
      { name: "IT-säkerhet", abbr: "SEC", color: "#f48771" },
      { name: "Penetrationstest", abbr: "PEN", color: "#ce9178" },
      { name: "Nätverk", abbr: "NET", color: "#4ec9b0" },
      { name: "Windows-säkerhet", abbr: "WIN", color: "#4fc1ff" },
      { name: "Cisco", abbr: "CSC", color: "#569cd6" },
      { name: "IT-juridik", abbr: "LAW", color: "#d7ba7d" }
    ]
  },
  {
    id: "dev",
    label: "Utveckling",
    items: [
      { name: "Java", abbr: "JV", color: "#d7ba7d" },
      { name: "JavaScript", abbr: "JS", color: "#dcdcaa" },
      { name: "HTML/CSS", abbr: "WEB", color: "#569cd6" },
      { name: "Spring Boot", abbr: "SPR", color: "#89d185" },
      { name: "React", abbr: "RE", color: "#4fc1ff" },
      { name: "TypeScript", abbr: "TS", color: "#4ec9b0" }
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
      { name: "Git", abbr: "GIT", color: "#f14c28" },
      { name: "Docker", abbr: "DK", color: "#569cd6" },
      { name: "PostgreSQL", abbr: "PG", color: "#4fc1ff" },
      { name: "GitHub Actions", abbr: "GHA", color: "#89d185" }
    ]
  }
];

export const languages: LanguageEntry[] = [
  { name: "Svenska", level: "Modersmål" },
  { name: "Engelska", level: "Flytande" }
];

export const sections: PortfolioSection[] = [
  {
    id: "about",
    label: "about.md",
    route: "/about",
    content: [
      profile.intro,
      "Jag är engagerad och ser fram emot nya utmaningar där säkerhet och utveckling möts."
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
    slug: "nightingale-heart",
    title: "Nightingale Heart (Praktik)",
    period: "2026",
    summary:
      "Praktik hos Nightingale Heart där jag bidrog till kvalitetssäkring och databasarbete på applikationens kartfunktioner.",
    tech: ["JavaScript", "Testning", "Databas", "Kartor/Maps"],
    challenge:
      "Kartdelarna behövde tillförlitlig datahantering och tester som fångade fel innan de nådde användarna.",
    solution:
      "Skrev tester för kartfunktionerna och arbetade med databaslogiken bakom kartdatan för att säkra korrekt och stabil visning.",
    image: "/projects/nightingale.png",
    accent: "#f48771",
    links: [{ label: "Webbplats", url: "https://www.nightingaleheart.com/" }]
  },
  {
    slug: "job-application-tracker",
    title: "Job Tracker",
    period: "2026",
    summary:
      "Ett fullstack-projekt för att samla ansökningar, statusar och uppföljning i ett tydligt jobbsökarflöde.",
    tech: ["Java", "Spring Boot", "PostgreSQL", "React", "Vite", "Tailwind CSS", "Docker"],
    challenge:
      "Jobbsökning blev splittrad mellan anteckningar, kalkylblad och olika sajter, vilket gjorde det svårt att se pipeline och nästa steg.",
    solution:
      "Byggde en JWT-säkrad Spring Boot-API med PostgreSQL och ett React-gränssnitt med pipelineöversikt, filtrering och snabb registrering av roller, plus extension-stöd för att spara jobb från Indeed.",
    image: "/projects/job-application-tracker.png",
    accent: "#7c83ff",
    links: [{ label: "GitHub", url: "https://github.com/Nabutte-s/job-application-tracker-2" }]
  },
  {
    slug: "network-health-dashboard",
    title: "Network Health Dashboard (Placeholder)",
    period: "2025",
    summary:
      "En dashboard som visualiserar status för servrar och nätverksnoder med fokus på snabb incident-översikt.",
    tech: ["React", "Tailwind", "Express", "MongoDB"],
    challenge:
      "Göra driftstatus tydlig och snabb att läsa i stressade situationer.",
    solution:
      "Färgkodad status, tidslinje för incidenter och filtrering på miljö, tjänst och allvarlighetsgrad.",
    image: "/projects/network-health.svg",
    accent: "#89d185",
    links: []
  },
  {
    slug: "test-automation-lab",
    title: "Test Automation Lab (Placeholder)",
    period: "2024",
    summary:
      "Ett mindre projekt för att prova teststrategier i en webbapplikation.",
    tech: ["Java", "JavaScript", "Playwright", "GitHub Actions"],
    challenge:
      "Kombinera manuell testplanering med automatiserade tester utan att göra processen tung.",
    solution:
      "Riskbaserad testplan, ett mindre men stabilt regressionspaket och CI-körning vid varje pull request.",
    image: "/projects/test-automation.svg",
    accent: "#c586c0",
    links: []
  }
];

export const chatPrompts = [
  "Vad gör dig stark inom IT-säkerhet?",
  "Vilken typ av roll söker du?",
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
