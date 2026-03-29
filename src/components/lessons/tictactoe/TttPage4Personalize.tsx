import { t, Lang } from "@/data/translations";
import { Palette, User, Gamepad2, Volume2 } from "lucide-react";

interface Props {
  lang: Lang;
  onNext: () => void;
  onPrev: () => void;
}

const TttPage4Personalize = ({ lang, onNext, onPrev }: Props) => {
  const items = [
    { icon: Gamepad2, text: t("tttPersonalize1", lang) },
    { icon: User, text: t("tttPersonalize2", lang) },
    { icon: Palette, text: t("tttPersonalize3", lang) },
    { icon: Volume2, text: t("tttPersonalize4", lang) },
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold mb-2">✏️ {t("tttPersonalizeTitle", lang)}</h1>
        <p className="text-muted-foreground">{t("tttPersonalizeDesc", lang)}</p>
      </div>

      <div className="space-y-4">
        {items.map(({ icon: Icon, text }, i) => (
          <div key={i} className="lesson-card flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Icon className="w-5 h-5 text-primary" />
            </div>
            <span className="text-foreground/80">{text}</span>
          </div>
        ))}
      </div>

      <div className="tip-box">
        <h3 className="font-semibold mb-2">{t("chatUpgradeTip", lang)}</h3>
        <p className="text-sm">{t("chatUpgradeTipDesc", lang)}</p>
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

export default TttPage4Personalize;
