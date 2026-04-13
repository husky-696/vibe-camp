import { useState } from "react";
import { Copy, Check, Terminal } from "lucide-react";
import { t, Lang } from "@/data/translations";

interface Props {
  code: string;
  language?: string;
  lang?: Lang;
}

const CodeBlock = ({ code, language, lang = "en" }: Props) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isPrompt = language === "prompt";

  return (
    <div className="relative group rounded-2xl overflow-hidden border border-border shadow-inner bg-card">
      <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-secondary/50">
        <div className="flex items-center gap-2">
          {isPrompt ? (
            <Terminal className="w-4 h-4 text-primary" />
          ) : (
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-green-400"></span>
            </div>
          )}
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider ml-1">
            {isPrompt ? (lang === "en" ? "AI Prompt — Copy into IDE" : "AI 프롬프트 — IDE에 붙여넣기") : language || "Code"}
          </span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-xs font-semibold text-primary border border-primary/20 bg-primary/5 hover:bg-primary/10 px-3 py-1.5 rounded-lg transition-colors"
        >
          {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
          {copied ? (lang === "en" ? "Copied!" : "복사됨!") : (lang === "en" ? "Copy" : "복사")}
        </button>
      </div>

      <div className="p-4 sm:p-5 overflow-auto max-h-[300px] code-block font-mono text-sm leading-relaxed border-none rounded-none shadow-none">
        <pre className="whitespace-pre-wrap">{code}</pre>
      </div>
    </div>
  );
};

export default CodeBlock;
