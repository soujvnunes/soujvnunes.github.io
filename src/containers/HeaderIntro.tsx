import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";
import classNames from "consts/classNames";
import HeaderMemoji from "./HeaderMemoji";

export default function HeaderIntro() {
  const [t] = useTranslation();

  return (
    <>
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
      <h1 className={twMerge(classNames.text.variant.headline, "-mt-6 mb-10")}>
        {t("intro_title")}
      </h1>
    </>
  );
}
