import { FolderTree, GitBranch, MessageSquare, Search, Settings } from "lucide-react";

type ActivityBarProps = {
  activeView: "explorer" | "search" | "git";
  chatOpen: boolean;
  onChangeView: (view: "explorer" | "search" | "git") => void;
  onToggleChat: () => void;
};

const items = [
  { id: "explorer" as const, icon: FolderTree, label: "Explorer" },
  { id: "search" as const, icon: Search, label: "Search" },
  { id: "git" as const, icon: GitBranch, label: "Source Control" }
];

export function ActivityBar({ activeView, chatOpen, onChangeView, onToggleChat }: ActivityBarProps) {
  return (
    <aside className="flex w-[48px] flex-col items-center justify-between border-r border-cursor-border bg-cursor-activity py-2">
      <div className="flex flex-col items-center gap-1">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeView === item.id;
          return (
            <button
              key={item.id}
              type="button"
              title={item.label}
              onClick={() => onChangeView(item.id)}
              className={`relative rounded p-2 transition ${
                isActive ? "text-cursor-text" : "text-cursor-textMuted hover:text-cursor-text"
              }`}
            >
              {isActive && <span className="absolute left-0 top-1/2 h-6 w-[2px] -translate-y-1/2 rounded bg-white" />}
              <Icon size={22} strokeWidth={1.5} />
            </button>
          );
        })}
      </div>

      <div className="flex flex-col items-center gap-1 pb-1">
        <button
          type="button"
          title="Cursor Chat"
          onClick={onToggleChat}
          className={`rounded p-2 transition ${
            chatOpen ? "text-cursor-text" : "text-cursor-textMuted hover:text-cursor-text"
          }`}
        >
          <MessageSquare size={22} strokeWidth={1.5} />
        </button>
        <button type="button" title="Settings" className="rounded p-2 text-cursor-textMuted hover:text-cursor-text">
          <Settings size={22} strokeWidth={1.5} />
        </button>
      </div>
    </aside>
  );
}
