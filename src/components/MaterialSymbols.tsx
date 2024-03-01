interface MaterialSymbolsProps {
  name: string;
}

export default function MaterialSymbols({ name }: MaterialSymbolsProps) {
  return (
    <span aria-hidden className="material-symbols-outlined">
      {name}
    </span>
  );
}
