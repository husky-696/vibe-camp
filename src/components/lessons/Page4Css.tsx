import { Lang, t } from "@/data/translations";
import { ArrowLeft, ArrowRight, Info } from "lucide-react";
import CodeBlock from "@/components/CodeBlock";

interface Props {
  lang: Lang;
  onNext: () => void;
  onPrev: () => void;
}

const Page4Css = ({ lang, onNext, onPrev }: Props) => {
  return (
    <div className="space-y-8">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold text-foreground">{t("cssTitle", lang)}</h2>
        <p className="text-muted-foreground">{t("cssDesc", lang)}</p>
      </div>

      <div className="lesson-card space-y-6">
        <div>
          <p className="text-sm font-medium text-muted-foreground mb-2 uppercase tracking-wide">Example</p>
          <CodeBlock code={`body {
  background-color: black;
  color: white;
  text-align: center;
}

h1 {
  font-size: 48px;
  color: #ff8c00;
}`} language="css" />
        </div>

        <div className="space-y-2">
          {[t("bgColor", lang), t("textColor", lang), t("textAlign", lang)].map((text, i) => (
            <div key={i} className="flex items-start gap-3 bg-secondary p-3 rounded-xl">
              <span className="text-xs font-bold text-primary bg-primary/10 rounded-lg px-2 py-1 flex-shrink-0 mt-0.5">{i + 1}</span>
              <p className="text-sm text-foreground">{text}</p>
            </div>
          ))}
        </div>

        <div className="tip-box flex gap-2 items-start">
          <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
          <span>CSS is like the <strong>clothing</strong> for your HTML skeleton — it makes things look good.</span>
        </div>

        <div className="flex gap-3">
          <button onClick={onPrev} className="btn-secondary flex-1">
            <ArrowLeft className="w-4 h-4" />
            {t("prev", lang)}
          </button>
          <button onClick={onNext} className="btn-primary flex-[2]">
            {t("finishBasics", lang)}
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page4Css;
