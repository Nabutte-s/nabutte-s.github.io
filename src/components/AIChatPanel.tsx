import { useMemo, useState } from "react";
import { X } from "lucide-react";
import { chatPrompts, profile, projects, socialLinks } from "../data/portfolio";

type ChatMessage = {
  role: "user" | "assistant";
  text: string;
};

type AIChatPanelProps = {
  onClose: () => void;
};

function answerForPrompt(prompt: string): string {
  switch (prompt) {
    case "Vad gör dig stark inom IT-säkerhet?":
      return "Jag kombinerar säkerhet och utveckling: utbildning i penetrationstestning, Linux/Windows-säkerhet och praktisk erfarenhet av testning och kodgranskning.";
    case "Vilken typ av roll söker du?":
      return "Jag söker roller där systemutveckling och IT-säkerhet möts, exempelvis junior utvecklare med säkerhetsfokus eller test/infrastruktur nära utvecklingsteam.";
    case "Hur kombinerar du test och utveckling?":
      return "Jag arbetar riskbaserat: planerar tester tidigt, granskar kod och automatiserar regressionskritiska flöden för att minska fel i produktion.";
    case "Visa dina kontaktuppgifter":
      return `${profile.name}, ${profile.location}. E-post: ${profile.email}. Telefon: ${profile.phone}. GitHub: ${socialLinks[0]?.url ?? ""}. LinkedIn: ${socialLinks[1]?.url ?? ""}`;
    default:
      return "Jag har inte ett svar för den frågan än.";
  }
}

export function AIChatPanel({ onClose }: AIChatPanelProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      text: `Hej! Jag är Cursor-assistenten för ${profile.name}. Fråga om bakgrund, projekt eller kontaktuppgifter.`
    }
  ]);

  const promptSuggestions = useMemo(
    () => [...chatPrompts, `Hur många projekt finns just nu? (${projects.length})`],
    []
  );

  const sendPrompt = (prompt: string) => {
    const assistantText =
      prompt.startsWith("Hur många projekt")
        ? `Det finns ${projects.length} placeholder-projekt i datan just nu.`
        : answerForPrompt(prompt);

    setMessages((prev) => [
      ...prev,
      { role: "user", text: prompt },
      { role: "assistant", text: assistantText }
    ]);
  };

  return (
    <aside className="flex w-[340px] min-w-[340px] flex-col border-l border-cursor-border bg-cursor-panel">
      <div className="flex h-[35px] items-center justify-between border-b border-cursor-border px-3 text-[11px] uppercase tracking-wide text-cursor-textMuted">
        <span>Cursor Chat</span>
        <button type="button" onClick={onClose} className="rounded p-1 hover:bg-cursor-hover hover:text-cursor-text">
          <X size={14} />
        </button>
      </div>
      <div className="scroll-thin min-h-0 flex-1 space-y-3 overflow-auto p-3">
        {messages.map((message, idx) => (
          <div
            key={`${message.role}-${idx}`}
            className={`rounded border p-2 text-sm ${
              message.role === "assistant"
                ? "border-cursor-border bg-cursor-bg text-cursor-text"
                : "border-cursor-accent/40 bg-cursor-accent/10 text-cursor-text"
            }`}
          >
            <p className="mb-1 text-[11px] uppercase text-cursor-textMuted">{message.role}</p>
            <p>{message.text}</p>
          </div>
        ))}
      </div>
      <div className="border-t border-cursor-border p-3">
        <p className="mb-2 text-xs uppercase text-cursor-textMuted">Snabbfrågor</p>
        <div className="flex flex-wrap gap-2">
          {promptSuggestions.map((prompt) => (
            <button
              key={prompt}
              type="button"
              onClick={() => sendPrompt(prompt)}
              className="rounded border border-cursor-border px-2 py-1 text-xs hover:border-cursor-accent hover:text-cursor-accent"
            >
              {prompt}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
