import { useCallback, useState } from "react";
import { twMerge } from "tailwind-merge";
import classNames from "consts/classNames";

type HeaderProps = Pick<
  React.ComponentPropsWithoutRef<"header">,
  "children" | "className"
>;

export default function Header({ className, children }: HeaderProps) {
  const [height, setHeight] = useState(0);
  const handleHeader = useCallback((node: HTMLElement | null) => {
    if (node !== null) {
      setHeight(node.getBoundingClientRect().height);
    }
  }, []);

  return (
    <header
      className={twMerge("pb-2 pt-10 text-center lg:pb-4", className)}
      ref={handleHeader}
    >
      <div
        style={{
          height: height + 56,
        }}
        className={twMerge(
          classNames.surface.primary,
          "absolute inset-x-0 top-0 -z-10",
        )}
      >
        <div className="h-full w-full bg-gradient-to-r from-amber-500/40 to-indigo-500/40 dark:from-amber-500/20 dark:to-indigo-500/20">
          <div className="h-full w-full bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-gray-100 lg:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] dark:from-stone-900" />
        </div>
      </div>
      {children}
    </header>
  );
}
