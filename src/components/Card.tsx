import { useId } from "react";
import { twMerge } from "tailwind-merge";
import classNames from "consts/classNames";

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
      className={twMerge(classNames.surface.primary, "rounded-2xl p-2")}
    >
      <header className="flex items-center">
        {startItem}
        <h3 className="ml-2 truncate text-ellipsis font-bold" id={labelId}>
          {label}
        </h3>
        {endItem}
      </header>
      <p
        className={twMerge(classNames.text.secondary, "pb-2 pl-12")}
        id={descriptionId}
      >
        {children}
      </p>
    </article>
  );
}
