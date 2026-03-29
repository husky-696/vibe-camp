import { t, Lang } from "@/data/translations";
import { BookOpen, User, MessageCircle, Gamepad2 } from "lucide-react";

interface Props {
  lang: Lang;
  onSelectLesson: (lesson: number) => void;
}

const LessonSelect = ({ lang, onSelectLesson }: Props) => {
  const lessons = [
    {
      icon: BookOpen,
      title: t("lesson0Title", lang),
      desc: t("lesson0Desc", lang),
      color: "text-primary",
      bg: "bg-primary/10",
    },
    {
      icon: User,
      title: t("lesson1Title", lang),
      desc: t("lesson1Desc", lang),
      color: "text-accent-foreground",
      bg: "bg-accent/30",
    },
    {
      icon: MessageCircle,
      title: t("lesson2Title", lang),
      desc: t("lesson2Desc", lang),
      color: "text-secondary-foreground",
      bg: "bg-secondary/30",
    },
    {
      icon: Gamepad2,
      title: t("lesson3Title", lang),
      desc: t("lesson3Desc", lang),
      color: "text-primary",
      bg: "bg-primary/10",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
          ✨ {t("title", lang)}
        </h1>
        <p className="text-lg text-muted-foreground">{t("chooseLessonSubtitle", lang)}</p>
      </div>

      <h2 className="text-2xl font-bold text-center">{t("chooseLesson", lang)}</h2>

      <div className="grid gap-6">
        {lessons.map((lesson, i) => {
          const Icon = lesson.icon;
          return (
            <div
              key={i}
              className="lesson-card hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              onClick={() => onSelectLesson(i + 1)}
            >
              <div className="flex items-start gap-5">
                <div className={`w-14 h-14 rounded-2xl ${lesson.bg} flex items-center justify-center flex-shrink-0`}>
                  <Icon className={`w-7 h-7 ${lesson.color}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{lesson.title}</h3>
                  <p className="text-muted-foreground mb-4">{lesson.desc}</p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectLesson(i + 1);
                    }}
                    className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full font-semibold shadow-md hover:shadow-lg transition-all hover:scale-105"
                  >
                    {t("startLesson", lang)}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LessonSelect;
