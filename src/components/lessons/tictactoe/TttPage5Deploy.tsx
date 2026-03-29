import { t, Lang } from "@/data/translations";
import { Upload, Globe, PartyPopper, Home } from "lucide-react";
import Confetti from "@/components/Confetti";

interface Props {
  lang: Lang;
  onPrev: () => void;
  onHome: () => void;
}

const TttPage5Deploy = ({ lang, onPrev, onHome }: Props) => {
  const steps = [
    { icon: Globe, text: t("step1", lang), num: "1" },
    { icon: Upload, text: t("step2", lang), num: "2" },
    { icon: PartyPopper, text: t("step3", lang), num: "3" },
  ];

  return (
    <div className="space-y-6">
      <Confetti />
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold mb-2">🚀 {t("deployTitle", lang)}</h1>
        <p className="text-muted-foreground">{t("deployDesc", lang)}</p>
      </div>

      <div className="space-y-4">
        {steps.map(({ icon: Icon, text, num }) => (
          <div key={num} className="lesson-card flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <span className="text-primary font-bold">{num}</span>
            </div>
            <div className="flex items-center gap-3">
              <Icon className="w-5 h-5 text-primary" />
              <span className="text-foreground/80">{text}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="lesson-card text-center py-8 bg-primary/5">
        <PartyPopper className="w-16 h-16 text-primary mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-2">{t("tttCongrats", lang)}</h2>
        <p className="text-muted-foreground">{t("tttCongratsDesc", lang)}</p>
      </div>

      <div className="flex justify-between pt-4">
        <button onClick={onPrev} className="text-muted-foreground hover:text-foreground transition-colors font-medium">{t("prev", lang)}</button>
        <button onClick={onHome} className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-full font-semibold shadow-md hover:shadow-lg transition-all hover:scale-105">
          <Home className="w-4 h-4" />
          {t("backToHome", lang)}
        </button>
      </div>
    </div>
  );
};

export default TttPage5Deploy;
