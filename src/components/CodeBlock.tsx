import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface Props {
  code: string;
  language?: string;
}

const CodeBlock = ({ code, language }: Props) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group">
      {language && (
        <span className="absolute top-2 left-3 text-xs text-muted-foreground font-mono uppercase z-10">
          {language}
        </span>
      )}
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 z-10 p-1.5 rounded-lg bg-muted/80 hover:bg-muted border border-border text-muted-foreground hover:text-foreground transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
        aria-label="Copy code"
      >
        {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
      </button>
      {copied && (
        <span className="absolute top-2 right-12 z-10 text-xs text-green-500 font-medium animate-fade-in">
          Copied!
        </span>
      )}
      <div className="code-block">
        <pre className="text-foreground/90 pt-6 whitespace-pre-wrap break-words">{code}</pre>
      </div>
    </div>
  );
};

export default CodeBlock;
