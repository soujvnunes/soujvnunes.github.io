import { PickFrom } from "types/PickFrom";

type SoujvnunesSymbolProps = PickFrom<"strong", "className">;

export default function SoujvnunesSymbol(props: SoujvnunesSymbolProps) {
  return (
    <strong {...props}>
      <span className="tracking-[-0.2em]">
        <span className="text-red-600 dark:text-red-400">j</span>
        <span className="text-amber-600 dark:text-amber-400">v</span>
      </span>
      <span className="text-blue-600 dark:text-blue-400">n</span>
    </strong>
  );
}
