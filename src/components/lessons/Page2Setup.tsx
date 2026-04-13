import { Lang, t } from "@/data/translations";
import { ArrowLeft, ArrowRight, ExternalLink, Monitor, Mail, Globe } from "lucide-react";
import { useState } from "react";

interface Props {
  lang: Lang;
  onNext: () => void;
  onPrev: () => void;
}

const Page2Setup = ({ lang, onNext, onPrev }: Props) => {
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});

  const toggleCheck = (i: number) => {
    setCheckedItems(prev => ({ ...prev, [i]: !prev[i] }));
  };

  const steps = [
    { 
      icon: Mail, 
      title: t("gmail", lang), 
      desc: t("gmailDesc", lang),
      link: "https://accounts.google.com/signup"
    },
    { 
      icon: Monitor, 
      title: t("antigravity", lang), 
      desc: t("antigravityDesc", lang),
      link: "https://antigravity.google/" // Link to install
    },
    { 
      icon: Globe, 
      title: t("netlify", lang), 
      desc: t("netlifyDesc", lang),
      link: "https://app.netlify.com/signup"
    },
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold text-foreground">{t("setupTitle", lang)}</h2>
        <p className="text-muted-foreground">{t("setupDesc", lang)}</p>
      </div>

      <div className="lesson-card space-y-6">
        <div className="space-y-3">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isChecked = checkedItems[i] || false;
            
            return (
              <div 
                key={i} 
                className={`flex gap-4 p-4 rounded-xl border transition-all cursor-pointer ${
                  isChecked 
                    ? "bg-primary/10 border-primary/30" 
                    : "bg-secondary border-transparent hover:border-border"
                }`}
                onClick={() => toggleCheck(i)}
              >
                <div className="mt-0.5">
                  <div className={`w-6 h-6 rounded-md border flex items-center justify-center transition-colors ${
                    isChecked ? "bg-primary border-primary text-primary-foreground" : "border-muted-foreground/30 bg-background"
                  }`}>
                    {isChecked && <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.6666 3.5L5.24992 9.91667L2.33325 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>}
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className={`font-semibold text-sm ${isChecked ? "text-primary" : "text-foreground"}`}>
                      {step.title}
                    </h4>
                    {step.link !== "#" && (
                      <a 
                        href={step.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-xs flex items-center gap-1 text-blue-500 hover:text-blue-600 dark:text-blue-400 font-medium"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {lang === "en" ? "Open Link" : "링크 열기"}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex gap-3 pt-2">
          <button onClick={onPrev} className="btn-secondary flex-1">
            <ArrowLeft className="w-4 h-4" />
            {t("prev", lang)}
          </button>
          <button onClick={onNext} className="btn-primary flex-[2]">
            {t("next", lang)}
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page2Setup;
