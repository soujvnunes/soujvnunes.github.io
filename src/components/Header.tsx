import { twMerge } from "tailwind-merge";
import classNames from "consts/classNames";
import LanguageButton from "./LanguageButton";
import MaterialSymbols from "./MaterialSymbols";
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
      <a href="/" className="mr-auto" aria-label="Go to home">
        <h1>
          <SoujvnunesLogos />
          <MaterialSymbols
            name="&#xf755;"
            className="-ml-1.5 -mr-1.5 align-middle"
          />
          design_
          <strong>engineer</strong>
        </h1>
      </a>
      <LanguageButton />
    </header>
  );
}
