import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { Tab } from "@headlessui/react";
import { twMerge } from "tailwind-merge";
import classNames from "consts/classNames";
import HeaderMemoji from "./HeaderMemoji";
import ToggleLanguage from "./ToggleLanguage";

export default function Header() {
  const [t] = useTranslation();
  const [height, setHeight] = useState(0);
  const handleHeader = useCallback((node: HTMLElement | null) => {
    if (node !== null) {
      setHeight(node.getBoundingClientRect().height);
    }
  }, []);

  return (
    <>
      <div
        aria-hidden
        className={twMerge(
          classNames.surface.primary,
          "absolute inset-x-0 top-0 -z-10",
        )}
        style={{ height: height + 64 }}
      >
        <div className="h-full w-full bg-gradient-to-r from-indigo-500/40 to-amber-500/40">
          <div className="h-full w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-100 dark:from-stone-900" />
        </div>
      </div>
      <header ref={handleHeader} className="pb-4 pt-10 text-center">
        <p
          className={twMerge(
            classNames.text.color.secondary,
            "inline-flex h-16 items-center rounded-full bg-gradient-to-r from-indigo-500/40 to-amber-500/40 pr-8",
          )}
        >
          <HeaderMemoji />
          <strong>
            {t("intro_caption_title")}{" "}
            <span className="text-black/80 dark:text-white">Victor</span>
          </strong>
        </p>
        <h1
          className={twMerge(classNames.text.variant.headline, "-mt-6 mb-10")}
        >
          {t("intro_title")}
        </h1>
        <nav className="mx-2 flex items-center">
          <Tab.List className="mr-auto space-x-2 lg:space-x-4">
            <Tab
              className={twMerge(
                classNames.text.color.secondary,
                classNames.text.variant.title,
              )}
            >
              Contribution
            </Tab>
            <Tab
              className={twMerge(
                classNames.text.color.secondary,
                classNames.text.variant.title,
              )}
            >
              About
            </Tab>
          </Tab.List>
          <ToggleLanguage />
        </nav>
      </header>
    </>
  );
}
