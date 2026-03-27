import { t, Lang } from "@/data/translations";
import CodeBlock from "@/components/CodeBlock";

interface Props {
  lang: Lang;
  onNext: () => void;
  onPrev: () => void;
}

const jsCode = `const input = document.getElementById('msgInput');
const sendBtn = document.getElementById('sendBtn');
const messages = document.getElementById('messages');

function sendMessage() {
  const text = input.value.trim();
  if (!text) return;

  const msg = document.createElement('div');
  msg.className = 'message sent';
  msg.textContent = text;
  messages.appendChild(msg);

  input.value = '';
  messages.scrollTop = messages.scrollHeight;
}

sendBtn.addEventListener('click', sendMessage);
input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') sendMessage();
});`;

const ChatPage5Interaction = ({ lang, onNext, onPrev }: Props) => (
  <div className="space-y-6">
    <div className="text-center mb-6">
      <h1 className="text-3xl font-bold mb-2">⚡ {t("chatJsTitle", lang)}</h1>
      <p className="text-muted-foreground">{t("chatJsDesc", lang)}</p>
    </div>

    <div className="lesson-card">
      <CodeBlock code={jsCode} language="javascript" />
    </div>

    <div className="lesson-card">
      <h2 className="text-lg font-semibold mb-3 text-primary">📖 {lang === "en" ? "How it works" : "어떻게 작동하나요"}</h2>
      <ul className="space-y-2 text-foreground/80">
        <li>📝 {t("chatJsPart1", lang)}</li>
        <li>📨 {t("chatJsPart2", lang)}</li>
        <li>⌨️ {t("chatJsPart3", lang)}</li>
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

export default ChatPage5Interaction;
