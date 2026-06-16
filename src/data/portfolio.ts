export type PortfolioProject = {
  slug: string;
  title: string;
  period: string;
  summary: string;
  tech: string[];
  challenge: string;
  solution: string;
  links: Array<{ label: string; url: string }>;
};

export type PortfolioSection = {
  id: string;
  label: string;
  route: string;
  content: string[];
};

export const profile = {
  name: "Christoffer Svensson",
  title: "IT-sakerhetsspecialist & Systemutvecklare",
  location: "Malmo",
  phone: "0708148167",
  email: "stuff___3@hotmail.com",
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
    content: [
      "JENSEN education, Malmo - Systemutvecklare med testinriktning (2024 - 2026).",
      "Java, webbutveckling (HTML, CSS, JavaScript), applikationstestning, testplanering och kodgranskning.",
      "Stockholms Internationella Handelsskola, Malmo - IT-sakerhetsspecialist (2020 - 2022).",
      "Linux- och Windows-sakerhet, Cisco, affarsmannaskap och IT-juridik, penetrationstestning av natverk samt en kort Python-kurs.",
      "Onnestads folkhogskola, Onnestad - Allman linje (2016 - 2017)."
    ]
  },
  {
    id: "experience",
    label: "experience.md",
    route: "/experience",
    content: [
      "Kristianstad kommun - VA-tekniker (2018 - 2019).",
      "Installation, reparation och underhall av VA-anlaggningar.",
      "Felsokning och efterlevnad av sakerhetsstandarder.",
      "Noggrann dokumentation och effektivt teamsamarbete for hog kvalitet och sakerhet."
    ]
  },
  {
    id: "skills",
    label: "skills.md",
    route: "/skills",
    content: [
      "IT-sakerhet, penetrationstestning, natverk, Linux- och Windows-sakerhet.",
      "Java, JavaScript, HTML, CSS, grundlaggande Python.",
      "Applikationstestning, testplanering och kodgranskning."
    ]
  },
  {
    id: "languages",
    label: "languages.md",
    route: "/languages",
    content: ["Svenska", "Engelska"]
  },
  {
    id: "contact",
    label: "contact.md",
    route: "/contact",
    content: [
      "Ort: Malmo",
      "Telefon: 0708148167",
      "E-post: stuff___3@hotmail.com",
      "GitHub: https://github.com/Nabutte-s",
      "LinkedIn: https://www.linkedin.com/in/christoffer-svensson-b09582230/"
    ]
  }
];

export const projects: PortfolioProject[] = [
  {
    slug: "secure-ticketing",
    title: "Secure Ticketing (placeholder)",
    period: "2026",
    summary:
      "En skolprojekt-ide for ett internt supportsystem med fokus pa behorighet och sparbarhet.",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    challenge:
      "Skapa ett enkelt system dar olika roller endast ser ratt data och dar alla kritiska handelser loggas.",
    solution:
      "Role-based access i API-lagret, tydliga audit-loggar och validering av all inkommande data innan lagring.",
    links: []
  },
  {
    slug: "network-health-dashboard",
    title: "Network Health Dashboard (placeholder)",
    period: "2025",
    summary:
      "En dashboard som visualiserar status for servrar och natverksnoder med fokus pa snabb incident-oversikt.",
    tech: ["React", "Tailwind", "Express", "MongoDB"],
    challenge:
      "Gora driftstatus tydlig och snabb att lasa i stressade situationer.",
    solution:
      "Fargkodad status, tidslinje for incidenter och filtrering pa miljo, tjanst och allvarlighetsgrad.",
    links: []
  },
  {
    slug: "test-automation-lab",
    title: "Test Automation Lab (placeholder)",
    period: "2024",
    summary:
      "Ett mindre projekt for att prova teststrategier i en webbapplikation.",
    tech: ["Java", "JavaScript", "Playwright", "GitHub Actions"],
    challenge:
      "Kombinera manuell testplanering med automatiserade tester utan att gora processen tung.",
    solution:
      "Riskbaserad testplan, ett mindre men stabilt regressionspaket och CI-korning vid varje pull request.",
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
