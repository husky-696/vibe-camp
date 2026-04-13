import { Lang, t } from "@/data/translations";
import { ArrowLeft, ArrowRight, Home, Globe, ShieldCheck } from "lucide-react";

interface Props {
  lang: Lang;
  onPrev: () => void;
  onNextLesson: () => void;
}

const ChatPage7Deploy = ({ lang, onPrev, onNextLesson }: Props) => {
  const steps = [
    { title: t("chatDeployStep1", lang), desc: "Open your project folder in your file explorer." },
    { title: t("chatDeployStep2", lang), desc: "Drag it into the Netlify drop zone." },
    { title: t("chatDeployStep3", lang), desc: "Go to 'Site Configuration' > 'Environment Variables'." },
    { title: "Step 4: Add OPENROUTER_API_KEY", desc: "Paste your API key value into this variable." },
    { title: "Step 5: Save & Redeploy", desc: "If the site is already live, trigger a new deploy to use the keys." },
    { title: "Step 6: Success!", desc: "Your AI Chat app is now secure and live!" },
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold text-foreground">{t("chatDeployTitle", lang)}</h2>
        <p className="text-muted-foreground">{t("chatDeploySubtitle", lang)}</p>
      </div>

      <div className="lesson-card space-y-6">
        <div className="space-y-3 h-[300px] overflow-y-auto pr-2 custom-scrollbar">
          {steps.map((step, i) => (
            <div key={i} className="flex gap-4 bg-secondary p-4 rounded-xl hover:bg-secondary/80 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-sm font-bold text-primary">{i + 1}</span>
              </div>
              <div>
                <h4 className="font-semibold text-foreground text-sm">{step.title}</h4>
                <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-start gap-3 bg-green-500/10 border border-green-500/20 p-4 rounded-xl">
          <ShieldCheck className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-green-700/80 text-sm mb-0.5">Security Verified</p>
            <p className="text-xs text-green-600 dark:text-green-500/80 leading-relaxed">
              Using Netlify variables keeps your API keys hidden from the public!
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <button onClick={onPrev} className="btn-secondary flex-1">
            <ArrowLeft className="w-4 h-4" />
            {t("prev", lang)}
          </button>
          <button onClick={onNextLesson} className="btn-primary flex-[2]">
            {t("backToHome", lang)}
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage7Deploy;
