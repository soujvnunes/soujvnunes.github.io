import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";
import classNames from "consts/classNames";
import HeaderIntro from "./HeaderIntro";
import HeaderNav from "./HeaderNav";

export default function Header() {
  const [t] = useTranslation();
  const [height, setHeight] = useState(0);
  const handleHeader = useCallback((node: HTMLElement | null) => {
    if (node !== null) {
      setHeight(node.getBoundingClientRect().height);
    }
  }, []);

  return (
    <>
      <div
        aria-hidden
        className={twMerge(
          classNames.surface.primary,
          "absolute inset-x-0 top-0 -z-10",
        )}
        style={{ height: height + 64 }}
      >
        <div className="h-full w-full bg-gradient-to-r from-indigo-500/40 to-amber-500/40">
          <div className="h-full w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-100 dark:from-stone-900" />
        </div>
      </div>
      <header ref={handleHeader} className="pb-4 pt-10 text-center">
        <HeaderIntro />
        <HeaderNav />
      </header>
    </>
  );
}
