import { t, Lang } from "@/data/translations";
import { ArrowLeft, ArrowRight, Copy, Terminal, Info } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import CodeBlock from "@/components/CodeBlock";

interface Props {
  lang: Lang;
  onNext: () => void;
  onPrev: () => void;
}

const BlogPage4Prompt = ({ lang, onNext, onPrev }: Props) => {
  return (
    <div className="space-y-8">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold text-foreground">{t("blogPromptTitle", lang)}</h2>
        <p className="text-muted-foreground">{t("blogPromptDesc", lang)}</p>
      </div>

      <div className="lesson-card space-y-6">
        <div>
          <CodeBlock code={t("blogPromptText", lang)} language="prompt" lang={lang} />
        </div>

        <div className="tip-box flex gap-2 items-start">
          <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
          <span className="text-sm">
            {lang === "en"
              ? "Build the UI first, then ask AI to 'Add the fetch logic to connect to jsonbin.io'. Replace YOUR_BIN_ID and YOUR_API_KEY with your environment variable names!"
              : "먼저 UI를 만들고, 그다음 'fetch 로직을 추가하여 jsonbin.io에 연결해줘'라고 요청하세요. YOUR_BIN_ID와 YOUR_API_KEY를 환경 변수 이름으로 교체하세요!"}
          </span>
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

export default BlogPage4Prompt;
