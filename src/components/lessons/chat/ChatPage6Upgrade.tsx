import { t, Lang } from "@/data/translations";
import { Cpu, Sparkles, Palette } from "lucide-react";

interface Props {
  lang: Lang;
  onNext: () => void;
  onPrev: () => void;
}

const ChatPage6Upgrade = ({ lang, onNext, onPrev }: Props) => {
  const ideas = [
    { icon: Cpu, title: t("chatUpgrade1", lang), desc: t("chatUpgrade1Desc", lang) },
    { icon: Sparkles, title: t("chatUpgrade2", lang), desc: t("chatUpgrade2Desc", lang) },
    { icon: Palette, title: t("chatUpgrade3", lang), desc: t("chatUpgrade3Desc", lang) },
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold mb-2">🚀 {t("chatUpgradeTitle", lang)}</h1>
        <p className="text-muted-foreground">{t("chatUpgradeDesc", lang)}</p>
      </div>

      <div className="space-y-4">
        {ideas.map(({ icon: Icon, title, desc }, i) => (
          <div key={i} className="lesson-card flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold">{title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{desc}</p>
            </div>
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

export default ChatPage6Upgrade;
