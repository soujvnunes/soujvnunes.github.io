import { twMerge } from "tailwind-merge";
import classNames from "consts/classNames";
import useCard from "hooks/useCard";
import { PickFrom } from "types/PickFrom";

type CardRootProps = PickFrom<"article", "children" | "className">;

export default function CardRoot({ className, ...props }: CardRootProps) {
  const card = useCard();

  return (
    <article
      aria-labelledby={card.labelId}
      aria-describedby={card.descriptionId}
      className={twMerge(classNames.surface.primary, className)}
      {...props}
    />
  );
}
