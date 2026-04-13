import { Lang, t } from "@/data/translations";
import { ArrowLeft, ArrowRight, Info } from "lucide-react";
import CodeBlock from "@/components/CodeBlock";

interface Props {
  lang: Lang;
  onNext: () => void;
  onPrev: () => void;
}

const TttPage4Personalize = ({ lang, onNext, onPrev }: Props) => {
  const items = [
    t("tttPersonalize1", lang),
    t("tttPersonalize2", lang),
    t("tttPersonalize3", lang),
    t("tttPersonalize4", lang),
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold text-foreground">{t("tttPersonalizeTitle", lang)}</h2>
        <p className="text-muted-foreground">{t("tttPersonalizeDesc", lang)}</p>
      </div>

      <div className="lesson-card space-y-6">
        <div className="space-y-2">
          {items.map((item, i) => (
            <div key={i} className="flex items-start gap-3 bg-secondary p-3 rounded-xl">
              <span className="text-xs font-bold text-primary bg-primary/10 rounded-lg px-2 py-1 flex-shrink-0 mt-0.5">{i + 1}</span>
              <p className="text-sm text-foreground">{item}</p>
            </div>
          ))}
        </div>

        <div>
          <CodeBlock code={t("tttHintPrompt", lang)} language="prompt" lang={lang} />
        </div>

        <div className="tip-box flex gap-2 items-start">
          <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
          <span><strong>{t("tttUpgradeTip", lang)}</strong> — {t("tttUpgradeTipDesc", lang)}</span>
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

export default TttPage4Personalize;
