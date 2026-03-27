import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Lang } from "@/data/translations";
import LanguageToggle from "@/components/LanguageToggle";
import ProgressBar from "@/components/ProgressBar";
import Page1Intro from "@/components/lessons/Page1Intro";
import Page2Setup from "@/components/lessons/Page2Setup";
import Page3Html from "@/components/lessons/Page3Html";
import Page4Css from "@/components/lessons/Page4Css";
import Page5VibeCoding from "@/components/lessons/Page5VibeCoding";
import Page6Build from "@/components/lessons/Page6Build";
import Page7Deploy from "@/components/lessons/Page7Deploy";

const TOTAL_PAGES = 7;

const Index = () => {
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

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -80 : 80, opacity: 0 }),
  };

  const renderPage = () => {
    switch (page) {
      case 1: return <Page1Intro lang={lang} onNext={next} />;
      case 2: return <Page2Setup lang={lang} onNext={next} onPrev={prev} />;
      case 3: return <Page3Html lang={lang} onNext={next} onPrev={prev} />;
      case 4: return <Page4Css lang={lang} onNext={next} onPrev={prev} />;
      case 5: return <Page5VibeCoding lang={lang} onNext={next} onPrev={prev} />;
      case 6: return <Page6Build lang={lang} onNext={next} onPrev={prev} />;
      case 7: return <Page7Deploy lang={lang} onPrev={prev} />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <LanguageToggle lang={lang} onToggle={() => setLang(l => l === "en" ? "ko" : "en")} />

      <div className="max-w-2xl mx-auto pt-12">
        {page > 1 && <ProgressBar current={page} total={TOTAL_PAGES} lang={lang} />}

        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Index;
