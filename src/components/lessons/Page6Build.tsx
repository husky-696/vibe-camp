import { t, Lang } from "@/data/translations";
import { User, FileText, Heart, Link, Pencil } from "lucide-react";

interface Props {
  lang: Lang;
  onNext: () => void;
  onPrev: () => void;
}

const Page6Build = ({ lang, onNext, onPrev }: Props) => {
  const sections = [
    { icon: User, label: t("name", lang) },
    { icon: FileText, label: t("bio", lang) },
    { icon: Heart, label: t("hobbies", lang) },
    { icon: Link, label: t("socialLinks", lang) },
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold mb-2">✏️ {t("buildTitle", lang)}</h1>
        <p className="text-muted-foreground">{t("buildDesc", lang)}</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {sections.map(({ icon: Icon, label }) => (
          <div key={label} className="lesson-card flex flex-col items-center gap-3 py-6">
            <Icon className="w-10 h-10 text-primary" />
            <span className="font-semibold">{label}</span>
          </div>
        ))}
      </div>

      <div className="lesson-card">
        <h3 className="font-semibold mb-3 text-primary flex items-center gap-2">
          <Pencil className="w-4 h-4" />
          {t("personalizeHow", lang)}
        </h3>
        <ul className="space-y-2 text-foreground/80 text-sm">
          <li>1️⃣ {t("personalizeStep1", lang)}</li>
          <li>2️⃣ {t("personalizeStep2", lang)}</li>
          <li>3️⃣ {t("personalizeStep3", lang)}</li>
          <li>4️⃣ {t("personalizeStep4", lang)}</li>
        </ul>
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
