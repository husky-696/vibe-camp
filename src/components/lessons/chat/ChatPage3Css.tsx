import { t, Lang } from "@/data/translations";
import CodeBlock from "@/components/CodeBlock";

interface Props {
  lang: Lang;
  onNext: () => void;
  onPrev: () => void;
}

const chatCss = `.chat-container {
  max-width: 500px;
  margin: 40px auto;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
}

.messages {
  height: 400px;
  overflow-y: auto;
  padding: 20px;
  background: #f9f9f9;
}

.message {
  padding: 10px 16px;
  border-radius: 18px;
  margin-bottom: 8px;
  max-width: 75%;
}

.message.sent {
  background: #6c5ce7;
  color: white;
  margin-left: auto;
}

.message.received {
  background: #e0e0e0;
  color: #333;
}`;

const ChatPage3Css = ({ lang, onNext, onPrev }: Props) => (
  <div className="space-y-6">
    <div className="text-center mb-6">
      <h1 className="text-3xl font-bold mb-2">🎨 {t("chatCssTitle", lang)}</h1>
      <p className="text-muted-foreground">{t("chatCssDesc", lang)}</p>
    </div>

    <div className="lesson-card">
      <CodeBlock code={chatCss} language="css" />
    </div>

    <div className="lesson-card">
      <h2 className="text-lg font-semibold mb-3 text-primary">📖 {lang === "en" ? "What does it do?" : "무슨 역할을 하나요?"}</h2>
      <ul className="space-y-2 text-foreground/80">
        <li>💬 {t("chatCssPart1", lang)}</li>
        <li>➡️ {t("chatCssPart2", lang)}</li>
        <li>⬅️ {t("chatCssPart3", lang)}</li>
      </ul>
    </div>

    <div className="flex justify-between pt-4">
      <button onClick={onPrev} className="text-muted-foreground hover:text-foreground transition-colors font-medium">{t("prev", lang)}</button>
      <button onClick={onNext} className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full font-semibold shadow-md hover:shadow-lg transition-all hover:scale-105">
        {t("next", lang)}
      </button>
    </div>
  </div>
);

export default ChatPage3Css;
