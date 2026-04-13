import { t, Lang } from "@/data/translations";
import { ArrowLeft, ArrowRight, Timer, Sparkles, Palette, Info } from "lucide-react";
import CodeBlock from "@/components/CodeBlock";
import { useState } from "react";
import { toast } from "sonner";

interface Props {
  lang: Lang;
  onNext: () => void;
  onPrev: () => void;
}

const ChatPage6Upgrade = ({ lang, onNext, onPrev }: Props) => {
  const [openHint, setOpenHint] = useState<number | null>(null);

  const ideas = [
    { icon: Timer, title: t("chatUpgrade1", lang), desc: t("chatUpgrade1Desc", lang) },
    { icon: Sparkles, title: t("chatUpgrade2", lang), desc: t("chatUpgrade2Desc", lang) },
    { icon: Palette, title: t("chatUpgrade3", lang), desc: t("chatUpgrade3Desc", lang) },
  ];

  const hints = [
    {
      label: t("hintBtnLabel", lang),
      prompt: t("chatHintPrompt", lang),
    },
    {
      label: lang === "en" ? "💡 Rate limit timer prompt" : "💡 요청 제한 타이머 프롬프트",
      prompt: lang === "en"
        ? "Add a cooldown timer to my chat app. After each message, show a countdown timer (e.g. 3 seconds) before the user can send another message. Disable the send button during cooldown and show the remaining time on the button."
        : "채팅 앱에 쿨다운 타이머를 추가해주세요. 메시지를 보낸 후 사용자가 다시 보낼 수 있을 때까지 카운트다운 타이머(예: 3초)를 표시하세요. 쿨다운 중에는 전송 버튼을 비활성화하고 남은 시간을 버튼에 표시하세요.",
    },
    {
      label: lang === "en" ? "💡 AI personality prompt" : "💡 AI 성격 프롬프트",
      prompt: lang === "en"
        ? "Add a personality selector dropdown to my chat app with options like: Friendly, Sarcastic, Pirate, Teacher, Comedian. When the user selects a personality, change the system prompt sent to the API to match that personality."
        : "채팅 앱에 성격 선택 드롭다운을 추가해주세요. 옵션: 친근한, 비꼬는, 해적, 선생님, 코미디언. 사용자가 성격을 선택하면 API에 보내는 시스템 프롬프트를 해당 성격에 맞게 변경하세요.",
    },
  ];

  const copyHint = (prompt: string) => {
    navigator.clipboard.writeText(prompt);
    toast.success("Prompt copied!");
  };

  return (
    <div className="space-y-8">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold text-foreground">{t("chatUpgradeTitle", lang)}</h2>
        <p className="text-muted-foreground">{t("chatUpgradeDesc", lang)}</p>
      </div>

      <div className="lesson-card space-y-6">
        <div className="space-y-3">
          {ideas.map(({ icon: Icon, title, desc }, i) => (
            <div key={i} className="flex items-start gap-3 bg-secondary p-4 rounded-xl">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Icon className="w-4 h-4 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-sm">{title}</h3>
                <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-3">
          {hints.map((hint, i) => (
            <div key={i}>
              <button
                onClick={() => setOpenHint(openHint === i ? null : i)}
                className="w-full text-left text-sm font-medium text-primary flex items-center gap-2 hover:underline"
              >
                {hint.label}
              </button>
              {openHint === i && (
                <div className="mt-4 mb-2">
                  <CodeBlock code={hint.prompt} language="prompt" lang={lang} />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="tip-box flex gap-2 items-start">
          <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
          <span className="text-sm"><strong>{t("chatUpgradeTip", lang)}</strong> — {t("chatUpgradeTipDesc", lang)}</span>
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

export default ChatPage6Upgrade;
