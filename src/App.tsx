import { useEffect, useMemo, useState } from "react";
import { Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { AIChatPanel } from "./components/AIChatPanel";
import { CommandPalette } from "./components/CommandPalette";
import { ActivityBar } from "./components/layout/ActivityBar";
import { EditorPane, getTabMeta } from "./components/layout/EditorPane";
import { EditorTabs } from "./components/layout/EditorTabs";
import { EditorToolbar } from "./components/layout/EditorToolbar";
import { EmptyEditor } from "./components/layout/EmptyEditor";
import { Sidebar } from "./components/layout/Sidebar";
import { StatusBar } from "./components/layout/StatusBar";
import { TabBar } from "./components/layout/TabBar";
import { fileTree, flattenOpenableFiles } from "./data/fileTree";
import type { FileKind } from "./data/fileTree";

export type OpenTab = {
  route: string;
  label: string;
  kind: FileKind;
};

function PortfolioShell() {
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarView, setSidebarView] = useState<"explorer" | "search" | "git">("explorer");
  const [chatOpen, setChatOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [openTabs, setOpenTabs] = useState<OpenTab[]>([]);
  const [history, setHistory] = useState<string[]>(["/"]);
  const [historyIndex, setHistoryIndex] = useState(0);

  const allFiles = useMemo(() => flattenOpenableFiles(fileTree), []);

  const currentPath = location.pathname;
  const hasOpenFile = currentPath !== "/";

  useEffect(() => {
    if (!hasOpenFile) {
      return;
    }

    const meta = getTabMeta(currentPath);
    setOpenTabs((prev) => (prev.find((tab) => tab.route === currentPath) ? prev : [...prev, { route: currentPath, label: meta.label, kind: meta.kind }]));

    setHistory((prev) => {
      const last = prev[prev.length - 1];
      if (last === currentPath) {
        return prev;
      }
      const next = [...prev, currentPath];
      setHistoryIndex(next.length - 1);
      return next;
    });
  }, [currentPath, hasOpenFile]);

  const openFile = (route: string) => {
    navigate(route);
    setPaletteOpen(false);
  };

  const closeTab = (route: string) => {
    setOpenTabs((prev) => {
      const idx = prev.findIndex((tab) => tab.route === route);
      const next = prev.filter((tab) => tab.route !== route);
      if (route === currentPath) {
        const fallback = next[idx] ?? next[idx - 1];
        navigate(fallback?.route ?? "/");
      }
      return next;
    });
  };

  const goHistory = (direction: -1 | 1) => {
    const nextIndex = historyIndex + direction;
    if (nextIndex < 0 || nextIndex >= history.length) {
      return;
    }
    setHistoryIndex(nextIndex);
    navigate(history[nextIndex]);
  };

  return (
    <div className="flex h-screen w-screen flex-col overflow-hidden bg-cursor-bg text-cursor-text">
      <TabBar />
      <div className="flex min-h-0 flex-1">
        <ActivityBar
          activeView={sidebarView}
          chatOpen={chatOpen}
          onChangeView={setSidebarView}
          onToggleChat={() => setChatOpen((prev) => !prev)}
        />
        <Sidebar activeView={sidebarView} currentPath={currentPath} onOpenFile={openFile} />
        <div className="flex min-w-0 flex-1 flex-col bg-cursor-bg">
          <EditorTabs tabs={openTabs} currentPath={currentPath} onOpenFile={openFile} onCloseTab={closeTab} />
          <EditorToolbar
            onOpenPalette={() => setPaletteOpen(true)}
            onBack={() => goHistory(-1)}
            onForward={() => goHistory(1)}
            canBack={historyIndex > 0}
            canForward={historyIndex < history.length - 1}
          />
          <div className="min-h-0 flex-1 overflow-auto">
            {hasOpenFile ? (
              <EditorPane path={currentPath} />
            ) : (
              <EmptyEditor onOpenFile={() => setPaletteOpen(true)} onNewFile={() => openFile("/about")} />
            )}
          </div>
        </div>
        {chatOpen && <AIChatPanel onClose={() => setChatOpen(false)} />}
      </div>
      <StatusBar />
      <CommandPalette files={allFiles} onOpenFile={openFile} open={paletteOpen} onOpenChange={setPaletteOpen} />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PortfolioShell />} />
      <Route path="/about" element={<PortfolioShell />} />
      <Route path="/education" element={<PortfolioShell />} />
      <Route path="/experience" element={<PortfolioShell />} />
      <Route path="/skills" element={<PortfolioShell />} />
      <Route path="/languages" element={<PortfolioShell />} />
      <Route path="/contact" element={<PortfolioShell />} />
      <Route path="/projects" element={<PortfolioShell />} />
      <Route path="/projects/:slug" element={<PortfolioShell />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
