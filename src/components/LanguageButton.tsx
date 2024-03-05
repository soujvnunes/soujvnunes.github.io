import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";
import classNames from "consts/classNames";

export default function LanguageButton() {
  const [t, i18n] = useTranslation();
  const title = t("change_lang");

  return (
    <button
      aria-label={title}
      title={title}
      name={i18n.language === "en" ? "pt" : "en"}
      className={twMerge(classNames.button.root, classNames.button.outline)}
      onClick={(event) => void i18n.changeLanguage(event.currentTarget.name)}
    >
      {i18n.language === "en" ? "en" : "pt"}
    </button>
  );
}
