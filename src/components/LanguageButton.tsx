import { useTranslation } from "react-i18next";
import classNames from "consts/classNames";
import cn from "helpers/cn";

export default function LanguageButton() {
  const [t, i18n] = useTranslation();

  return (
    <button
      className={cn(classNames.button.root, classNames.button.outline)}
      name={i18n.language === "en" ? "pt" : "en"}
      aria-label={t(`change_lang.${i18n.language}`)}
      onClick={(event) => void i18n.changeLanguage(event.currentTarget.name)}
    >
      {i18n.language === "en" ? "pt" : "en"}
    </button>
  );
}
