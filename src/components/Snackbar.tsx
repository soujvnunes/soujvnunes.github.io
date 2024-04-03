import { twMerge } from "tailwind-merge";
import classNames from "consts/classNames";
import { type Snackbar } from "stores/snackbars";

interface SnackbarProps extends Snackbar {
  endItem?: React.ReactNode;
}

export default function Snackbar({ title, children, endItem }: SnackbarProps) {
  return (
    <div
      role="alert"
      className={twMerge(classNames.surface.primary, "flex p-2 md:max-w-96")}
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
}
