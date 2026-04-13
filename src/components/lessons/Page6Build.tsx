import { Lang, t } from "@/data/translations";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface Props {
  lang: Lang;
  onNext: () => void;
  onPrev: () => void;
}

const Page6Build = ({ lang, onNext, onPrev }: Props) => {
  const items = [
    { label: t("name", lang), hint: t("personalizeStep1", lang) },
    { label: t("bio", lang), hint: t("personalizeStep2", lang) },
    { label: t("hobbies", lang), hint: t("personalizeStep3", lang) },
    { label: t("socialLinks", lang), hint: t("personalizeStep4", lang) },
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold text-foreground">{t("buildTitle", lang)}</h2>
        <p className="text-muted-foreground">{t("buildDesc", lang)}</p>
      </div>

      <div className="lesson-card space-y-6">
        <div className="space-y-3">
          {items.map((item, i) => (
            <div key={i} className="bg-secondary p-4 rounded-xl">
              <p className="font-semibold text-foreground text-sm mb-1">{item.label}</p>
              <p className="text-sm text-muted-foreground">{item.hint}</p>
            </div>
          ))}
        </div>

        <div className="tip-box">
          <strong>{t("tipsTitle", lang)}</strong>
          <ul className="mt-2 space-y-1 list-disc list-inside">
            <li>{t("tip1", lang)}</li>
            <li>{t("tip2", lang)}</li>
            <li>{t("tip3", lang)}</li>
          </ul>
        </div>

        <div className="flex gap-3">
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

export default Page6Build;
