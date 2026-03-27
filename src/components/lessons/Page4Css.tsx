import { t, Lang } from "@/data/translations";

interface Props {
  lang: Lang;
  onNext: () => void;
  onPrev: () => void;
}

const cssCode = `body {
  background-color: #f0f0f0;
  color: #333;
  text-align: center;
  font-family: Arial, sans-serif;
}

h1 {
  color: #6c5ce7;
}`;

const Page4Css = ({ lang, onNext, onPrev }: Props) => (
  <div className="space-y-6">
    <div className="text-center mb-6">
      <h1 className="text-3xl font-bold mb-2">🎨 {t("cssTitle", lang)}</h1>
      <p className="text-muted-foreground">{t("cssDesc", lang)}</p>
    </div>

    <div className="lesson-card">
      <div className="code-block">
        <pre className="text-foreground/90">{cssCode}</pre>
      </div>
    </div>

    <div className="lesson-card">
      <h2 className="text-lg font-semibold mb-3 text-primary">📖 {lang === "en" ? "What does it mean?" : "무슨 뜻일까요?"}</h2>
      <ul className="space-y-2 text-foreground/80">
        <li>🖌️ {t("bgColor", lang)}</li>
        <li>✏️ {t("textColor", lang)}</li>
        <li>📐 {t("textAlign", lang)}</li>
      </ul>
    </div>

    <div className="tip-box">
      <h3 className="font-semibold mb-2">{t("tryTask", lang)}</h3>
      <p className="text-sm">{t("tryTaskDesc", lang)}</p>
    </div>

    <div className="flex justify-between pt-4">
      <button onClick={onPrev} className="text-muted-foreground hover:text-foreground transition-colors font-medium">{t("prev", lang)}</button>
      <button onClick={onNext} className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full font-semibold shadow-md hover:shadow-lg transition-all hover:scale-105">
        {t("next", lang)}
      </button>
    </div>
  </div>
);

export default Page4Css;
