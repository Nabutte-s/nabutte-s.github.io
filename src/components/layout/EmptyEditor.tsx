type EmptyEditorProps = {
  onOpenFile: () => void;
  onNewFile: () => void;
};

export function EmptyEditor({ onOpenFile, onNewFile }: EmptyEditorProps) {
  return (
    <div className="flex h-full flex-col items-center justify-center bg-cursor-bg">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onOpenFile}
          className="rounded-full border border-cursor-borderSoft px-5 py-2 text-[13px] text-cursor-text hover:bg-cursor-hover"
        >
          Open File
        </button>
        <button
          type="button"
          onClick={onNewFile}
          className="rounded-full border border-cursor-borderSoft px-5 py-2 text-[13px] text-cursor-text hover:bg-cursor-hover"
        >
          New File
        </button>
      </div>
    </div>
  );
}
