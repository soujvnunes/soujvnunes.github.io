import { useId } from "react";
import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";
import classNames from "consts/classNames";
import ContributionsProjects from "./ContributionsProjects";

export default function Contributions() {
  const [t] = useTranslation();
  const labelId = useId();

  return (
    <section className={classNames.container.root}>
      <h2
        id={labelId}
        className={twMerge(
          classNames.text.color.secondary,
          classNames.text.variant.title,
          "mb-2 lg:mb-4",
        )}
      >
        {t("contributions_title")}
      </h2>
      <ul
        role="feed"
        aria-busy="false"
        aria-labelledby={labelId}
        className={twMerge(classNames.grid.root, classNames.grid.col[4][0])}
      >
        <ContributionsProjects />
      </ul>
    </section>
  );
}
