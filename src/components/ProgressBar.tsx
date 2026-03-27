import { t, Lang } from "@/data/translations";

interface Props {
  current: number;
  total: number;
  lang: Lang;
}

const ProgressBar = ({ current, total, lang }: Props) => (
  <div className="w-full max-w-2xl mx-auto mb-6">
    <div className="flex justify-between text-sm text-muted-foreground mb-2">
      <span>{t("step", lang)} {current} {t("of", lang)} {total}</span>
      <span>{Math.round((current / total) * 100)}%</span>
    </div>
    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
      <div
        className="h-full bg-progress rounded-full transition-all duration-500 ease-out"
        style={{ width: `${(current / total) * 100}%` }}
      />
    </div>
    <div className="flex justify-between mt-2">
      {Array.from({ length: total }, (_, i) => (
        <div
          key={i}
          className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
            i + 1 <= current ? "bg-progress" : "bg-muted"
          }`}
        />
      ))}
    </div>
  </div>
);

export default ProgressBar;
