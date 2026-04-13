import { Lang, t } from "@/data/translations";
import { ArrowLeft, ArrowRight, Home, Globe, Trophy } from "lucide-react";
import confetti from "canvas-confetti";
import { useEffect } from "react";

interface Props {
  lang: Lang;
  onPrev: () => void;
  onNextLesson: () => void;
}

const TttPage5Deploy = ({ lang, onPrev, onNextLesson }: Props) => {
  useEffect(() => {
    confetti({ particleCount: 100, spread: 60, origin: { y: 0.6 }, colors: ['#ff8c00', '#4da6ff', '#a855f7'] });
  }, []);

  const steps = [t("step1", lang), t("step2", lang), t("step3", lang)];

  return (
    <div className="space-y-8">
      <div className="space-y-3 text-center">
        <div className="inline-flex p-4 bg-primary/10 rounded-full mb-2 animate-bounce-slow">
          <Trophy className="w-10 h-10 text-primary" />
        </div>
        <h2 className="text-3xl font-bold text-foreground">{t("tttCongrats", lang)}</h2>
        <p className="text-muted-foreground">{t("tttCongratsDesc", lang)}</p>
      </div>

      <div className="lesson-card space-y-6">
        <div>
          <h3 className="text-base font-semibold text-foreground mb-3">Deploy to Netlify</h3>
          <div className="space-y-2">
            {steps.map((step, i) => (
              <div key={i} className="flex items-start gap-3 bg-secondary p-3 rounded-xl hover:bg-secondary/80 transition-colors">
                <span className="text-xs font-bold text-primary bg-primary/10 rounded-lg px-2 py-1 flex-shrink-0 mt-0.5">{i + 1}</span>
                <p className="text-sm text-foreground">{step}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3 bg-green-500/10 border border-green-500/20 p-4 rounded-xl">
          <Globe className="w-5 h-5 text-green-600 flex-shrink-0" />
          <p className="text-sm text-green-700/80 font-medium">Your game is now playable by anyone with the link!</p>
        </div>

        <div className="flex gap-3">
          <button onClick={onPrev} className="btn-secondary flex-1">
            <ArrowLeft className="w-4 h-4" />
            {t("prev", lang)}
          </button>
          <button onClick={onNextLesson} className="btn-primary flex-[2]">
            {t("nextLesson", lang)}
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TttPage5Deploy;
