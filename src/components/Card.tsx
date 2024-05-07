import { useId, useState } from "react";
import { twMerge } from "tailwind-merge";
import classNames from "consts/classNames";
import CardContext from "config/CardContext";
import { PickFrom } from "types/PickFrom";

type CardProps = PickFrom<
  "article",
  "children" | "className" | "aria-labelledby" | "aria-describedby"
>;

export default function Card({ className, ...props }: CardProps) {
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
        className={twMerge(classNames.surface.primary, className)}
        {...props}
      />
    </CardContext.Provider>
  );
}
