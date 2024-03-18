import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";
import classNames from "consts/classNames";
import IntroMemoji from "./IntroMemoji";

export default function Intro() {
  const [t] = useTranslation();

  return (
    <section
      className={twMerge(
        classNames.container.root,
        "min-h-64 grow pb-10 pt-10 text-center",
      )}
    >
      <p className={twMerge("mb-2 inline-flex items-center")}>
        <IntroMemoji />
        <span
          className={twMerge(
            classNames.text.color.secondary,
            classNames.surface.primary,
            "rounded-br-full rounded-tr-full px-6 py-4 font-bold lg:px-12 lg:py-8 lg:text-xl",
          )}
        >
          {t("intro_caption_title")}{" "}
          <span className="text-black/80 dark:text-white">Victor</span>
        </span>
      </p>
      <h2
        className={twMerge(
          classNames.text.variant.headline,
          "mb-3 lg:mb-6 lg:text-8xl",
        )}
      >
        {t("intro_title")}
      </h2>
    </section>
  );
}
