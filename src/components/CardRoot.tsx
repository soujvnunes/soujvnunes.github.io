import { twMerge } from "tailwind-merge";
import useCard from "hooks/useCard";
import { PickFrom } from "types/PickFrom";

type CardRootProps = PickFrom<"article", "children" | "className">;

export default function CardRoot({ className, ...props }: CardRootProps) {
  const card = useCard();

  return (
    <article
      aria-labelledby={card.labelId}
      aria-describedby={card.descriptionId}
      className={twMerge(
        "flex gap-4 rounded-2xl p-2 max-md:flex-wrap",
        className,
      )}
      {...props}
    />
  );
}
