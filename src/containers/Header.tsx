import { twMerge } from "tailwind-merge";
import classNames from "consts/classNames";
import isLgScreen from "helpers/isLgScreen";
import useBoundingClient from "hooks/useBoundingClientRect";

type HeaderProps = Pick<React.ComponentPropsWithoutRef<"header">, "children">;

export default function Header({ children }: HeaderProps) {
  const boundingClient = useBoundingClient();

  return (
    <header
      ref={boundingClient.ref}
      className={twMerge(classNames.container.root, "pb-4 pt-10 text-center")}
    >
      <div
        style={{
          height: boundingClient.rect.height + (isLgScreen ? 56 : 48),
        }}
        className={twMerge(
          classNames.surface.primary,
          "absolute inset-x-0 top-0 -z-10",
        )}
      >
        <div className="h-full w-full bg-gradient-to-r from-indigo-500/40 to-amber-500/40 dark:from-indigo-500/20 dark:to-amber-500/20">
          <div className="h-full w-full bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-gray-100 lg:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] dark:from-stone-900" />
        </div>
      </div>
      {children}
    </header>
  );
}
