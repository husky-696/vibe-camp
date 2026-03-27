import { t, Lang } from "@/data/translations";
import { MessageCircle, Sparkles, Globe } from "lucide-react";

interface Props {
  lang: Lang;
  onNext: () => void;
}

const ChatPage1Intro = ({ lang, onNext }: Props) => (
  <div className="space-y-6">
    <div className="text-center mb-8">
      <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
        💬 {t("chatTitle", lang)}
      </h1>
      <p className="text-lg text-muted-foreground">{t("chatSubtitle", lang)}</p>
    </div>

    <div className="lesson-card">
      <h2 className="text-xl font-semibold mb-3 text-primary">{t("chatWhatIs", lang)}</h2>
      <p className="text-foreground/80 leading-relaxed">{t("chatWhatIsDesc", lang)}</p>
    </div>

    <div className="lesson-card">
      <h2 className="text-xl font-semibold mb-4 text-primary">{t("chatWhatBuild", lang)}</h2>
      <div className="grid grid-cols-3 gap-4">
        {[
          { icon: MessageCircle, label: lang === "en" ? "Chat UI" : "채팅 UI", color: "text-primary" },
          { icon: Sparkles, label: lang === "en" ? "Styling" : "스타일링", color: "text-secondary-foreground" },
          { icon: Globe, label: lang === "en" ? "Deploy" : "배포", color: "text-accent-foreground" },
        ].map(({ icon: Icon, label, color }) => (
          <div key={label} className="flex flex-col items-center gap-2 p-3 rounded-xl bg-muted/50">
            <Icon className={`w-8 h-8 ${color}`} />
            <span className="text-sm font-medium">{label}</span>
          </div>
        ))}
      </div>
    </div>

    <div className="lesson-card">
      <h2 className="text-xl font-semibold mb-3 text-primary">{t("goalTitle", lang)}</h2>
      <ul className="space-y-2 text-foreground/80">
        <li>💬 {t("chatGoal1", lang)}</li>
        <li>🎨 {t("chatGoal2", lang)}</li>
        <li>🚀 {t("chatGoal3", lang)}</li>
      </ul>
    </div>

    <div className="flex justify-center pt-4">
      <button onClick={onNext} className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105">
        {t("startLesson", lang)}
      </button>
    </div>
  </div>
);

export default ChatPage1Intro;
