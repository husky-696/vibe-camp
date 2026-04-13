import { t, Lang } from "@/data/translations";
import { BookOpen, User, MessageCircle, Gamepad2, PenTool } from "lucide-react";
import Logo from "@/components/Logo";

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
      color: "text-[#4da6ff]",
      bg: "bg-[#4da6ff]/10",
    },
    {
      icon: User,
      title: t("lesson1Title", lang),
      desc: t("lesson1Desc", lang),
      color: "text-[#ff8c00]",
      bg: "bg-[#ff8c00]/10",
    },
    {
      icon: Gamepad2,
      title: t("lesson2Title", lang),
      desc: t("lesson2Desc", lang),
      color: "text-[#a855f7]",
      bg: "bg-[#a855f7]/10",
    },
    {
      icon: PenTool,
      title: t("lesson3Title", lang),
      desc: t("lesson3Desc", lang),
      color: "text-[#4da6ff]",
      bg: "bg-[#4da6ff]/10",
    },
    {
      icon: MessageCircle,
      title: t("lesson4Title", lang),
      desc: t("lesson4Desc", lang),
      color: "text-[#ff8c00]",
      bg: "bg-[#ff8c00]/10",
    },
  ];

  return (
    <div className="space-y-8 py-2 md:py-4">
      <div className="flex flex-col items-center text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-foreground uppercase">
          Vibe<span className="text-muted-foreground">Camp</span>
        </h1>
        <p className="text-base md:text-lg text-muted-foreground font-medium max-w-md">
          {t("chooseLessonSubtitle", lang)}
        </p>
      </div>

      <div className="flex flex-col gap-3 max-w-2xl mx-auto">
        {lessons.map((lesson, i) => {
          const Icon = lesson.icon;
          return (
            <div
              key={i}
              className="lesson-card group cursor-pointer hover:bg-white/[0.02] p-4 sm:p-5"
              onClick={() => onSelectLesson(i + 1)}
            >
              <div className="flex items-center gap-4 sm:gap-6 w-full h-full">
                <div className="hidden sm:flex text-3xl font-black text-muted-foreground/20 group-hover:text-muted-foreground/40 transition-colors w-8 justify-center">
                  {i}
                </div>
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${lesson.bg} flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                  <Icon className={`w-6 h-6 sm:w-7 sm:h-7 ${lesson.color}`} />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="text-lg font-bold group-hover:text-foreground transition-colors">{lesson.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-0.5">{lesson.desc}</p>
                </div>
                <div className="hidden sm:block opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
                  <span className="text-xs font-bold tracking-widest uppercase text-muted-foreground bg-secondary px-3 py-1.5 rounded-full">
                    Start
                  </span>
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
