import { profile } from "../../data/portfolio";

const menuItems = ["File", "Edit", "Selection", "View", "Go", "Run", "Terminal", "Help"];

export function TabBar() {
  return (
    <header className="flex h-[35px] items-center border-b border-cursor-border bg-cursor-bg">
      <div className="hidden items-center gap-0 px-2 md:flex">
        {menuItems.map((item) => (
          <button
            key={item}
            type="button"
            className="rounded px-2 py-1 text-[12px] text-cursor-textMuted transition hover:bg-cursor-hover hover:text-cursor-text"
          >
            {item}
          </button>
        ))}
      </div>
      <div className="flex min-w-0 flex-1 items-center justify-center px-2">
        <span className="truncate text-[12px] text-cursor-textMuted">
          {profile.name} - Portfolio
        </span>
      </div>
      <div className="hidden w-[200px] shrink-0 md:block" />
    </header>
  );
}
