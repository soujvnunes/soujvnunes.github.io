import { twMerge } from "tailwind-merge";
import classNames from "consts/classNames";
import FooterCopyright from "./FooterCopyright";
import Socials from "./Socials";

export default function Footer() {
  return (
    <footer
      className={twMerge(classNames.container.root, "flex h-16 items-center")}
    >
      <FooterCopyright />
      <Socials className="ml-auto" />
    </footer>
  );
}
