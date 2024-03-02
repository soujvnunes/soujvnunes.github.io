import classNames from "consts/classNames";
import cn from "helpers/cn";
import LanguageButton from "./LanguageButton";
import SoujvnunesLogos from "./SoujvnunesLogos";
import ThemeButton from "./ThemeButton";

export default function Header() {
  return (
    <header
      className={cn(
        "flex items-center h-16",
        classNames.surface.primary,
        classNames.container.root,
      )}
    >
      <SoujvnunesLogos />
      <ThemeButton />
      <LanguageButton />
    </header>
  );
}
