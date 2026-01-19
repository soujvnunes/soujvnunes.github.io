import { useTranslation } from "react-i18next";
import isLgScreen from "helpers/isLgScreen";
import Button from "components/Button";
import Icon from "components/Icon";

export default function HeaderNavLanguage() {
  const [t, i18n] = useTranslation();
  const title = t("change_lang");

  return (
    <Button
      className="min-w-32"
      aria-label={title}
      title={title}
      endItem={<Icon name="Language" />}
      value={i18n.language === "en" ? "pt" : "en"}
      size={isLgScreen ? "md" : "sm"}
      onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
        const nextLang = event.currentTarget.value;
        const url = new URL(window.location.href);
        url.searchParams.set("hl", nextLang);
        url.searchParams.delete("lng");
        window.history.pushState({}, "", url);
        void i18n.changeLanguage(nextLang);
      }}
    >
      {t("lang")}
    </Button>
  );
}
