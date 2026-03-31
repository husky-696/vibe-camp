import { t, Lang } from "@/data/translations";
import CodeBlock from "@/components/CodeBlock";

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
      <h2 className="text-lg font-semibold mb-3 text-primary">🔗 {lang === "en" ? "Connecting CSS to HTML" : "CSS를 HTML에 연결하기"}</h2>
      <p className="text-foreground/80 mb-3">
        {lang === "en"
          ? "We keep HTML and CSS in separate files to stay organized. To connect them, add this line inside the <head> of your HTML:"
          : "HTML과 CSS를 별도 파일로 분리하면 정리가 쉬워요. 연결하려면 HTML의 <head> 안에 이 줄을 추가하세요:"}
      </p>
      <CodeBlock code={`<link rel="stylesheet" href="style.css">`} language="html" />
      <p className="text-sm text-muted-foreground mt-3">
        {lang === "en"
          ? "This tells the browser: \"Load the styles from style.css and apply them to this page.\""
          : "이것은 브라우저에게 \"style.css에서 스타일을 불러와서 이 페이지에 적용해\"라고 말하는 거예요."}
      </p>
    </div>

    <div className="lesson-card">
      <h2 className="text-lg font-semibold mb-3 text-primary">📄 {lang === "en" ? "Your full HTML with CSS linked" : "CSS가 연결된 전체 HTML"}</h2>
      <CodeBlock code={`<!DOCTYPE html>
<html>
  <head>
    <title>My Website</title>
    <!-- This connects your CSS file -->
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <h1>Hello World!</h1>
    <p>This is my first website.</p>
  </body>
</html>`} language="html" />
    </div>

    <div className="lesson-card">
      <h2 className="text-lg font-semibold mb-3 text-primary">🎨 {lang === "en" ? "Inside style.css" : "style.css 내용"}</h2>
      <CodeBlock code={cssCode} language="css" />
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
