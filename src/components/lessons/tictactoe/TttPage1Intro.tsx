import { t, Lang } from "@/data/translations";
import { Gamepad2 } from "lucide-react";

interface Props {
  lang: Lang;
  onNext: () => void;
}

const TttPage1Intro = ({ lang, onNext }: Props) => (
  <div className="space-y-6">
    <div className="text-center mb-6">
      <h1 className="text-3xl font-bold mb-2">🎮 {t("tttTitle", lang)}</h1>
      <p className="text-muted-foreground">{t("tttSubtitle", lang)}</p>
    </div>

    <div className="lesson-card">
      <h2 className="text-xl font-semibold mb-3 text-primary">{t("tttWhatIs", lang)}</h2>
      <p className="text-foreground/80 leading-relaxed">{t("tttWhatIsDesc", lang)}</p>
    </div>

    <div className="lesson-card">
      <h2 className="text-xl font-semibold mb-4 text-primary">{t("tttWhatBuild", lang)}</h2>
      <ul className="space-y-2 text-foreground/80">
        <li>🎯 {t("tttGoal1", lang)}</li>
        <li>👥 {t("tttGoal2", lang)}</li>
        <li>📊 {t("tttGoal3", lang)}</li>
        <li>✨ {t("tttGoal4", lang)}</li>
        <li>⏸️ {t("tttGoal5", lang)}</li>
      </ul>
    </div>

    <div className="flex justify-center pt-4">
      <button onClick={onNext} className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105">
        {t("startLesson", lang)}
      </button>
    </div>
  </div>
);

export default TttPage1Intro;
