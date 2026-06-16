export type FileKind =
  | "folder"
  | "md"
  | "ts"
  | "tsx"
  | "js"
  | "json"
  | "html"
  | "css"
  | "docker"
  | "nginx"
  | "gitignore"
  | "lock"
  | "generic";

export type FileTreeNode = {
  name: string;
  kind: FileKind;
  route?: string;
  children?: FileTreeNode[];
};

export const workspaceName = "Protfolio";

export const fileTree: FileTreeNode[] = [
  {
    name: "dist",
    kind: "folder",
    children: [{ name: "index.html", kind: "html" }]
  },
  {
    name: "node_modules",
    kind: "folder",
    children: [{ name: ".package-lock.json", kind: "lock" }]
  },
  {
    name: "src",
    kind: "folder",
    children: [
      {
        name: "components",
        kind: "folder",
        children: [
          { name: "AIChatPanel.tsx", kind: "tsx" },
          { name: "CommandPalette.tsx", kind: "tsx" }
        ]
      },
      {
        name: "data",
        kind: "folder",
        children: [
          { name: "portfolio.ts", kind: "ts" },
          { name: "fileTree.ts", kind: "ts" }
        ]
      },
      {
        name: "cv",
        kind: "folder",
        children: [
          { name: "about.md", kind: "md", route: "/about" },
          { name: "education.md", kind: "md", route: "/education" },
          { name: "experience.md", kind: "md", route: "/experience" },
          { name: "skills.md", kind: "md", route: "/skills" },
          { name: "languages.md", kind: "md", route: "/languages" },
          { name: "contact.md", kind: "md", route: "/contact" }
        ]
      },
      {
        name: "projects",
        kind: "folder",
        children: [
          { name: "projects.md", kind: "md", route: "/projects" },
          { name: "secure-ticketing.md", kind: "md", route: "/projects/secure-ticketing" },
          { name: "network-health-dashboard.md", kind: "md", route: "/projects/network-health-dashboard" },
          { name: "test-automation-lab.md", kind: "md", route: "/projects/test-automation-lab" }
        ]
      },
      { name: "App.tsx", kind: "tsx" },
      { name: "main.tsx", kind: "tsx" },
      { name: "index.css", kind: "css" }
    ]
  },
  { name: ".dockerignore", kind: "docker" },
  { name: ".gitignore", kind: "gitignore" },
  { name: "DECISIONS.md", kind: "md" },
  { name: "docker-compose.yml", kind: "docker" },
  { name: "Dockerfile", kind: "docker" },
  { name: "Dockerfile.dev", kind: "docker" },
  { name: "index.html", kind: "html" },
  { name: "nginx.conf", kind: "nginx" },
  { name: "package-lock.json", kind: "lock" },
  { name: "package.json", kind: "json" },
  { name: "postcss.config.js", kind: "js" },
  { name: "README.md", kind: "md" },
  { name: "tailwind.config.js", kind: "js" },
  { name: "tsconfig.json", kind: "json" },
  { name: "tsconfig.node.json", kind: "json" },
  { name: "vite.config.ts", kind: "ts" }
];

export function flattenOpenableFiles(nodes: FileTreeNode[], parentPath = ""): Array<{ route: string; label: string; path: string }> {
  const result: Array<{ route: string; label: string; path: string }> = [];

  for (const node of nodes) {
    const nodePath = parentPath ? `${parentPath}/${node.name}` : node.name;
    if (node.route) {
      result.push({ route: node.route, label: node.name, path: nodePath });
    }
    if (node.children) {
      result.push(...flattenOpenableFiles(node.children, nodePath));
    }
  }

  return result;
}
