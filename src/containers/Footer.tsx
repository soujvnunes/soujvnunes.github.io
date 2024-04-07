import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";
import classNames from "consts/classNames";
import FooterCopyright from "./FooterCopyright";
import FooterSocials from "./FooterSocials";
import Snackbars from "./Snackbars";

export default function Footer() {
  const [t] = useTranslation();

  return (
    <footer className={twMerge(classNames.container.root, "text-center")}>
      <Snackbars show title={t("web_analytics.title")}>
        {t("web_analytics.description")}
      </Snackbars>
      <FooterSocials />
      <FooterCopyright />
    </footer>
  );
}
