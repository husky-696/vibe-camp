import { t, Lang } from "@/data/translations";
import { Timer, Sparkles, Palette } from "lucide-react";
import HintButton from "@/components/HintButton";

interface Props {
  lang: Lang;
  onNext: () => void;
  onPrev: () => void;
}

const ChatPage6Upgrade = ({ lang, onNext, onPrev }: Props) => {
  const ideas = [
    { icon: Timer, title: t("chatUpgrade1", lang), desc: t("chatUpgrade1Desc", lang) },
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

      <HintButton
        lang={lang}
        label={t("hintBtnLabel", lang)}
        prompt={t("chatHintPrompt", lang)}
      />

      <HintButton
        lang={lang}
        label={lang === "en" ? "💡 Rate limit timer prompt" : "💡 요청 제한 타이머 프롬프트"}
        prompt={lang === "en"
          ? "Add a cooldown timer to my chat app. After each message, show a countdown timer (e.g. 3 seconds) before the user can send another message. Disable the send button during cooldown and show the remaining time on the button."
          : "채팅 앱에 쿨다운 타이머를 추가해주세요. 메시지를 보낸 후 사용자가 다시 보낼 수 있을 때까지 카운트다운 타이머(예: 3초)를 표시하세요. 쿨다운 중에는 전송 버튼을 비활성화하고 남은 시간을 버튼에 표시하세요."
        }
      />

      <HintButton
        lang={lang}
        label={lang === "en" ? "💡 AI personality prompt" : "💡 AI 성격 프롬프트"}
        prompt={lang === "en"
          ? "Add a personality selector dropdown to my chat app with options like: Friendly, Sarcastic, Pirate, Teacher, Comedian. When the user selects a personality, change the system prompt sent to the API to match that personality."
          : "채팅 앱에 성격 선택 드롭다운을 추가해주세요. 옵션: 친근한, 비꼬는, 해적, 선생님, 코미디언. 사용자가 성격을 선택하면 API에 보내는 시스템 프롬프트를 해당 성격에 맞게 변경하세요."
        }
      />

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
