import { useId } from "react";
import classNames from "consts/classNames";
import { type IconNames } from "consts/icons";
import cn from "helpers/cn";
import Icon from "./Icon";

interface CardProps {
  children: React.ReactNode;
  label: string;
  href: string;
  icon: {
    name: IconNames;
  };
  className?: {
    startItem?: string;
  };
}

export default function Card({
  children,
  label,
  href,
  icon,
  className,
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
        <span
          className={cn(
            "flex w-10 h-10 shrink-0 rounded-lg",
            className?.startItem,
          )}
        >
          <Icon className="m-auto" name={icon.name} />
        </span>
        <h3 className="ml-2 font-bold" id={labelId}>
          {label}
        </h3>
        <a
          className={cn(classNames.button.root, "ml-auto")}
          target="_blank"
          rel="noreferrer"
          aria-label={`Visit ${label}`}
          href={href}
        >
          <span aria-hidden className="material-symbols-outlined">
            arrow_outward
          </span>
        </a>
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
