import { t, Lang } from "@/data/translations";
import { User, FileText, Heart, Link } from "lucide-react";

interface Props {
  lang: Lang;
  onNext: () => void;
  onPrev: () => void;
}

const Page6Build = ({ lang, onNext, onPrev }: Props) => {
  const sections = [
    { icon: User, label: t("name", lang), color: "text-blue-500" },
    { icon: FileText, label: t("bio", lang), color: "text-green-500" },
    { icon: Heart, label: t("hobbies", lang), color: "text-pink-500" },
    { icon: Link, label: t("socialLinks", lang), color: "text-orange-500" },
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold mb-2">🛠️ {t("buildTitle", lang)}</h1>
        <p className="text-muted-foreground">{t("buildDesc", lang)}</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {sections.map(({ icon: Icon, label, color }) => (
          <div key={label} className="lesson-card flex flex-col items-center gap-3 py-6">
            <Icon className={`w-10 h-10 ${color}`} />
            <span className="font-semibold">{label}</span>
          </div>
        ))}
      </div>

      <div className="tip-box">
        <h3 className="font-semibold mb-3">{t("tipsTitle", lang)}</h3>
        <ul className="space-y-2 text-sm">
          <li>🎨 {t("tip1", lang)}</li>
          <li>📸 {t("tip2", lang)}</li>
          <li>✨ {t("tip3", lang)}</li>
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
};

export default Page6Build;
