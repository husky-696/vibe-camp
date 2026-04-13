import { Lang, t } from "@/data/translations";
import { ArrowLeft, ArrowRight, Trophy } from "lucide-react";
import confetti from "canvas-confetti";
import { useEffect } from "react";

interface Props {
  lang: Lang;
  onPrev: () => void;
  onNextLesson: () => void;
}

const BasicsComplete = ({ lang, onPrev, onNextLesson }: Props) => {
  useEffect(() => {
    confetti({ particleCount: 120, spread: 70, origin: { y: 0.6 }, colors: ['#ff8c00', '#4da6ff', '#a855f7'] });
  }, []);

  return (
    <div className="space-y-8">
      <div className="space-y-3 text-center">
        <div className="inline-flex p-4 bg-primary/10 rounded-full mb-2 animate-bounce-slow">
          <Trophy className="w-10 h-10 text-primary" />
        </div>
        <h2 className="text-3xl font-bold text-foreground">{t("basicsCongrats", lang)}</h2>
        <p className="text-muted-foreground">{t("basicsCongratsDesc", lang)}</p>
      </div>

      <div className="lesson-card space-y-6">
        <div className="flex justify-center gap-3 py-4">
          <div className="text-center">
            <div className="w-14 h-14 rounded-xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mx-auto mb-1">
              <span className="font-bold text-orange-600 dark:text-orange-400">HTML</span>
            </div>
            <p className="text-xs text-muted-foreground">Structure</p>
          </div>
          <div className="text-center">
            <div className="w-14 h-14 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-1">
              <span className="font-bold text-blue-600 dark:text-blue-400">CSS</span>
            </div>
            <p className="text-xs text-muted-foreground">Styling</p>
          </div>
          <div className="text-center">
            <div className="w-14 h-14 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mx-auto mb-1">
              <span className="font-bold text-purple-600 dark:text-purple-400">JS</span>
            </div>
            <p className="text-xs text-muted-foreground">Logic</p>
          </div>
        </div>

        <p className="text-sm text-muted-foreground text-center leading-relaxed">
          Now that you know the basics, let's use AI to build complex websites in minutes!
        </p>

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

export default BasicsComplete;
