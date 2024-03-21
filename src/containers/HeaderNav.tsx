import { useTranslation } from "react-i18next";
import { Tab } from "@headlessui/react";
import { twMerge } from "tailwind-merge";
import classNames from "consts/classNames";
import objectKeys from "helpers/objectKeys";
import useTab from "hooks/useTab";
import Button from "components/Button";
import Icon from "components/Icon";

export default function HeaderNav() {
  const tab = useTab();
  const [t, i18n] = useTranslation();
  const title = t("change_lang");

  return (
    <nav className="mx-2 flex items-center">
      <Tab.List className="mr-auto space-x-2 lg:space-x-4">
        {objectKeys(tab.group).map((_tab) => (
          <Tab
            key={_tab}
            value={_tab}
            onClick={tab.set}
            className={({ selected }) =>
              twMerge(
                classNames.text.color.secondary,
                classNames.text.variant.title,
                selected && classNames.text.color.primary,
              )
            }
          >
            {t(`tabs.${_tab}`)}
          </Tab>
        ))}
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
