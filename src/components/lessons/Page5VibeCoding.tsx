import { Lang, t } from "@/data/translations";
import { ArrowLeft, ArrowRight, Copy, Terminal, User } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import CodeBlock from "@/components/CodeBlock";

interface Props {
  lang: Lang;
  onNext: () => void;
  onPrev: () => void;
}

const Page5VibeCoding = ({ lang, onNext, onPrev }: Props) => {
  const steps = [
    t("vibeStep1", lang),
    t("vibeStep2", lang),
    t("vibeStep3", lang),
    t("vibeStep4", lang),
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-2 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground flex items-center justify-center gap-4">
          <User className="w-10 h-10 md:w-12 md:h-12 text-[#ff8c00] animate-bounce" />
          {t("vibeIntroTitle", lang)}
        </h1>
        <p className="text-muted-foreground">{t("vibeIntroDesc", lang)}</p>
      </div>

      <div className="lesson-card space-y-6">
        <div>
          <h3 className="text-base font-semibold text-foreground mb-3">How it works:</h3>
          <div className="space-y-2">
            {steps.map((step, i) => (
              <div key={i} className="flex items-start gap-3 bg-secondary p-3 rounded-xl hover:bg-secondary/80 transition-colors">
                <span className="text-xs font-bold text-primary bg-primary/10 rounded-lg px-2 py-1 flex-shrink-0 mt-0.5">{i + 1}</span>
                <p className="text-sm text-foreground">{step}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <CodeBlock code={t("promptText", lang)} language="prompt" lang={lang} />
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

export default Page5VibeCoding;
