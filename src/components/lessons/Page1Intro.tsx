import { Lang, t } from "@/data/translations";
import { ArrowRight, Sparkles, Code2, Globe, BookOpen } from "lucide-react";

interface Props {
  lang: Lang;
  onNext: () => void;
}

const Page1Intro = ({ lang, onNext }: Props) => {
  const goals = [
    { icon: Code2, text: t("goal1", lang) },
    { icon: Sparkles, text: t("goal2", lang) },
    { icon: Globe, text: t("goal3", lang) },
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-3 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground flex items-center justify-center gap-4">
          <BookOpen className="w-10 h-10 md:w-12 md:h-12 text-[#4da6ff] animate-bounce" />
          {t("title", lang)}
        </h1>
        <p className="text-lg text-muted-foreground">{t("subtitle", lang)}</p>
      </div>

      <div className="lesson-card space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">{t("whatIsVibe", lang)}</h3>
          <p className="text-muted-foreground leading-relaxed">{t("vibeDesc", lang)}</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-3">{t("goalTitle", lang)}</h3>
          <div className="space-y-2">
            {goals.map((goal, i) => {
              const Icon = goal.icon;
              return (
                <div key={i} className="flex items-center gap-3 bg-secondary p-3 rounded-xl">
                  <Icon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">{goal.text}</span>
                </div>
              );
            })}
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

export default Page1Intro;
