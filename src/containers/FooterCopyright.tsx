import { twMerge } from "tailwind-merge";
import classNames from "consts/classNames";
import SoujvnunesSymbol from "./SoujvnunesSymbol";

export default function FooterCopyright() {
  return (
    <p className={twMerge(classNames.text.color.secondary, "pl-4 leading-[0]")}>
      <SoujvnunesSymbol />
      <span className="text-xs"> &copy; {fullYear}</span>
    </p>
  );
}

const fullYear = new Date().getFullYear();
