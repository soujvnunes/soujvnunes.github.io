import classNames from "consts/classNames";
import cn from "helpers/cn";
import LanguageButton from "./LanguageButton";
import SoujvnunesLogos from "./SoujvnunesLogos";

export default function Header() {
  return (
    <header
      className={cn(
        "flex h-16 items-center",
        classNames.surface.primary,
        classNames.container.root,
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
