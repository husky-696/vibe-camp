import { t, Lang } from "@/data/translations";
import CodeBlock from "@/components/CodeBlock";

interface Props {
  lang: Lang;
  onNext: () => void;
  onPrev: () => void;
}

const Page5VibeCoding = ({ lang, onNext, onPrev }: Props) => (
  <div className="space-y-6">
    <div className="text-center mb-6">
      <h1 className="text-3xl font-bold mb-2">🤖 {t("vibeIntroTitle", lang)}</h1>
      <p className="text-muted-foreground">{t("vibeIntroDesc", lang)}</p>
    </div>

    <div className="lesson-card">
      <h2 className="text-lg font-semibold mb-3 text-primary">{t("promptLabel", lang)}</h2>
      <CodeBlock code={t("promptText", lang)} language="prompt" />
    </div>

    <div className="lesson-card">
      <h2 className="text-lg font-semibold mb-3 text-primary">
        {lang === "en" ? "Steps" : "단계"}
      </h2>
      <ol className="space-y-3 text-foreground/80">
        <li className="text-base">1️⃣ {t("vibeStep1", lang)}</li>
        <li className="text-base">2️⃣ {t("vibeStep2", lang)}</li>
        <li className="text-base">3️⃣ {t("vibeStep3", lang)}</li>
        <li className="text-base">4️⃣ {t("vibeStep4", lang)}</li>
      </ol>
    </div>

    <div className="flex justify-between pt-4">
      <button onClick={onPrev} className="text-muted-foreground hover:text-foreground transition-colors font-medium">{t("prev", lang)}</button>
      <button onClick={onNext} className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full font-semibold shadow-md hover:shadow-lg transition-all hover:scale-105">
        {t("next", lang)}
      </button>
    </div>
  </div>
);

export default Page5VibeCoding;
