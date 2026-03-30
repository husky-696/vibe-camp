import { t, Lang } from "@/data/translations";

interface Props {
  lang: Lang;
  onNext: () => void;
  onPrev: () => void;
}

const ChatPage5Interaction = ({ lang, onNext, onPrev }: Props) => (
  <div className="space-y-6">
    <div className="text-center mb-6">
      <h1 className="text-3xl font-bold mb-2">⚡ {t("chatJsTitle", lang)}</h1>
      <p className="text-muted-foreground">{t("chatJsDesc", lang)}</p>
    </div>

    <div className="lesson-card">
      <h2 className="text-lg font-semibold mb-4 text-primary">
        🧠 {lang === "en" ? "Quick Overview" : "간단한 개요"}
      </h2>
      <p className="text-foreground/80 mb-4">
        {lang === "en"
          ? "AI wrote all the JavaScript for you! Here's a simple breakdown of what's happening under the hood:"
          : "AI가 모든 JavaScript를 작성했습니다! 내부에서 무슨 일이 일어나는지 간단히 알아봅시다:"}
      </p>
      <ul className="space-y-3 text-foreground/80">
        <li className="flex items-start gap-3">
          <span className="text-xl">📝</span>
          <span>{t("chatJsPart1", lang)}</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-xl">📨</span>
          <span>{t("chatJsPart2", lang)}</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-xl">⌨️</span>
          <span>{t("chatJsPart3", lang)}</span>
        </li>
      </ul>
    </div>

    <div className="lesson-card">
      <h3 className="font-semibold mb-3 text-primary">✏️ {t("chatPersonalizeTitle", lang)}</h3>
      <p className="text-sm text-muted-foreground mb-3">{t("chatPersonalizeDesc", lang)}</p>
      <ul className="space-y-2 text-foreground/80 text-sm">
        <li>🎨 {t("chatPersonalize1", lang)}</li>
        <li>📝 {t("chatPersonalize2", lang)}</li>
        <li>✨ {t("chatPersonalize3", lang)}</li>
        <li>🤖 {t("chatPersonalize4", lang)}</li>
      </ul>
    </div>

    <div className="lesson-card bg-accent/10 border-accent/20">
      <p className="text-sm text-muted-foreground italic">
        💡 {lang === "en"
          ? "Remember: In vibe coding, AI handles the complex logic. Your job is to describe what you want and personalize the result!"
          : "기억하세요: 바이브 코딩에서는 AI가 복잡한 로직을 처리합니다. 여러분의 역할은 원하는 것을 설명하고 결과를 개인화하는 것입니다!"}
      </p>
    </div>

    <div className="flex justify-between pt-4">
      <button onClick={onPrev} className="text-muted-foreground hover:text-foreground transition-colors font-medium">{t("prev", lang)}</button>
      <button onClick={onNext} className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full font-semibold shadow-md hover:shadow-lg transition-all hover:scale-105">
        {t("next", lang)}
      </button>
    </div>
  </div>
);

export default ChatPage5Interaction;
