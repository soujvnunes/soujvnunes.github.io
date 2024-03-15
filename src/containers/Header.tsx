import { twMerge } from "tailwind-merge";
import classNames from "consts/classNames";
import Icon from "components/Icon";
import SoujvnunesLogos from "./SoujvnunesLogos";
import ToggleLanguage from "./ToggleLanguage";

export default function Header() {
  return (
    <header
      className={twMerge(classNames.container.root, "flex h-16 items-center")}
    >
      <a href="/" className="mr-auto" aria-label="Go to home">
        <h1>
          <SoujvnunesLogos />
          <Icon name="Pen" className="-ml-1.5 -mr-1.5 align-middle" />
          design_
          <strong>engineer</strong>
        </h1>
      </a>
      <ToggleLanguage />
    </header>
  );
}
