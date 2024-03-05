import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";
import classNames from "consts/classNames";
import MaterialSymbols from "./MaterialSymbols";

export default function ThemeButton() {
  const [t] = useTranslation();

  return (
    <button
      className={twMerge(
        classNames.button.root,
        classNames.button.text,
        "mr-2",
      )}
      aria-label={t("change_mode.light")}
      title={t("change_mode.light")}
    >
      <MaterialSymbols name="dark_mode" />
    </button>
  );
}
 