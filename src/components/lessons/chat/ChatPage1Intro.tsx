import { Lang, t } from "@/data/translations";
import { ArrowRight, MessageSquare, Zap, Sparkles, Code2 } from "lucide-react";

interface Props {
  lang: Lang;
  onNext: () => void;
}

const ChatPage1Intro = ({ lang, onNext }: Props) => {
  const goals = [
    { icon: MessageSquare, text: "Build a Real AI Chat Interface" },
    { icon: Code2, text: "Learn JavaScript Interactions" },
    { icon: Zap, text: "Connect to OpenRouter API" },
  ];

  return (
    <div className="space-y-12">
      <div className="space-y-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground uppercase flex items-center justify-center gap-4">
          <MessageSquare className="w-12 h-12 text-vibe-orange animate-bounce" />
          {t("lesson4Title", lang)}
        </h1>
        <p className="text-xl text-muted-foreground max-w-lg mx-auto leading-relaxed">
          {t("lesson4Desc", lang)}
        </p>
      </div>

      <div className="lesson-card space-y-8">
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-foreground uppercase tracking-tight flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-vibe-orange" />
            Project Goals
          </h3>
          <div className="grid gap-3">
            {goals.map((goal, i) => {
              const Icon = goal.icon;
              return (
                <div key={i} className="flex items-center gap-4 bg-secondary p-4 rounded-2xl border border-border group hover:border-vibe-orange/20 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-vibe-orange/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-vibe-orange" />
                  </div>
                  <span className="font-medium text-foreground/90">{goal.text}</span>
                </div>
              );
            })}
          </div>
        </div>

        <button
          onClick={onNext}
          className="w-full bg-vibe-orange hover:bg-vibe-orange/90 text-foreground font-bold py-5 px-8 rounded-2xl transition-all shadow-xl shadow-vibe-orange/20 flex items-center justify-center gap-3 group text-lg"
        >
          {t("startLesson", lang)}
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default ChatPage1Intro;
