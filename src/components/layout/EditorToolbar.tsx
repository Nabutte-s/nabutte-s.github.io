import { ArrowLeft, ArrowRight, Menu, MoreHorizontal, Search } from "lucide-react";

type EditorToolbarProps = {
  onOpenPalette: () => void;
  onBack?: () => void;
  onForward?: () => void;
  canBack?: boolean;
  canForward?: boolean;
};

export function EditorToolbar({
  onOpenPalette,
  onBack,
  onForward,
  canBack = false,
  canForward = false
}: EditorToolbarProps) {
  return (
    <div className="flex h-[35px] items-center justify-between border-b border-cursor-border bg-cursor-bg px-3">
      <div className="flex items-center gap-1">
        <button type="button" className="rounded p-1.5 text-cursor-textMuted hover:bg-cursor-hover hover:text-cursor-text" title="Menu">
          <Menu size={16} />
        </button>
        <button
          type="button"
          onClick={onOpenPalette}
          className="rounded p-1.5 text-cursor-textMuted hover:bg-cursor-hover hover:text-cursor-text"
          title="Search"
        >
          <Search size={16} />
        </button>
        <button
          type="button"
          disabled={!canBack}
          onClick={onBack}
          className="rounded p-1.5 text-cursor-textMuted hover:bg-cursor-hover hover:text-cursor-text disabled:opacity-30"
          title="Back"
        >
          <ArrowLeft size={16} />
        </button>
        <button
          type="button"
          disabled={!canForward}
          onClick={onForward}
          className="rounded p-1.5 text-cursor-textMuted hover:bg-cursor-hover hover:text-cursor-text disabled:opacity-30"
          title="Forward"
        >
          <ArrowRight size={16} />
        </button>
      </div>
      <button type="button" className="rounded p-1.5 text-cursor-textMuted hover:bg-cursor-hover hover:text-cursor-text" title="More">
        <MoreHorizontal size={16} />
      </button>
    </div>
  );
}
