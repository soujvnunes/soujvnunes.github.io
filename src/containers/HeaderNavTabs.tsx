import { useTranslation } from "react-i18next";
import { Tab } from "@headlessui/react";
import { twMerge } from "tailwind-merge";
import classNames from "consts/classNames";
import isLgScreen from "helpers/isLgScreen";
import objectKeys from "helpers/objectKeys";
import useTab from "hooks/useTab";
import Button from "components/Button";

export default function HeaderNavTabs() {
  const tab = useTab();
  const [t] = useTranslation();

  return (
    <Tab.List className="mr-auto space-x-2 lg:space-x-4">
      {objectKeys(tab.group).map((_tab) => (
        <Tab
          variant="text"
          key={_tab}
          value={_tab}
          onClick={tab.set}
          as={isLgScreen ? undefined : Button}
          className={twMerge(
            classNames.text.color.secondary,
            classNames.text.variant.title,
            "inline-flex ui-selected:text-black/80 ui-selected:dark:text-white",
          )}
        >
          {t(`tabs.${_tab}`)}
        </Tab>
      ))}
    </Tab.List>
  );
}
