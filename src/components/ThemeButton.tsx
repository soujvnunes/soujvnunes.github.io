import classNames from "consts/classNames";
import cn from "helpers/cn";

export default function ThemeButton() {
  // todo: implement this URGENTLY
  return (
    <button
      className={cn(classNames.button.root, "-mr-2")}
      aria-label="Change to dark mode"
      title="Change to dark mode"
    >
      <span aria-hidden className="material-symbols-outlined">
        dark_mode
      </span>
    </button>
  );
}
