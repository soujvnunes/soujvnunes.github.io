import { useTranslation } from "react-i18next";
import ContributionsProjects from "./ContributionsProjects";

export default function Contributions() {
  const [t] = useTranslation();

  return (
    <ul
      role="feed"
      aria-busy="false"
      aria-label={t("contributions_title")}
      className="space-y-4"
    >
      <ContributionsProjects />
    </ul>
  );
}
