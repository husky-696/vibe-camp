import { t, Lang } from "@/data/translations";
import { Code, Sparkles, Globe } from "lucide-react";

interface Props {
  lang: Lang;
  onNext: () => void;
}

const Page1Intro = ({ lang, onNext }: Props) => (
  <div className="space-y-6">
    <div className="text-center mb-8">
      <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
        ✨ {t("title", lang)}
      </h1>
      <p className="text-lg text-muted-foreground">{t("subtitle", lang)}</p>
    </div>

    <div className="lesson-card">
      <h2 className="text-xl font-semibold mb-3 text-primary">{t("whatIsVibe", lang)}</h2>
      <p className="text-foreground/80 leading-relaxed">{t("vibeDesc", lang)}</p>
    </div>

    <div className="lesson-card">
      <h2 className="text-xl font-semibold mb-4 text-primary">{t("whatWeUse", lang)}</h2>
      <div className="grid grid-cols-3 gap-4">
        {[
          { icon: Code, label: "HTML", color: "text-orange-500" },
          { icon: Sparkles, label: "CSS", color: "text-blue-500" },
          { icon: Globe, label: "AI IDE (Windsurf)", color: "text-green-500" },
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
        <li>📚 {t("goal1", lang)}</li>
        <li>🤖 {t("goal2", lang)}</li>
        <li>🚀 {t("goal3", lang)}</li>
      </ul>
    </div>

    <div className="flex justify-center pt-4">
      <button onClick={onNext} className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105">
        {t("startLesson", lang)}
      </button>
    </div>
  </div>
);

export default Page1Intro;
