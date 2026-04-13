import { t, Lang } from "@/data/translations";
import { ArrowLeft, ArrowRight, ExternalLink, ShieldCheck } from "lucide-react";
import CodeBlock from "@/components/CodeBlock";

interface Props {
  lang: Lang;
  onNext: () => void;
  onPrev: () => void;
}

const ChatPage2ApiSetup = ({ lang, onNext, onPrev }: Props) => {
  const steps = [
    t("chatApiStep1", lang),
    t("chatApiStep2", lang),
    t("chatApiStep3", lang),
    t("chatApiStep4", lang),
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold text-foreground">{t("chatApiTitle", lang)}</h2>
        <p className="text-muted-foreground">{t("chatApiDesc", lang)}</p>
      </div>

      <div className="lesson-card space-y-6">
        <div>
          <h3 className="text-base font-semibold text-foreground mb-1">{t("chatApiWhat", lang)}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{t("chatApiWhatDesc", lang)}</p>
        </div>

        <div>
          <h3 className="text-base font-semibold text-foreground mb-3">
            {lang === "en" ? "Steps to get your free API key:" : "무료 API 키 받는 방법:"}
          </h3>
          <div className="space-y-2">
            {steps.map((step, i) => (
              <div key={i} className="flex items-start gap-3 bg-secondary p-3 rounded-xl">
                <span className="text-xs font-bold text-primary bg-primary/10 rounded-lg px-2 py-1 flex-shrink-0 mt-0.5">{i + 1}</span>
                <p className="text-sm text-foreground">{step}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
            {lang === "en" ? "Your API key looks like this:" : "API 키는 이렇게 생겼습니다:"}
          </p>
          <CodeBlock code="sk-or-v1-xxxxxxxxxxxxxxxxxxxxxxxx" language="key" />
          <p className="text-xs text-muted-foreground mt-2">
            {lang === "en" ? "⚠️ Keep your API key secret! Don't share it publicly." : "⚠️ API 키를 비밀로 유지하세요! 공개적으로 공유하지 마세요."}
          </p>
        </div>

        <div className="tip-box flex gap-2 items-start">
          <ShieldCheck className="w-4 h-4 flex-shrink-0 mt-0.5" />
          <span className="text-sm">
            <strong>{t("chatNetlifyTitle", lang)}</strong> — {t("chatNetlifyDesc", lang)}{" "}
            {lang === "en" ? "We'll set this up in the final step!" : "마지막 단계에서 설정할 거예요!"}
          </span>
        </div>

        <a
          href="https://openrouter.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between p-4 bg-secondary border border-border rounded-xl hover:bg-border transition-colors group"
        >
          <span className="font-semibold text-foreground text-sm">Open openrouter.ai</span>
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

export default ChatPage2ApiSetup;
