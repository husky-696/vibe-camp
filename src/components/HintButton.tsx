import { useState } from "react";
import { Lightbulb, ChevronDown, ChevronUp } from "lucide-react";
import CodeBlock from "./CodeBlock";
import { Lang } from "@/data/translations";

interface Props {
  label: string;
  prompt: string;
  lang: Lang;
}

const HintButton = ({ label, prompt }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-xl border border-primary/20 bg-primary/5 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-2 px-4 py-3 text-sm font-medium text-primary hover:bg-primary/10 transition-colors"
      >
        <Lightbulb className="w-4 h-4" />
        <span>{label}</span>
        {open ? <ChevronUp className="w-4 h-4 ml-auto" /> : <ChevronDown className="w-4 h-4 ml-auto" />}
      </button>
      {open && (
        <div className="px-4 pb-4 animate-fade-in">
          <CodeBlock code={prompt} language="prompt" />
        </div>
      )}
    </div>
  );
};

export default HintButton;
