import { Lang, t } from "@/data/translations";
import { ArrowLeft, ArrowRight, Info } from "lucide-react";

interface Props {
  lang: Lang;
  onNext: () => void;
  onPrev: () => void;
}

const TttPage3Logic = ({ lang, onNext, onPrev }: Props) => {
  const parts = [
    t("tttJsPart1", lang),
    t("tttJsPart2", lang),
    t("tttJsPart3", lang),
    t("tttJsPart4", lang),
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold text-foreground">{t("tttJsTitle", lang)}</h2>
        <p className="text-muted-foreground">{t("tttJsDesc", lang)}</p>
      </div>

      <div className="lesson-card space-y-6">
        <div className="space-y-2">
          {parts.map((part, i) => (
            <div key={i} className="flex items-start gap-3 bg-secondary p-3 rounded-xl">
              <span className="text-xs font-bold text-primary bg-primary/10 rounded-lg px-2 py-1 flex-shrink-0 mt-0.5">{i + 1}</span>
              <p className="text-sm text-foreground">{part}</p>
            </div>
          ))}
        </div>

        <div>
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Key Functions</p>
          <div className="space-y-1.5">
            {["checkWinner()", "handleClick(i)", "resetGame()"].map((fn) => (
              <div key={fn} className="code-block py-2 px-4">
                <span>{fn}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="tip-box flex gap-2 items-start">
          <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
          <span>Functions are sets of instructions the computer follows when something happens — like a click!</span>
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

export default TttPage3Logic;
