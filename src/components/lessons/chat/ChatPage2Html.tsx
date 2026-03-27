import { t, Lang } from "@/data/translations";
import CodeBlock from "@/components/CodeBlock";

interface Props {
  lang: Lang;
  onNext: () => void;
  onPrev: () => void;
}

const chatHtml = `<!DOCTYPE html>
<html>
  <head>
    <title>My Chat App</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <div class="chat-container">
      <div class="chat-header">Chat App</div>
      <div class="messages" id="messages">
        <!-- Messages appear here -->
      </div>
      <div class="input-area">
        <input type="text" id="msgInput" 
               placeholder="Type a message...">
        <button id="sendBtn">Send</button>
      </div>
    </div>
    <script src="script.js"></script>
  </body>
</html>`;

const ChatPage2Html = ({ lang, onNext, onPrev }: Props) => (
  <div className="space-y-6">
    <div className="text-center mb-6">
      <h1 className="text-3xl font-bold mb-2">🏗️ {t("chatHtmlTitle", lang)}</h1>
      <p className="text-muted-foreground">{t("chatHtmlDesc", lang)}</p>
    </div>

    <div className="lesson-card">
      <CodeBlock code={chatHtml} language="html" />
    </div>

    <div className="lesson-card">
      <h2 className="text-lg font-semibold mb-3 text-primary">📖 {lang === "en" ? "Key Parts" : "핵심 부분"}</h2>
      <ul className="space-y-2 text-foreground/80">
        <li className="flex items-start gap-2">
          <code className="bg-code px-2 py-0.5 rounded text-sm font-mono flex-shrink-0">chat-container</code>
          <span>{t("chatHtmlPart1", lang)}</span>
        </li>
        <li className="flex items-start gap-2">
          <code className="bg-code px-2 py-0.5 rounded text-sm font-mono flex-shrink-0">messages</code>
          <span>{t("chatHtmlPart2", lang)}</span>
        </li>
        <li className="flex items-start gap-2">
          <code className="bg-code px-2 py-0.5 rounded text-sm font-mono flex-shrink-0">input-area</code>
          <span>{t("chatHtmlPart3", lang)}</span>
        </li>
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

export default ChatPage2Html;
