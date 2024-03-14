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
        "flex h-10 items-center text-xs",
      )}
    >
      <span className={classNames.text.secondary}>
        <SoujvnunesSymbol className="text-base" /> (c){" "}
        {new Date().getFullYear()}
      </span>
      <FooterSocials />
    </footer>
  );
}
