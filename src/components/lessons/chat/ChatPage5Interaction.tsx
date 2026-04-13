import { t, Lang } from "@/data/translations";
import { ArrowLeft, ArrowRight, Info } from "lucide-react";

interface Props {
  lang: Lang;
  onNext: () => void;
  onPrev: () => void;
}

const ChatPage5Interaction = ({ lang, onNext, onPrev }: Props) => {
  const how = [
    { emoji: "📝", text: t("chatJsPart1", lang) },
    { emoji: "📨", text: t("chatJsPart2", lang) },
    { emoji: "⌨️", text: t("chatJsPart3", lang) },
  ];

  const personalize = [
    t("chatPersonalize1", lang),
    t("chatPersonalize2", lang),
    t("chatPersonalize3", lang),
    t("chatPersonalize4", lang),
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold text-foreground">{t("chatJsTitle", lang)}</h2>
        <p className="text-muted-foreground">{t("chatJsDesc", lang)}</p>
      </div>

      <div className="lesson-card space-y-6">
        <div>
          <h3 className="text-base font-semibold text-foreground mb-3">
            {lang === "en" ? "How it works under the hood:" : "내부에서 어떻게 작동하나요:"}
          </h3>
          <div className="space-y-2">
            {how.map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-secondary p-3 rounded-xl">
                <span className="text-lg">{item.emoji}</span>
                <p className="text-sm text-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-base font-semibold text-foreground mb-1">{t("chatPersonalizeTitle", lang)}</h3>
          <p className="text-sm text-muted-foreground mb-3">{t("chatPersonalizeDesc", lang)}</p>
          <div className="space-y-2">
            {personalize.map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-secondary p-3 rounded-xl">
                <span className="text-xs font-bold text-primary bg-primary/10 rounded-lg px-2 py-1 flex-shrink-0 mt-0.5">{i + 1}</span>
                <p className="text-sm text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="tip-box flex gap-2 items-start">
          <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
          <span className="text-sm">
            {lang === "en"
              ? "In Vibe Coding, AI handles the complex logic. Your job is to describe what you want and personalize the result!"
              : "바이브 코딩에서는 AI가 복잡한 로직을 처리합니다. 여러분의 역할은 원하는 것을 설명하고 결과를 개인화하는 것입니다!"}
          </span>
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

export default ChatPage5Interaction;
