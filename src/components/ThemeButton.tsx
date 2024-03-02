import { useTranslation } from "react-i18next";
import classNames from "consts/classNames";
import cn from "helpers/cn";
import MaterialSymbols from "./MaterialSymbols";

export default function ThemeButton() {
  const [t] = useTranslation();

  return (
    <button
      className={cn(classNames.button.root, "mr-2")}
      aria-label={t("change_mode.light")}
      title={t("change_mode.light")}
    >
      <MaterialSymbols name="dark_mode" />
    </button>
  );
}
