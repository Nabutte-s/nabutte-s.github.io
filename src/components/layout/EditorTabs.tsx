import { X } from "lucide-react";
import { FileIcon } from "../FileIcon";
import type { OpenTab } from "../../App";

type EditorTabsProps = {
  tabs: OpenTab[];
  currentPath: string;
  onOpenFile: (route: string) => void;
  onCloseTab: (route: string) => void;
};

export function EditorTabs({ tabs, currentPath, onOpenFile, onCloseTab }: EditorTabsProps) {
  if (tabs.length === 0) {
    return null;
  }

  return (
    <div className="scroll-thin flex overflow-x-auto border-b border-cursor-border bg-cursor-bg">
      {tabs.map((tab) => (
        <div
          key={tab.route}
          className={`group flex h-[35px] min-w-[140px] max-w-[220px] items-center gap-2 border-r border-cursor-border px-3 text-[13px] ${
            tab.route === currentPath ? "bg-cursor-panel text-cursor-text" : "text-cursor-textMuted"
          }`}
        >
          <FileIcon kind={tab.kind} />
          <button type="button" className="truncate text-left" onClick={() => onOpenFile(tab.route)}>
            {tab.label}
          </button>
          <button
            type="button"
            className="ml-auto rounded p-0.5 opacity-0 hover:bg-cursor-hover group-hover:opacity-100"
            onClick={() => onCloseTab(tab.route)}
            title="Close"
          >
            <X size={12} />
          </button>
        </div>
      ))}
    </div>
  );
}
