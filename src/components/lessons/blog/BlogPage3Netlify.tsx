import { t, Lang } from "@/data/translations";
import { ArrowLeft, ArrowRight, ShieldCheck } from "lucide-react";

interface Props {
  lang: Lang;
  onNext: () => void;
  onPrev: () => void;
}

const BlogPage3Netlify = ({ lang, onNext, onPrev }: Props) => {
  const steps = [
    t("blogNetlifyStep1", lang),
    t("blogNetlifyStep2", lang),
    t("blogNetlifyStep3", lang),
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold text-foreground">{t("blogNetlifyTitle", lang)}</h2>
        <p className="text-muted-foreground">{t("blogNetlifyDesc", lang)}</p>
      </div>

      <div className="lesson-card space-y-6">
        <div className="space-y-2">
          {steps.map((step, i) => (
            <div key={i} className="flex items-start gap-3 bg-secondary p-3 rounded-xl">
              <span className="text-xs font-bold text-primary bg-primary/10 rounded-lg px-2 py-1 flex-shrink-0 mt-0.5">{i + 1}</span>
              <p className="text-sm text-foreground">{step}</p>
            </div>
          ))}
        </div>

        <div className="flex items-start gap-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-4 rounded-xl">
          <ShieldCheck className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-green-700 dark:text-green-400 text-sm mb-0.5">
              {lang === "en" ? "Why do this?" : "왜 이렇게 하나요?"}
            </p>
            <p className="text-xs text-green-600 dark:text-green-500 leading-relaxed">
              {lang === "en"
                ? "If you put your API key directly in the code, anyone can see it on GitHub! Environment variables keep your keys hidden and secure."
                : "API 키를 코드에 직접 넣으면 GitHub에서 누구나 볼 수 있습니다! 환경 변수를 사용하면 키를 안전하게 숨길 수 있습니다."}
            </p>
          </div>
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

export default BlogPage3Netlify;
