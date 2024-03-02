import { useId } from "react";
import classNames from "consts/classNames";
import { type Icons } from "consts/icons";
import cn from "helpers/cn";
import Icon from "./Icon";
import MaterialSymbols from "./MaterialSymbols";

interface CardProps {
  children: React.ReactNode;
  label: string;
  href: string;
  icon: {
    name: keyof Icons;
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
        <h3 className="ml-2 font-bold truncate text-ellipsis" id={labelId}>
          {label}
        </h3>
        <a
          target="_blank"
          rel="noreferrer"
          href={href}
          aria-label={`Visit ${label}`}
          className={cn(
            classNames.button.root,
            classNames.button.text,
            "ml-auto",
          )}
        >
          <MaterialSymbols name="arrow_outward" />
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
