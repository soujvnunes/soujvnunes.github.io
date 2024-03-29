import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";
import classNames from "consts/classNames";
import tabs from "config/tabs";

export default function HeaderNavTabs() {
  const [t] = useTranslation();

  return (
    <nav className="mr-auto space-x-2 lg:space-x-4">
      <a
        href={`/?tab=${tabs.contributions}`}
        className={twMerge(
          classNames.text.color.secondary,
          classNames.text.variant.title,
          "inline-flex ui-selected:text-black/80 ui-selected:dark:text-white",
          // TODO: remove on 2.1
          "pointer-events-none",
        )}
      >
        {t(`tabs.${tabs.contributions}`)}
      </a>
      {/** TODO: implement About on 2.1 */}
    </nav>
  );
}
