import { twMerge } from "tailwind-merge";
import classNames from "consts/classNames";
import SoujvnunesLogos from "./SoujvnunesLogos";

export default function FooterCopyright() {
  return (
    <p className={twMerge(classNames.text.color.secondary, "py-3 leading-[0]")}>
      <SoujvnunesLogos />
      <span className="text-xs"> &copy; {fullYear}</span>
    </p>
  );
}

const fullYear = new Date().getFullYear();
