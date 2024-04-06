import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import classNames from "consts/classNames";
import { type PickFrom } from "types/PickFrom";

export interface SnackbarProps
  extends PickFrom<"div", "className" | "children" | "style"> {
  title: string;
  endItem?: React.ReactNode;
}

const Snackbar = forwardRef<HTMLDivElement, SnackbarProps>(function Snackbar(
  { title, children, endItem, className, ...props },
  ref,
) {
  return (
    <div
      role="alert"
      ref={ref}
      className={twMerge(
        classNames.surface.primary,
        "inline-flex p-2",
        className,
      )}
      {...props}
    >
      <p className="px-2 pb-2 leading-[1]">
        <strong className="my-2 block">{title}</strong>
        <span
          className={twMerge(
            classNames.text.color.secondary,
            "text-balance text-xs",
          )}
        >
          {children}
        </span>
      </p>
      {endItem}
    </div>
  );
});

export default Snackbar;
