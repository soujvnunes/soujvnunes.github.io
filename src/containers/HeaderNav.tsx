import { useTranslation } from "react-i18next";
import { Tab } from "@headlessui/react";
import { twMerge } from "tailwind-merge";
import classNames from "consts/classNames";
import Button from "components/Button";
import Icon from "components/Icon";

export default function HeaderNav() {
  const [t, i18n] = useTranslation();
  const title = t("change_lang");

  return (
    <nav className="mx-2 flex items-center">
      <Tab.List className="mr-auto space-x-2 lg:space-x-4">
        <Tab
          className={twMerge(
            classNames.text.color.secondary,
            classNames.text.variant.title,
          )}
        >
          {t("contributions_title")}
        </Tab>
        <Tab
          className={twMerge(
            classNames.text.color.secondary,
            classNames.text.variant.title,
          )}
        >
          {t("about_title")}
        </Tab>
      </Tab.List>
      <Button
        className="plausible-event-name=Toggled+language min-w-32"
        aria-label={title}
        title={title}
        endItem={<Icon name="Language" />}
        value={i18n.language === "en" ? "pt" : "en"}
        onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
          void i18n.changeLanguage(event.currentTarget.value)
        }
      >
        {t("lang")}
      </Button>
    </nav>
  );
}
