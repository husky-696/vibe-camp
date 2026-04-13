import { Lang, t } from "@/data/translations";
import { ArrowLeft, ArrowRight, Copy, Terminal } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import CodeBlock from "@/components/CodeBlock";

interface Props {
  lang: Lang;
  onNext: () => void;
  onPrev: () => void;
}

const TttPage2Prompt = ({ lang, onNext, onPrev }: Props) => {
  return (
    <div className="space-y-8">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold text-foreground">{t("tttPromptTitle", lang)}</h2>
        <p className="text-muted-foreground">{t("tttPromptDesc", lang)}</p>
      </div>

      <div className="lesson-card space-y-6">
        <div>
          <CodeBlock code={t("tttPromptText", lang)} language="prompt" lang={lang} />
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

export default TttPage2Prompt;
