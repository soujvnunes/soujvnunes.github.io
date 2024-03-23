import { Trans, useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";
import classNames from "consts/classNames";
import HeaderIntroMemoji from "./HeaderIntroMemoji";

export default function HeaderIntro() {
  const [t] = useTranslation();

  return (
    <>
      <p>
        <HeaderIntroMemoji className="-mr-20 align-middle" />
        <strong
          className={twMerge(
            classNames.text.color.secondary,
            "rounded-full border-b border-b-amber-700/10 bg-gradient-to-tl from-amber-500/20 py-5 pl-14 pr-8 dark:border-b-0 dark:border-t dark:border-t-amber-500/10",
          )}
        >
          {t("intro_caption_title")}{" "}
          <span className={classNames.text.color.primary}>Victor</span>
        </strong>
      </p>
      <h1 className={twMerge(classNames.text.variant.headline, "mb-10")}>
        <Trans
          i18nKey="intro_title"
          components={{
            primary: <span className="text-amber-500" />,
            secondary: <span className="text-indigo-500" />,
          }}
        />
      </h1>
    </>
  );
}
