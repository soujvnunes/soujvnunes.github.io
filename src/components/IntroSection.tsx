import { useTranslation } from "react-i18next";
import classNames from "consts/classNames";
import cn from "helpers/cn";
import MaterialSymbols from "./MaterialSymbols";

export default function IntroSection() {
  const [t] = useTranslation();

  return (
    <section
      className={cn(
        "flex flex-col justify-center grow pt-4 pb-4",
        classNames.container.root,
      )}
    >
      <p className={cn("inline-block ml-1 lg:ml-2", classNames.text.secondary)}>
        <img
          src="/me.jpg"
          className="inline-block w-10 h-10 lg:w-16 lg:h-16"
          alt="Vite logo"
        />
        <strong className="ml-2">{t("intro_caption")}</strong>
      </p>
      <h2 className="mb-3 text-5xl font-bold lg:mb-6 lg:text-8xl text-balance">
        {t("intro_title")}
      </h2>
      <p>
        <button
          className={cn(
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
      </p>
    </section>
  );
}
