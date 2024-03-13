import useCard from "hooks/useCard";

interface CardProps
  extends Pick<React.ComponentPropsWithoutRef<"h3">, "children"> {
  startItem?: React.ReactNode;
  endItem?: React.ReactNode;
  subhead?: string;
}

export default function CardHeader({
  endItem,
  startItem,
  subhead,
  children,
}: CardProps) {
  const card = useCard();

  return (
    <header className="flex items-center pr-2">
      {startItem}
      <h3
        className="ml-2 mr-auto truncate text-ellipsis font-bold"
        id={card.labelId}
      >
        {children}
        <small className="block text-black/60 dark:text-white/60">
          {subhead}
        </small>
      </h3>
      {endItem}
    </header>
  );
}
