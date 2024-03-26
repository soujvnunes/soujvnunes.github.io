import { twMerge } from "tailwind-merge";
import useCard from "hooks/useCard";

type CardRootProps = Pick<
  React.ComponentPropsWithoutRef<"article">,
  "children" | "className"
>;

export default function Card({ className, ...props }: CardRootProps) {
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
