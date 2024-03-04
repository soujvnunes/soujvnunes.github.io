import { useTranslation } from "react-i18next";
import classNames from "consts/classNames";
import cn from "helpers/cn";
import me from "assets/me.jpg";

export default function IntroSection() {
  const [t] = useTranslation();

  return (
    <section
      className={cn(
        "flex grow flex-col justify-center pb-4 pt-4",
        classNames.container.root,
      )}
    >
      <p className={cn("ml-1 inline-block lg:ml-2", classNames.text.secondary)}>
        <img
          className="inline-block h-10 w-10 lg:h-16 lg:w-16"
          alt=""
          src={me}
        />
        <strong className="ml-2">{t("intro_caption")}</strong>
      </p>
      <h2 className={cn(classNames.text.headline, "mb-3 lg:mb-6 lg:text-8xl")}>
        {t("intro_title")}
      </h2>
      {/* 
      
      todo: more about me 
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
      </p> */}
    </section>
  );
}
