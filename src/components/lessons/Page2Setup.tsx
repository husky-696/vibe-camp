import { useState } from "react";
import { t, Lang } from "@/data/translations";
import { Check } from "lucide-react";

interface Props {
  lang: Lang;
  onNext: () => void;
  onPrev: () => void;
}

const Page2Setup = ({ lang, onNext, onPrev }: Props) => {
  const [checked, setChecked] = useState([false, false, false]);

  const toggle = (i: number) => {
    const next = [...checked];
    next[i] = !next[i];
    setChecked(next);
  };

  const items = [
    { title: t("gmail", lang), desc: t("gmailDesc", lang) },
    { title: t("windsurf", lang), desc: t("windsurfDesc", lang), link: "https://windsurf.com" },
    { title: t("netlify", lang), desc: t("netlifyDesc", lang), link: "https://netlify.com" },
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold mb-2">📋 {t("setupTitle", lang)}</h1>
        <p className="text-muted-foreground">{t("setupDesc", lang)}</p>
      </div>

      <div className="space-y-4">
        {items.map((item, i) => (
          <div
            key={i}
            onClick={() => toggle(i)}
            className={`lesson-card cursor-pointer transition-all duration-300 ${
              checked[i] ? "ring-2 ring-primary/50 bg-primary/5" : ""
            }`}
          >
            <div className="flex items-start gap-4">
              <div className={`w-7 h-7 rounded-lg border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                checked[i] ? "bg-primary border-primary" : "border-border"
              }`}>
                {checked[i] && <Check className="w-4 h-4 text-primary-foreground" />}
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                {item.link && (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-sm text-primary underline mt-1 inline-block" onClick={(e) => e.stopPropagation()}>
                    {item.link}
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between pt-4">
        <button onClick={onPrev} className="text-muted-foreground hover:text-foreground transition-colors font-medium">{t("prev", lang)}</button>
        <button onClick={onNext} className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full font-semibold shadow-md hover:shadow-lg transition-all hover:scale-105">
          {t("next", lang)}
        </button>
      </div>
    </div>
  );
};

export default Page2Setup;
