import { statusBarMeta } from "../../data/portfolio";

export function StatusBar() {
  return (
    <footer className="flex h-[22px] items-center justify-between border-t border-cursor-border bg-cursor-activity px-3 text-[11px] text-cursor-textMuted">
      <div className="flex items-center gap-3">
        <span>{statusBarMeta.branch}</span>
        <span>{statusBarMeta.problems} Problems</span>
      </div>
      <div className="flex items-center gap-3">
        <span>{statusBarMeta.encoding}</span>
        <span>{statusBarMeta.lineEnding}</span>
        <span>{statusBarMeta.languageMode}</span>
      </div>
    </footer>
  );
}
