import { twMerge } from "tailwind-merge";
import classNames from "consts/classNames";
import useCard from "hooks/useCard";
import { PickFrom } from "types/PickFrom";

interface CardProps extends PickFrom<"h3", "children"> {
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
    <header className="flex items-center">
      {startItem}
      <h3 className="ml-2 mr-auto truncate font-bold" id={card.labelId}>
        {children}
        <small
          className={twMerge(
            classNames.text.color.secondary,
            classNames.text.variant.caption,
            "block",
          )}
        >
          {subhead}
        </small>
      </h3>
      {endItem}
    </header>
  );
}
