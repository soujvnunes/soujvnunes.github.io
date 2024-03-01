import cn from "helpers/cn";

interface MaterialSymbolsProps {
  name: string;
  className?: string;
}

export default function MaterialSymbols({
  name,
  className,
}: MaterialSymbolsProps) {
  return (
    <span aria-hidden className={cn("material-symbols-outlined", className)}>
      {name}
    </span>
  );
}
