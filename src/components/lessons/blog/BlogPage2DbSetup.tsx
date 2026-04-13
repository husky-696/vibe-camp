import { t, Lang } from "@/data/translations";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";

interface Props {
  lang: Lang;
  onNext: () => void;
  onPrev: () => void;
}

const BlogPage2DbSetup = ({ lang, onNext, onPrev }: Props) => {
  const steps = [
    t("blogDbStep1", lang),
    t("blogDbStep2", lang),
    t("blogDbStep3", lang),
    t("blogDbStep4", lang),
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold text-foreground">{t("blogDbSetupTitle", lang)}</h2>
        <p className="text-muted-foreground">{t("blogDbSetupDesc", lang)}</p>
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

        <a
          href="https://jsonbin.io"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between p-4 bg-secondary border border-border rounded-xl hover:bg-border transition-colors group"
        >
          <span className="font-semibold text-foreground text-sm">Open jsonbin.io</span>
          <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
        </a>

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

export default BlogPage2DbSetup;
