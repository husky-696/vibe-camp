import { t, Lang } from "@/data/translations";
import CodeBlock from "@/components/CodeBlock";

interface Props {
  lang: Lang;
  onNext: () => void;
  onPrev: () => void;
}

const jsCode = `// Step 1: Find the HTML elements we need
const input = document.getElementById('msgInput');   // The text input field
const sendBtn = document.getElementById('sendBtn');  // The send button
const messages = document.getElementById('messages'); // The message container

// Step 2: Create a function that sends a message
function sendMessage() {
  const text = input.value.trim();  // Get the typed text (remove extra spaces)
  if (!text) return;                // If empty, do nothing

  // Step 3: Create a new message bubble
  const msg = document.createElement('div');  // Make a new <div> element
  msg.className = 'message sent';             // Style it as a "sent" message
  msg.textContent = text;                     // Put the text inside it
  messages.appendChild(msg);                  // Add it to the message area

  // Step 4: Clean up
  input.value = '';                           // Clear the input field
  messages.scrollTop = messages.scrollHeight; // Scroll to the newest message
}

// Step 5: Listen for user actions
sendBtn.addEventListener('click', sendMessage);    // Click the send button
input.addEventListener('keypress', (e) => {        // Or press Enter
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

    <div className="flex justify-between pt-4">
      <button onClick={onPrev} className="text-muted-foreground hover:text-foreground transition-colors font-medium">{t("prev", lang)}</button>
      <button onClick={onNext} className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full font-semibold shadow-md hover:shadow-lg transition-all hover:scale-105">
        {t("next", lang)}
      </button>
    </div>
  </div>
);

export default ChatPage5Interaction;
