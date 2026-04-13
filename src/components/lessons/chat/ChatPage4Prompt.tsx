import { t, Lang } from "@/data/translations";
import { ArrowLeft, ArrowRight, Copy, Terminal, Info } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import CodeBlock from "@/components/CodeBlock";

interface Props {
  lang: Lang;
  onNext: () => void;
  onPrev: () => void;
}

const ChatPage4Prompt = ({ lang, onNext, onPrev }: Props) => {
  const steps = [
    t("vibeStep1", lang),
    t("vibeStep2", lang),
    t("vibeStep3", lang),
    t("vibeStep4", lang),
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold text-foreground">{t("chatPromptTitle", lang)}</h2>
        <p className="text-muted-foreground">{t("chatPromptDesc", lang)}</p>
      </div>

      <div className="lesson-card space-y-6">
        <div>
          <CodeBlock code={t("chatPromptText", lang)} language="prompt" lang={lang} />
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground mb-2">
            {lang === "en" ? "Steps:" : "단계:"}
          </h3>
          <div className="space-y-2">
            {steps.map((step, i) => (
              <div key={i} className="flex items-start gap-3 bg-secondary p-3 rounded-xl hover:bg-secondary/80 transition-colors">
                <span className="text-xs font-bold text-primary bg-primary/10 rounded-lg px-2 py-1 flex-shrink-0 mt-0.5">{i + 1}</span>
                <p className="text-sm text-foreground">{step}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="tip-box flex gap-2 items-start">
          <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
          <span className="text-sm">
            {lang === "en"
              ? "Replace YOUR_API_KEY in the prompt with the key you copied from OpenRouter!"
              : "프롬프트의 YOUR_API_KEY를 OpenRouter에서 복사한 키로 교체하세요!"}
          </span>
        </div>

        <div className="flex gap-3">
          <button onClick={onPrev} className="btn-secondary flex-1">
            <ArrowLeft className="w-4 h-4" />
            {t("prev", lang)}
          </button>
          <button onClick={onNext} className="btn-primary flex-[2]">
            {t("next", lang)}
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage4Prompt;
