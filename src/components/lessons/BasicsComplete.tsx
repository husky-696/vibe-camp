import { t, Lang } from "@/data/translations";
import { Home, PartyPopper } from "lucide-react";
import Confetti from "@/components/Confetti";

interface Props {
  lang: Lang;
  onPrev: () => void;
  onHome: () => void;
}

const BasicsComplete = ({ lang, onPrev, onHome }: Props) => (
  <div className="space-y-6">
    <Confetti />
    <div className="lesson-card text-center py-8 bg-primary/5">
      <PartyPopper className="w-16 h-16 text-primary mx-auto mb-4" />
      <h2 className="text-2xl font-bold mb-2">{t("basicsCongrats", lang)}</h2>
      <p className="text-muted-foreground">{t("basicsCongratsDesc", lang)}</p>
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

export default BasicsComplete;
