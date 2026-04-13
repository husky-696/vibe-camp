import { Lang, t } from "@/data/translations";
import { ArrowLeft, ArrowRight, Globe } from "lucide-react";
import { useEffect } from "react";
import confetti from "canvas-confetti";

interface Props {
  lang: Lang;
  onPrev: () => void;
  onNextLesson: () => void;
}

const Page7Deploy = ({ lang, onPrev, onNextLesson }: Props) => {
  useEffect(() => {
    confetti({ particleCount: 150, spread: 80, origin: { y: 0.6 } });
  }, []);

  return (
    <div className="space-y-8">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold text-foreground">{t("deployTitle", lang)}</h2>
        <p className="text-muted-foreground">{t("deployDesc", lang)}</p>
      </div>

      <div className="lesson-card space-y-6">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary font-bold">1</span>
            <p className="text-foreground">{t("step1", lang)}</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary font-bold">2</span>
            <p className="text-foreground">{t("step2", lang)}</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary font-bold">3</span>
            <p className="text-foreground">{t("step3", lang)}</p>
          </div>
        </div>

        <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 text-center mt-6">
          <p className="font-bold text-green-600 dark:text-green-400 mb-1">{t("congrats", lang)}</p>
          <p className="text-sm text-green-700/80 dark:text-green-300/80">{t("congratsDesc", lang)}</p>
        </div>

        <div className="flex gap-3 mt-6">
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

export default Page7Deploy;
