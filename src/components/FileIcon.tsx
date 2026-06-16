import type { FileKind } from "../data/fileTree";

const colorByKind: Record<FileKind, string> = {
  folder: "#c5c5c5",
  md: "#519aba",
  ts: "#3178c6",
  tsx: "#3178c6",
  js: "#cbcb41",
  json: "#cbcb41",
  html: "#e37933",
  css: "#42a5f5",
  docker: "#2496ed",
  nginx: "#43a047",
  gitignore: "#8f8f8f",
  lock: "#8f8f8f",
  generic: "#8f8f8f"
};

type FileIconProps = {
  kind: FileKind;
  expanded?: boolean;
};

export function FileIcon({ kind, expanded }: FileIconProps) {
  const color = colorByKind[kind];

  if (kind === "folder") {
    return (
      <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
        <path
          fill={color}
          d={
            expanded
              ? "M2 4.5A1.5 1.5 0 0 1 3.5 3H6l1.2 1.2H12.5A1.5 1.5 0 0 1 14 5.7V11.5A1.5 1.5 0 0 1 12.5 13h-9A1.5 1.5 0 0 1 2 11.5v-7z"
              : "M2 4.5A1.5 1.5 0 0 1 3.5 3H6l1.2 1.2H12.5A1.5 1.5 0 0 1 14 5.7V11.5A1.5 1.5 0 0 1 12.5 13h-9A1.5 1.5 0 0 1 2 11.5v-7z"
          }
        />
      </svg>
    );
  }

  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
      <path fill={color} d="M3 2.5A1.5 1.5 0 0 1 4.5 1H9l3 3v9.5A1.5 1.5 0 0 1 10.5 15h-6A1.5 1.5 0 0 1 3 13.5v-11z" />
      <path fill="#1e1e1e" d="M9 1v3h3" />
    </svg>
  );
}
