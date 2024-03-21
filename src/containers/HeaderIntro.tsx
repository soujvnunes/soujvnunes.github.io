import { Trans, useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";
import classNames from "consts/classNames";
import HeaderIntroMemoji from "./HeaderIntroMemoji";

export default function HeaderIntro() {
  const [t] = useTranslation();

  return (
    <>
      <p className="inline-flex items-center">
        <HeaderIntroMemoji />
        <strong
          className={twMerge(
            classNames.text.color.secondary,
            "-ml-10 rounded-full bg-gradient-to-r from-amber-500/20 to-indigo-500/20 px-5 py-3 lg:-ml-14 lg:px-8 lg:py-5",
          )}
        >
          {t("intro_caption_title")}{" "}
          <span className={classNames.text.color.primary}>Victor</span>
        </strong>
      </p>
      <h1
        className={twMerge(
          classNames.text.variant.headline,
          "-mt-4 mb-10 lg:-mt-8",
        )}
      >
        <Trans
          i18nKey="intro_title"
          components={{
            primary: <span className="text-indigo-500" />,
            secondary: <span className="text-amber-500" />,
          }}
        />
      </h1>
    </>
  );
}
