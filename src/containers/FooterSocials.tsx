import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";
import classNames from "consts/classNames";
import Socials from "./Socials";

export default function FooterSocials() {
  const [t] = useTranslation();

  return (
    <div className="mb-6 mt-10 max-md:space-y-4 md:flex md:flex-row-reverse md:items-center md:justify-center">
      <div className="md:basis-4/12 md:text-left lg:basis-3/12">
        <p
          className={twMerge(
            classNames.text.variant.caption,
            "text-amber-600 md:pl-1 dark:text-amber-400",
          )}
        >
          {t("footer_socials_caption")}
        </p>
        <h2 className="text-2xl font-bold md:pb-6 md:text-[2.75rem]/[2.75rem]">
          {t("footer_socials_title")}
        </h2>
      </div>
      <div className="md:basis-4/12 md:text-right lg:basis-3/12">
        <Socials />
      </div>
    </div>
  );
}
