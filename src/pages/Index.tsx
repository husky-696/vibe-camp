import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Home } from "lucide-react";
import { Lang, t } from "@/data/translations";
import LanguageToggle from "@/components/LanguageToggle";
import ProgressBar from "@/components/ProgressBar";
import LessonSelect from "@/components/lessons/LessonSelect";
import Logo from "@/components/Logo";

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
// Lesson 4: Personal Blog
import BlogPage1Intro from "@/components/lessons/blog/BlogPage1Intro";
import BlogPage2DbSetup from "@/components/lessons/blog/BlogPage2DbSetup";
import BlogPage3Netlify from "@/components/lessons/blog/BlogPage3Netlify";
import BlogPage4Prompt from "@/components/lessons/blog/BlogPage4Prompt";
import BlogPage5Congrats from "@/components/lessons/blog/BlogPage5Congrats";
// Lesson 5: Chat App
import ChatPage1Intro from "@/components/lessons/chat/ChatPage1Intro";
import ChatPage2ApiSetup from "@/components/lessons/chat/ChatPage2ApiSetup";
import ChatPage4Prompt from "@/components/lessons/chat/ChatPage4Prompt";
import ChatPage5Interaction from "@/components/lessons/chat/ChatPage5Interaction";
import ChatPage6Upgrade from "@/components/lessons/chat/ChatPage6Upgrade";
import ChatPage7Deploy from "@/components/lessons/chat/ChatPage7Deploy";

const LESSON_PAGES: Record<number, number> = { 1: 5, 2: 3, 3: 5, 4: 5, 5: 6 };

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
      case 5: return <BasicsComplete lang={lang} onPrev={prev} onNextLesson={() => selectLesson(2)} />;
      default: return null;
    }
  };

  const renderLesson2 = () => {
    switch (page) {
      case 1: return <Page5VibeCoding lang={lang} onNext={next} onPrev={prev} />;
      case 2: return <Page6Build lang={lang} onNext={next} onPrev={prev} />;
      case 3: return <Page7Deploy lang={lang} onPrev={prev} onNextLesson={() => selectLesson(3)} />;
      default: return null;
    }
  };

  const renderLesson3 = () => {
    switch (page) {
      case 1: return <TttPage1Intro lang={lang} onNext={next} />;
      case 2: return <TttPage2Prompt lang={lang} onNext={next} onPrev={prev} />;
      case 3: return <TttPage3Logic lang={lang} onNext={next} onPrev={prev} />;
      case 4: return <TttPage4Personalize lang={lang} onNext={next} onPrev={prev} />;
      case 5: return <TttPage5Deploy lang={lang} onPrev={prev} onNextLesson={() => selectLesson(4)} />;
      default: return null;
    }
  };

  const renderLesson4 = () => {
    switch (page) {
      case 1: return <BlogPage1Intro lang={lang} onNext={next} />;
      case 2: return <BlogPage2DbSetup lang={lang} onNext={next} onPrev={prev} />;
      case 3: return <BlogPage3Netlify lang={lang} onNext={next} onPrev={prev} />;
      case 4: return <BlogPage4Prompt lang={lang} onNext={next} onPrev={prev} />;
      case 5: return <BlogPage5Congrats lang={lang} onPrev={prev} onNextLesson={() => selectLesson(5)} />;
      default: return null;
    }
  };

  const renderLesson5 = () => {
    switch (page) {
      case 1: return <ChatPage1Intro lang={lang} onNext={next} />;
      case 2: return <ChatPage2ApiSetup lang={lang} onNext={next} onPrev={prev} />;
      case 3: return <ChatPage4Prompt lang={lang} onNext={next} onPrev={prev} />;
      case 4: return <ChatPage5Interaction lang={lang} onNext={next} onPrev={prev} />;
      case 5: return <ChatPage6Upgrade lang={lang} onNext={next} onPrev={prev} />;
      case 6: return <ChatPage7Deploy lang={lang} onPrev={prev} onNextLesson={goHome} />;
      default: return null;
    }
  };

  const renderContent = () => {
    if (lesson === null) return <LessonSelect lang={lang} onSelectLesson={selectLesson} />;
    if (lesson === 1) return renderLesson1();
    if (lesson === 2) return renderLesson2();
    if (lesson === 3) return renderLesson3();
    if (lesson === 4) return renderLesson4();
    if (lesson === 5) return renderLesson5();
    return null;
  };

  const animKey = lesson === null ? "home" : `lesson-${lesson}-page-${page}`;

  return (
    <div className="min-h-screen flex flex-col pt-24 pb-12 px-4 sm:px-6 justify-center">
      {/* Top Left Navigation/Logo */}
      {lesson !== null ? (
        <div className="fixed top-4 left-4 sm:top-6 sm:left-6 z-50 flex items-center gap-4">
          <button
            onClick={goHome}
            className="bg-card/80 backdrop-blur-md text-foreground p-3 rounded-2xl shadow-xl border border-white/5 hover:border-white/20 transition-all hover:scale-105"
            title={t("backToHome", lang)}
          >
            <Home className="w-5 h-5" />
          </button>
          <Logo />
        </div>
      ) : (
        <div className="fixed top-4 left-4 sm:top-6 sm:left-6 z-50">
          <Logo />
        </div>
      )}

      <LanguageToggle
        lang={lang}
        onToggle={() => setLang(l => l === "en" ? "ko" : "en")}
        dark={dark}
        onToggleDark={() => setDark(d => !d)}
      />

      <div className="w-full max-w-4xl mx-auto flex-1 flex flex-col justify-center">
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
            <div className="max-w-3xl mx-auto w-full">
              {renderContent()}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Index;
