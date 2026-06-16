import { useEffect, useMemo, useState } from "react";

type CommandPaletteProps = {
  files: Array<{ route: string; label: string; path: string }>;
  onOpenFile: (route: string) => void;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function CommandPalette({ files, onOpenFile, open, onOpenChange }: CommandPaletteProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const onKeydown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "p") {
        event.preventDefault();
        onOpenChange(!open);
      } else if (event.key === "Escape") {
        onOpenChange(false);
      }
    };
    window.addEventListener("keydown", onKeydown);
    return () => window.removeEventListener("keydown", onKeydown);
  }, [open, onOpenChange]);

  useEffect(() => {
    if (!open) {
      setQuery("");
    }
  }, [open]);

  const filtered = useMemo(() => {
    const lower = query.toLowerCase().trim();
    if (!lower) {
      return files;
    }
    return files.filter((file) => file.label.toLowerCase().includes(lower) || file.path.toLowerCase().includes(lower));
  }, [files, query]);

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/45 p-10">
      <div className="w-full max-w-xl overflow-hidden rounded-md border border-cursor-border bg-cursor-panelAlt shadow-panel">
        <div className="border-b border-cursor-border p-2">
          <input
            className="w-full bg-transparent px-2 py-1 text-[13px] outline-none"
            autoFocus
            placeholder="Search files by name (append : to go to line)"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
        <div className="max-h-[360px] overflow-auto p-1">
          {filtered.map((file) => (
            <button
              key={file.route}
              type="button"
              onClick={() => onOpenFile(file.route)}
              className="flex w-full items-center justify-between rounded px-3 py-2 text-left hover:bg-cursor-hover"
            >
              <span className="font-mono text-[13px]">{file.path}</span>
              <span className="text-xs text-cursor-textMuted">{file.label}</span>
            </button>
          ))}
          {filtered.length === 0 && <p className="px-3 py-2 text-sm text-cursor-textMuted">Ingen fil matchade.</p>}
        </div>
      </div>
    </div>
  );
}
