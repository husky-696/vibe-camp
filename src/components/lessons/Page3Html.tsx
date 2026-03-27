import { t, Lang } from "@/data/translations";
import CodeBlock from "@/components/CodeBlock";

interface Props {
  lang: Lang;
  onNext: () => void;
  onPrev: () => void;
}

const htmlCode = `<!DOCTYPE html>
<html>
  <head>
    <title>My Website</title>
  </head>
  <body>
    <h1>Hello World!</h1>
    <p>This is my first website.</p>
  </body>
</html>`;

const Page3Html = ({ lang, onNext, onPrev }: Props) => (
  <div className="space-y-6">
    <div className="text-center mb-6">
      <h1 className="text-3xl font-bold mb-2">🏗️ {t("htmlTitle", lang)}</h1>
      <p className="text-muted-foreground">{t("htmlDesc", lang)}</p>
    </div>

    <div className="lesson-card">
      <CodeBlock code={htmlCode} language="html" />
    </div>

    <div className="lesson-card">
      <h2 className="text-lg font-semibold mb-3 text-primary">📖 {lang === "en" ? "What does it mean?" : "무슨 뜻일까요?"}</h2>
      <ul className="space-y-2 text-foreground/80">
        <li className="flex items-start gap-2">
          <code className="bg-code px-2 py-0.5 rounded text-sm font-mono flex-shrink-0">&lt;title&gt;</code>
          <span>{t("titleTag", lang)}</span>
        </li>
        <li className="flex items-start gap-2">
          <code className="bg-code px-2 py-0.5 rounded text-sm font-mono flex-shrink-0">&lt;h1&gt;</code>
          <span>{t("h1Tag", lang)}</span>
        </li>
        <li className="flex items-start gap-2">
          <code className="bg-code px-2 py-0.5 rounded text-sm font-mono flex-shrink-0">&lt;p&gt;</code>
          <span>{t("pTag", lang)}</span>
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

export default Page3Html;
