import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";
import classNames from "consts/classNames";
import ContributionsSectionProjects from "./ContributionsSectionProjects";

export default function ContributionsSection() {
  const [t] = useTranslation();

  return (
    <section
      role="feed"
      className={twMerge(classNames.container.root, "mb-4 lg:mb-6")}
    >
      <h2
        className={twMerge(
          classNames.text.secondary,
          classNames.text.title,
          "mb-2 lg:mb-4",
        )}
      >
        {t("contributions_title")}
      </h2>
      <ContributionsSectionProjects />
    </section>
  );
}
