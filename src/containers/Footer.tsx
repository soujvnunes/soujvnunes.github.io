import { twMerge } from "tailwind-merge";
import classNames from "consts/classNames";
import FooterCopyright from "./FooterCopyright";
import FooterSocials from "./FooterSocials";

export default function Footer() {
  return (
    <footer className={twMerge(classNames.container.root, "text-center")}>
      <FooterSocials />
      <FooterCopyright />
    </footer>
  );
}
