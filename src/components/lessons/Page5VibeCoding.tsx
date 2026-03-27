import { t, Lang } from "@/data/translations";

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
      <div className="bg-muted/70 rounded-xl p-4 border-l-4 border-primary italic text-foreground/80 leading-relaxed">
        "{t("promptText", lang)}"
      </div>
    </div>

    <div className="lesson-card">
      <h2 className="text-lg font-semibold mb-3 text-primary">
        {lang === "en" ? "Important Rules" : "중요한 규칙"}
      </h2>
      <ul className="space-y-3 text-foreground/80">
        <li className="text-base">{t("vibeRule1", lang)}</li>
        <li className="text-base">{t("vibeRule2", lang)}</li>
        <li className="text-base">{t("vibeRule3", lang)}</li>
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

export default Page5VibeCoding;
