import { twMerge } from "tailwind-merge";

interface MaterialSymbolsProps {
  name: string;
  className?: string;
}

export default function MaterialSymbols({
  name,
  className,
}: MaterialSymbolsProps) {
  return (
    <span
      aria-hidden
      className={twMerge("material-symbols-outlined", className)}
    >
      {name}
    </span>
  );
}
