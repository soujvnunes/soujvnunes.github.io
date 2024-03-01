import classNames from "consts/classNames";
import cn from "helpers/cn";
import MaterialSymbols from "./MaterialSymbols";

export default function ThemeButton() {
  // todo: implement this URGENTLY
  return (
    <button
      className={cn(classNames.button.root, "-mr-2")}
      aria-label="Change to dark mode"
      title="Change to dark mode"
    >
      <MaterialSymbols name="dark_mode" />
    </button>
  );
}
