import { Lang } from "@/data/translations";

interface Props {
  lang: Lang;
  onToggle: () => void;
}

const LanguageToggle = ({ lang, onToggle }: Props) => (
  <button
    onClick={onToggle}
    className="fixed top-4 right-4 z-50 bg-card border border-border rounded-full px-4 py-2 text-sm font-medium shadow-md hover:shadow-lg transition-shadow"
  >
    {lang === "en" ? "🇰🇷 한국어" : "🇺🇸 English"}
  </button>
);

export default LanguageToggle;
