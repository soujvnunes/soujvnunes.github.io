import { useTranslation } from "react-i18next";
import Button from "components/Button";
import Icon from "components/Icon";

export default function ToggleLanguage() {
  const [t, i18n] = useTranslation();
  const title = t("change_lang");

  return (
    <Button
      className="min-w-32"
      aria-label={title}
      title={title}
      value={i18n.language === "en" ? "pt" : "en"}
      onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
        void i18n.changeLanguage(event.currentTarget.value)
      }
      endItem={<Icon name="Language" />}
    >
      {t("lang")}
    </Button>
  );
}
