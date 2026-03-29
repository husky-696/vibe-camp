import { Lang } from "@/data/translations";
import { Moon, Sun } from "lucide-react";

interface Props {
  lang: Lang;
  onToggle: () => void;
  dark: boolean;
  onToggleDark: () => void;
}

const LanguageToggle = ({ lang, onToggle, dark, onToggleDark }: Props) => (
  <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
    <button
      onClick={onToggleDark}
      className="bg-card border border-border rounded-full p-2.5 text-sm font-medium shadow-md hover:shadow-lg transition-shadow"
      aria-label="Toggle dark mode"
    >
      {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </button>
    <button
      onClick={onToggle}
      className="bg-card border border-border rounded-full px-4 py-2 text-sm font-medium shadow-md hover:shadow-lg transition-shadow"
    >
      {lang === "en" ? "🇰🇷 한국어" : "🇺🇸 English"}
    </button>
  </div>
);

export default LanguageToggle;
