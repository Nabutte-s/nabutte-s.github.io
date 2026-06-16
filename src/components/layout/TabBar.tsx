export function TabBar() {
  return (
    <header className="flex h-[35px] items-center border-b border-cursor-border bg-cursor-bg px-2">
      <div className="flex min-w-0 flex-1 items-center gap-2">
        <div className="flex h-[28px] min-w-[220px] max-w-[320px] items-center gap-2 rounded-md border border-cursor-border bg-cursor-panel px-3 text-[13px] text-cursor-text">
          <span className="inline-flex h-4 w-4 items-center justify-center rounded bg-white text-[10px] font-bold text-black">
            C
          </span>
          <span className="truncate">Cursor-style portfolio</span>
        </div>
      </div>
    </header>
  );
}
