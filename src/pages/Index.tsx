import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Lang } from "@/data/translations";
import LanguageToggle from "@/components/LanguageToggle";
import ProgressBar from "@/components/ProgressBar";
import LessonSelect from "@/components/lessons/LessonSelect";
import Page1Intro from "@/components/lessons/Page1Intro";
import Page2Setup from "@/components/lessons/Page2Setup";
import Page3Html from "@/components/lessons/Page3Html";
import Page4Css from "@/components/lessons/Page4Css";
import Page5VibeCoding from "@/components/lessons/Page5VibeCoding";
import Page6Build from "@/components/lessons/Page6Build";
import Page7Deploy from "@/components/lessons/Page7Deploy";
import ChatPage1Intro from "@/components/lessons/chat/ChatPage1Intro";
import ChatPage2Html from "@/components/lessons/chat/ChatPage2Html";
import ChatPage3Css from "@/components/lessons/chat/ChatPage3Css";
import ChatPage4Prompt from "@/components/lessons/chat/ChatPage4Prompt";
import ChatPage5Interaction from "@/components/lessons/chat/ChatPage5Interaction";
import ChatPage6Upgrade from "@/components/lessons/chat/ChatPage6Upgrade";
import ChatPage7Deploy from "@/components/lessons/chat/ChatPage7Deploy";

const TOTAL_PAGES = 7;

const Index = () => {
  const [lesson, setLesson] = useState<number | null>(null);
  const [page, setPage] = useState(1);
  const [lang, setLang] = useState<Lang>("en");
  const [direction, setDirection] = useState(1);

  const goTo = (p: number) => {
    setDirection(p > page ? 1 : -1);
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const next = () => goTo(Math.min(page + 1, TOTAL_PAGES));
  const prev = () => goTo(Math.max(page - 1, 1));

  const goHome = () => {
    setLesson(null);
    setPage(1);
    setDirection(1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const selectLesson = (l: number) => {
    setLesson(l);
    setPage(1);
    setDirection(1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -80 : 80, opacity: 0 }),
  };

  const renderLesson1 = () => {
    switch (page) {
      case 1: return <Page1Intro lang={lang} onNext={next} />;
      case 2: return <Page2Setup lang={lang} onNext={next} onPrev={prev} />;
      case 3: return <Page3Html lang={lang} onNext={next} onPrev={prev} />;
      case 4: return <Page4Css lang={lang} onNext={next} onPrev={prev} />;
      case 5: return <Page5VibeCoding lang={lang} onNext={next} onPrev={prev} />;
      case 6: return <Page6Build lang={lang} onNext={next} onPrev={prev} />;
      case 7: return <Page7Deploy lang={lang} onPrev={prev} onHome={goHome} />;
      default: return null;
    }
  };

  const renderLesson2 = () => {
    switch (page) {
      case 1: return <ChatPage1Intro lang={lang} onNext={next} />;
      case 2: return <ChatPage2Html lang={lang} onNext={next} onPrev={prev} />;
      case 3: return <ChatPage3Css lang={lang} onNext={next} onPrev={prev} />;
      case 4: return <ChatPage4Prompt lang={lang} onNext={next} onPrev={prev} />;
      case 5: return <ChatPage5Interaction lang={lang} onNext={next} onPrev={prev} />;
      case 6: return <ChatPage6Upgrade lang={lang} onNext={next} onPrev={prev} />;
      case 7: return <ChatPage7Deploy lang={lang} onPrev={prev} onHome={goHome} />;
      default: return null;
    }
  };

  const renderContent = () => {
    if (lesson === null) return <LessonSelect lang={lang} onSelectLesson={selectLesson} />;
    if (lesson === 1) return renderLesson1();
    if (lesson === 2) return renderLesson2();
    return null;
  };

  const animKey = lesson === null ? "home" : `lesson-${lesson}-page-${page}`;

  return (
    <div className="min-h-screen py-8 px-4">
      <LanguageToggle lang={lang} onToggle={() => setLang(l => l === "en" ? "ko" : "en")} />

      <div className="max-w-2xl mx-auto pt-12">
        {lesson !== null && page > 1 && <ProgressBar current={page} total={TOTAL_PAGES} lang={lang} />}

        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={animKey}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Index;
