import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Home } from "lucide-react";
import { Lang, t } from "@/data/translations";
import LanguageToggle from "@/components/LanguageToggle";
import ProgressBar from "@/components/ProgressBar";
import LessonSelect from "@/components/lessons/LessonSelect";
// Lesson 1: Introduction
import Page1Intro from "@/components/lessons/Page1Intro";
import Page2Setup from "@/components/lessons/Page2Setup";
import Page3Html from "@/components/lessons/Page3Html";
import Page4Css from "@/components/lessons/Page4Css";
import BasicsComplete from "@/components/lessons/BasicsComplete";
// Lesson 2: Profile Website
import Page5VibeCoding from "@/components/lessons/Page5VibeCoding";
import Page6Build from "@/components/lessons/Page6Build";
import Page7Deploy from "@/components/lessons/Page7Deploy";
// Lesson 3: Tic Tac Toe
import TttPage1Intro from "@/components/lessons/tictactoe/TttPage1Intro";
import TttPage2Prompt from "@/components/lessons/tictactoe/TttPage2Prompt";
import TttPage3Logic from "@/components/lessons/tictactoe/TttPage3Logic";
import TttPage4Personalize from "@/components/lessons/tictactoe/TttPage4Personalize";
import TttPage5Deploy from "@/components/lessons/tictactoe/TttPage5Deploy";
// Lesson 4: Chat App
import ChatPage1Intro from "@/components/lessons/chat/ChatPage1Intro";
import ChatPage2ApiSetup from "@/components/lessons/chat/ChatPage2ApiSetup";
import ChatPage4Prompt from "@/components/lessons/chat/ChatPage4Prompt";
import ChatPage5Interaction from "@/components/lessons/chat/ChatPage5Interaction";
import ChatPage6Upgrade from "@/components/lessons/chat/ChatPage6Upgrade";
import ChatPage7Deploy from "@/components/lessons/chat/ChatPage7Deploy";

const LESSON_PAGES: Record<number, number> = { 1: 5, 2: 3, 3: 5, 4: 6 };

const Index = () => {
  const [lesson, setLesson] = useState<number | null>(null);
  const [page, setPage] = useState(1);
  const [lang, setLang] = useState<Lang>("en");
  const [direction, setDirection] = useState(1);
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark";
    }
    return false;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  const totalPages = lesson ? LESSON_PAGES[lesson] : 1;

  const goTo = (p: number) => {
    setDirection(p > page ? 1 : -1);
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const next = () => goTo(Math.min(page + 1, totalPages));
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
      case 5: return <BasicsComplete lang={lang} onPrev={prev} onHome={goHome} />;
      default: return null;
    }
  };

  const renderLesson2 = () => {
    switch (page) {
      case 1: return <Page5VibeCoding lang={lang} onNext={next} onPrev={prev} />;
      case 2: return <Page6Build lang={lang} onNext={next} onPrev={prev} />;
      case 3: return <Page7Deploy lang={lang} onPrev={prev} onHome={goHome} />;
      default: return null;
    }
  };

  const renderLesson3 = () => {
    switch (page) {
      case 1: return <TttPage1Intro lang={lang} onNext={next} />;
      case 2: return <TttPage2Prompt lang={lang} onNext={next} onPrev={prev} />;
      case 3: return <TttPage3Logic lang={lang} onNext={next} onPrev={prev} />;
      case 4: return <TttPage4Personalize lang={lang} onNext={next} onPrev={prev} />;
      case 5: return <TttPage5Deploy lang={lang} onPrev={prev} onHome={goHome} />;
      default: return null;
    }
  };

  const renderLesson4 = () => {
    switch (page) {
      case 1: return <ChatPage1Intro lang={lang} onNext={next} />;
      case 2: return <ChatPage2ApiSetup lang={lang} onNext={next} onPrev={prev} />;
      case 3: return <ChatPage4Prompt lang={lang} onNext={next} onPrev={prev} />;
      case 4: return <ChatPage5Interaction lang={lang} onNext={next} onPrev={prev} />;
      case 5: return <ChatPage6Upgrade lang={lang} onNext={next} onPrev={prev} />;
      case 6: return <ChatPage7Deploy lang={lang} onPrev={prev} onHome={goHome} />;
      default: return null;
    }
  };

  const renderContent = () => {
    if (lesson === null) return <LessonSelect lang={lang} onSelectLesson={selectLesson} />;
    if (lesson === 1) return renderLesson1();
    if (lesson === 2) return renderLesson2();
    if (lesson === 3) return renderLesson3();
    if (lesson === 4) return renderLesson4();
    return null;
  };

  const animKey = lesson === null ? "home" : `lesson-${lesson}-page-${page}`;

  return (
    <div className="min-h-screen py-8 px-4">
      {/* Home Button - Top Left */}
      {lesson !== null && (
        <button
          onClick={goHome}
          className="fixed top-4 left-4 z-50 bg-primary text-primary-foreground p-2 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
          title={t("backToHome", lang)}
        >
          <Home className="w-5 h-5" />
        </button>
      )}

      <LanguageToggle
        lang={lang}
        onToggle={() => setLang(l => l === "en" ? "ko" : "en")}
        dark={dark}
        onToggleDark={() => setDark(d => !d)}
      />

      <div className="max-w-2xl mx-auto pt-12">
        {lesson !== null && page > 1 && <ProgressBar current={page} total={totalPages} lang={lang} />}

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
