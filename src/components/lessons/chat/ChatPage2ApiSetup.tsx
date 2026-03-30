import { t, Lang } from "@/data/translations";
import CodeBlock from "@/components/CodeBlock";

interface Props {
  lang: Lang;
  onNext: () => void;
  onPrev: () => void;
}

const ChatPage2ApiSetup = ({ lang, onNext, onPrev }: Props) => (
  <div className="space-y-6">
    <div className="text-center mb-6">
      <h1 className="text-3xl font-bold mb-2">🔑 {t("chatApiTitle", lang)}</h1>
      <p className="text-muted-foreground">{t("chatApiDesc", lang)}</p>
    </div>

    <div className="lesson-card">
      <h2 className="text-lg font-semibold mb-3 text-primary">{t("chatApiWhat", lang)}</h2>
      <p className="text-foreground/80 leading-relaxed">{t("chatApiWhatDesc", lang)}</p>
    </div>

    <div className="lesson-card">
      <h2 className="text-lg font-semibold mb-4 text-primary">
        {lang === "en" ? "Steps to get your free API key" : "무료 API 키 받는 방법"}
      </h2>
      <ol className="space-y-4 text-foreground/80">
        <li className="flex items-start gap-3">
          <span className="bg-primary/10 text-primary font-bold w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-sm">1</span>
          <span>{t("chatApiStep1", lang)}</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="bg-primary/10 text-primary font-bold w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-sm">2</span>
          <span>{t("chatApiStep2", lang)}</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="bg-primary/10 text-primary font-bold w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-sm">3</span>
          <span>{t("chatApiStep3", lang)}</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="bg-primary/10 text-primary font-bold w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-sm">4</span>
          <span>{t("chatApiStep4", lang)}</span>
        </li>
      </ol>
    </div>

    <div className="lesson-card">
      <h2 className="text-lg font-semibold mb-3 text-primary">
        {lang === "en" ? "Your API key looks like this:" : "API 키는 이렇게 생겼습니다:"}
      </h2>
      <CodeBlock code="sk-or-v1-xxxxxxxxxxxxxxxxxxxxxxxx" language="key" />
      <p className="text-sm text-muted-foreground mt-3">
        {lang === "en"
          ? "⚠️ Keep your API key secret! Don't share it publicly."
          : "⚠️ API 키를 비밀로 유지하세요! 공개적으로 공유하지 마세요."}
      </p>
    </div>

    <div className="tip-box">
      <h3 className="font-semibold mb-2">
        💡 {lang === "en" ? "Why OpenRouter?" : "왜 OpenRouter인가요?"}
      </h3>
      <p className="text-sm">
        {lang === "en"
          ? "OpenRouter gives you access to free AI models like DeepSeek and Gemma. No credit card needed — perfect for learning!"
          : "OpenRouter는 DeepSeek, Gemma 같은 무료 AI 모델에 접근할 수 있게 해줍니다. 신용카드 불필요 — 학습에 완벽합니다!"}
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

export default ChatPage2ApiSetup;
