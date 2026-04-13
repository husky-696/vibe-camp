import { Lang, t } from "@/data/translations";
import { ArrowLeft, ArrowRight, Home, Trophy, PartyPopper } from "lucide-react";
import confetti from "canvas-confetti";
import { useEffect } from "react";

interface Props {
  lang: Lang;
  onPrev: () => void;
  onNextLesson: () => void;
}

const BlogPage5Congrats = ({ lang, onPrev, onNextLesson }: Props) => {
  useEffect(() => {
    confetti({ particleCount: 150, spread: 80, origin: { y: 0.6 }, colors: ['#ff8c00', '#4da6ff', '#a855f7'] });
  }, []);

  return (
    <div className="space-y-8">
      <div className="space-y-3 text-center">
        <div className="inline-flex p-4 bg-primary/10 rounded-full mb-2 animate-bounce-slow">
          <Trophy className="w-10 h-10 text-primary" />
        </div>
        <h2 className="text-3xl font-bold text-foreground">{t("blogCongrats", lang)}</h2>
        <p className="text-muted-foreground">{t("blogCongratsDesc", lang)}</p>
      </div>

      <div className="lesson-card space-y-6">
        <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 text-center mt-6">
          <PartyPopper className="w-8 h-8 text-green-500 mx-auto mb-2" />
          <p className="font-bold text-green-600 dark:text-green-400 mb-1">Full-Stack Vibe Coder!</p>
          <p className="text-sm text-green-700/80 dark:text-green-300/80">You connected a frontend UI to a backend database using an API.</p>
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

export default BlogPage5Congrats;
