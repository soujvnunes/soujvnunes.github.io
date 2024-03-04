import { useTranslation } from "react-i18next";
import classNames from "consts/classNames";
import cn from "helpers/cn";
import Icon from "./Icon";

const socials = [
  {
    href: "https://medium.com/@soujvnunes",
    name: "Medium",
  },
  {
    href: "https://github.com/soujvnunes",
    name: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/soujvnunes/",
    name: "LinkedIn",
  },

  {
    href: "https://www.behance.net/soujvnunes",
    name: "Behance",
  },
] as const;

export default function Footer() {
  const [t] = useTranslation();

  return (
    <footer
      className={cn(
        classNames.surface.primary,
        classNames.container.root,
        "flex h-10 items-center text-xs",
      )}
    >
      <span className={classNames.text.secondary}>
        Copyright (c) {new Date().getFullYear()} <strong>soujvnunes</strong>
      </span>
      <ul className="ml-auto flex space-x-4">
        {socials.map(({ name, href }) => {
          const title = t("socials_label", {
            name,
          });

          return (
            <li key={name}>
              <a
                className="text-black/60 hover:text-black/80 dark:text-white/80 dark:hover:text-white"
                target="_blank"
                rel="noreferrer"
                title={title}
                href={href}
              >
                <Icon name={name} title={title} />
              </a>
            </li>
          );
        })}
      </ul>
    </footer>
  );
}
