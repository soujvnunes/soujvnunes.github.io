import { useId } from "react";
import classNames from "consts/classNames";
import cn from "helpers/cn";

interface CardProps {
  children: React.ReactNode;
  startItem?: React.ReactNode;
  endItem?: React.ReactNode;
  label: string;
  href: string;
}

export default function Card({
  children,
  label,
  endItem,
  startItem,
}: CardProps) {
  const labelId = useId();
  const descriptionId = useId();

  return (
    <article
      aria-labelledby={labelId}
      aria-describedby={descriptionId}
      className={cn(classNames.surface.primary, "p-2 rounded-2xl")}
    >
      <header className="flex items-center">
        {startItem}
        <h3 className="ml-2 font-bold truncate text-ellipsis" id={labelId}>
          {label}
        </h3>
        {endItem}
      </header>
      <p
        className={cn(classNames.text.secondary, "pb-2 pl-12")}
        id={descriptionId}
      >
        {children}
      </p>
    </article>
  );
}
