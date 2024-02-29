import classNames from "consts/classNames";

export default function ThemeButton() {
  // todo: implement this URGENTLY
  return (
    <button
      className={classNames.button.root}
      aria-label="Change to dark mode"
      title="Change to dark mode"
    >
      <span aria-hidden className="material-symbols-outlined">
        dark_mode
      </span>
    </button>
  );
}
