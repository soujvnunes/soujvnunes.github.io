import { twMerge } from "tailwind-merge";
import classNames from "consts/classNames";
import useCard from "hooks/useCard";
import { PickFrom } from "types/PickFrom";

type CardContentProps = PickFrom<"p", "children">;

export default function CardContent({ children }: CardContentProps) {
  const card = useCard();

  return (
    <p
      className={twMerge(
        classNames.text.color.primary,
        "pb-2 pt-2 max-md:pl-2 max-md:pr-2",
      )}
      id={card.descriptionId}
    >
      {children}
    </p>
  );
}
