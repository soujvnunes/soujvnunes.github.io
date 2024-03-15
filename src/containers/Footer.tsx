import { twMerge } from "tailwind-merge";
import classNames from "consts/classNames";
import FooterSocials from "./FooterSocials";
import SoujvnunesSymbol from "./SoujvnunesSymbol";

export default function Footer() {
  return (
    <footer
      className={twMerge(
        classNames.surface.primary,
        classNames.container.root,
        "flex h-10 items-center",
      )}
    >
      <p className={twMerge(classNames.text.secondary, "leading-[0]")}>
        <SoujvnunesSymbol />
        <span className="text-xs"> &copy; {new Date().getFullYear()}</span>
      </p>
      <ul className="ml-auto space-x-1">
        <FooterSocials />
      </ul>
    </footer>
  );
}
