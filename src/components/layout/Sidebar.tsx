import { ChevronDown, ChevronRight, FilePlus, FolderPlus, RefreshCw } from "lucide-react";
import { useMemo, useState } from "react";
import { FileIcon } from "../FileIcon";
import { fileTree, workspaceName, type FileTreeNode } from "../../data/fileTree";

type SidebarProps = {
  activeView: "explorer" | "search" | "git";
  currentPath: string;
  onOpenFile: (route: string) => void;
};

function TreeNode({
  node,
  depth,
  path,
  expanded,
  currentPath,
  onToggle,
  onOpenFile
}: {
  node: FileTreeNode;
  depth: number;
  path: string;
  expanded: Set<string>;
  currentPath: string;
  onToggle: (path: string) => void;
  onOpenFile: (route: string) => void;
}) {
  const isFolder = node.kind === "folder";
  const isExpanded = expanded.has(path);
  const isActive = node.route === currentPath;
  const isOpenable = Boolean(node.route);

  const rowClass = `flex w-full items-center gap-1 py-[2px] pr-2 text-left text-[13px] ${
    isActive ? "bg-cursor-selection text-white" : isOpenable ? "text-cursor-text hover:bg-cursor-hover" : "cursor-default text-cursor-textMuted"
  }`;

  const rowContent = (
    <>
      {isFolder ? (
        isExpanded ? <ChevronDown size={14} className="text-cursor-textMuted" /> : <ChevronRight size={14} className="text-cursor-textMuted" />
      ) : (
        <span className="inline-block w-[14px]" />
      )}
      <FileIcon kind={node.kind} expanded={isExpanded} />
      <span className="truncate">{node.name}</span>
    </>
  );

  return (
    <>
      {isFolder || isOpenable ? (
        <button
          type="button"
          onClick={() => {
            if (isFolder) {
              onToggle(path);
              return;
            }
            if (node.route) {
              onOpenFile(node.route);
            }
          }}
          className={`${rowClass} rounded`}
          style={{ paddingLeft: `${8 + depth * 12}px` }}
        >
          {rowContent}
        </button>
      ) : (
        <div className={rowClass} style={{ paddingLeft: `${8 + depth * 12}px` }}>
          {rowContent}
        </div>
      )}

      {isFolder && isExpanded && node.children?.map((child) => {
        const childPath = `${path}/${child.name}`;
        return (
          <TreeNode
            key={childPath}
            node={child}
            depth={depth + 1}
            path={childPath}
            expanded={expanded}
            currentPath={currentPath}
            onToggle={onToggle}
            onOpenFile={onOpenFile}
          />
        );
      })}
    </>
  );
}

function SidebarPanel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex h-full min-w-[260px] max-w-[320px] flex-col border-r border-cursor-border bg-cursor-sidebar">
      <div className="flex h-[35px] items-center justify-between border-b border-cursor-border px-3 text-[11px] uppercase tracking-wide text-cursor-text">
        <span>{title}</span>
        <div className="flex items-center gap-1 text-cursor-textMuted">
          <button type="button" className="rounded p-1 hover:bg-cursor-hover hover:text-cursor-text" title="New File">
            <FilePlus size={14} />
          </button>
          <button type="button" className="rounded p-1 hover:bg-cursor-hover hover:text-cursor-text" title="New Folder">
            <FolderPlus size={14} />
          </button>
          <button type="button" className="rounded p-1 hover:bg-cursor-hover hover:text-cursor-text" title="Refresh">
            <RefreshCw size={14} />
          </button>
        </div>
      </div>
      <div className="scroll-thin min-h-0 flex-1 overflow-auto py-1">{children}</div>
    </div>
  );
}

export function Sidebar({ activeView, currentPath, onOpenFile }: SidebarProps) {
  const defaultExpanded = useMemo(() => new Set(["src", "src/cv", "src/projects"]), []);
  const [expanded, setExpanded] = useState<Set<string>>(defaultExpanded);

  const toggleFolder = (path: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(path)) {
        next.delete(path);
      } else {
        next.add(path);
      }
      return next;
    });
  };

  if (activeView === "search") {
    return (
      <SidebarPanel title="Search">
        <p className="px-3 py-2 text-[13px] text-cursor-textMuted">
          Tryck <span className="rounded bg-cursor-hover px-1">Ctrl + P</span> for att oppna filer.
        </p>
      </SidebarPanel>
    );
  }

  if (activeView === "git") {
    return (
      <SidebarPanel title="Source Control">
        <p className="px-3 py-2 text-[13px] text-cursor-textMuted">Inga staged andringar.</p>
      </SidebarPanel>
    );
  }

  return (
    <SidebarPanel title={workspaceName}>
      {fileTree.map((node) => {
        const path = node.name;
        return (
          <TreeNode
            key={path}
            node={node}
            depth={0}
            path={path}
            expanded={expanded}
            currentPath={currentPath}
            onToggle={toggleFolder}
            onOpenFile={onOpenFile}
          />
        );
      })}
    </SidebarPanel>
  );
}
