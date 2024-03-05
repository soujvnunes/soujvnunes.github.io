import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";
import classNames from "consts/classNames";
import me from "assets/me.jpg";

export default function IntroSection() {
  const [t] = useTranslation();

  return (
    <section
      className={twMerge(
        classNames.container.root,
        "flex grow flex-col justify-center pb-4 pt-4",
      )}
    >
      <p
        className={twMerge(
          classNames.text.secondary,
          "mb-2 ml-1 flex items-center gap-2 lg:ml-2 lg:gap-3",
        )}
      >
        <img alt="" className="h-10 w-10 rounded-lg lg:h-16 lg:w-16" src={me} />
        <span className="font-bold">
          <span className="lg:text-xl">
            {t("intro_caption_title")}{" "}
            <span className="text-black/80 dark:text-white">Victor</span>
          </span>
          <span className="block max-lg:text-xs">
            {t("intro_caption_description")}
          </span>
        </span>
      </p>
      <h2
        className={twMerge(
          classNames.text.headline,
          "mb-3 lg:mb-6 lg:text-8xl",
        )}
      >
        {t("intro_title")}
      </h2>
      {/*  
      
      todo: more about me 
      <p>
        <button
          className={twMerge(
            "font-serif italic text-2xl",
            classNames.text.secondary,
          )}
        >
          {t("intro_cta")}
          <MaterialSymbols
            name="trending_flat"
            className="ml-1 text-4xl align-middle wght-200"
          />
        </button>
      </p> */}
    </section>
  );
}
