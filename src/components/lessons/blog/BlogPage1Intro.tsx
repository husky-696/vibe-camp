import { t, Lang } from "@/data/translations";
import { ArrowRight, Database, PenTool } from "lucide-react";

interface Props {
  lang: Lang;
  onNext: () => void;
}

const BlogPage1Intro = ({ lang, onNext }: Props) => {
  const goals = [
    t("blogGoal1", lang),
    t("blogGoal2", lang),
    t("blogGoal3", lang),
    t("blogGoalJs", lang),
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-2 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground flex items-center justify-center gap-4">
          <PenTool className="w-10 h-10 md:w-12 md:h-12 text-[#4da6ff] animate-bounce" />
          {t("blogTitle", lang)}
        </h1>
        <p className="text-muted-foreground">{t("blogSubtitle", lang)}</p>
      </div>

      <div className="lesson-card space-y-6">
        <div>
          <h3 className="text-base font-semibold text-foreground mb-1">{t("blogWhatIs", lang)}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{t("blogWhatIsDesc", lang)}</p>
        </div>

        <div>
          <h3 className="text-base font-semibold text-foreground mb-3">What you'll build:</h3>
          <div className="space-y-2">
            {goals.map((goal, i) => (
              <div key={i} className="flex items-center gap-3 bg-secondary p-3 rounded-xl">
                <Database className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm text-foreground">{goal}</span>
              </div>
            ))}
          </div>
        </div>

        <button onClick={onNext} className="btn-primary w-full">
          {t("startLesson", lang)}
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default BlogPage1Intro;
