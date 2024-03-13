import { useId, useState } from "react";
import { twMerge } from "tailwind-merge";
import classNames from "consts/classNames";
import { CardContext } from "hooks/useCard";

type CardProps = Pick<React.ComponentPropsWithoutRef<"article">, "children">;

export default function Card({ children }: CardProps) {
  const labelId = useId();
  const descriptionId = useId();
  const [ids] = useState({
    labelId,
    descriptionId,
  });

  return (
    <CardContext.Provider value={ids}>
      <article
        aria-labelledby={labelId}
        aria-describedby={descriptionId}
        className={twMerge(
          classNames.surface.primary,
          "flex h-full flex-col rounded-2xl p-2",
        )}
      >
        {children}
      </article>
    </CardContext.Provider>
  );
}
