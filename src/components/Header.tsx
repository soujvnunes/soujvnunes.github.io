import { twMerge } from "tailwind-merge";
import classNames from "consts/classNames";
import LanguageButton from "./LanguageButton";
import SoujvnunesLogos from "./SoujvnunesLogos";

export default function Header() {
  return (
    <header
      className={twMerge(
        classNames.surface.primary,
        classNames.container.root,
        "flex h-16 items-center",
      )}
    >
      <SoujvnunesLogos />
      {/* 
      
      todo: mode changing

      <ThemeButton /> */}
      <LanguageButton />
    </header>
  );
}
