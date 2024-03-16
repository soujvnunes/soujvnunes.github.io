import { twMerge } from "tailwind-merge";
import classNames from "consts/classNames";
import useCard from "hooks/useCard";

type CardContentProps = Pick<React.ComponentPropsWithoutRef<"p">, "children">;

export default function CardContent({ children }: CardContentProps) {
  const card = useCard();

  return (
    <p
      className={twMerge(
        classNames.text.color.secondary,
        "pb-2 pl-2 pr-2 pt-2",
      )}
      id={card.descriptionId}
    >
      {children}
    </p>
  );
}
