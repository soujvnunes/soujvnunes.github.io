import { useTranslation } from "react-i18next";
import classNames from "consts/classNames";
import cn from "helpers/cn";

const socials = [
  {
    href: "https://github.com/soujvnunes",
    title: "Github",
  },
  {
    href: "https://www.linkedin.com/in/soujvnunes/",
    title: "LinkedIn",
  },
  {
    href: "https://medium.com/@soujvnunes",
    title: "Medium",
  },
  {
    href: "https://www.behance.net/soujvnunes",
    title: "Behance",
  },
];

export default function Footer() {
  const [t] = useTranslation();

  return (
    <footer
      className={cn(
        classNames.surface.primary,
        "flex items-center pl-8 pr-8 text-xs max-lg:pb-2 max-lg:pt-2 lg:h-10 max-lg:flex-col",
      )}
    >
      <span className="max-lg:mb-2">
        Copyright (c) {new Date().getFullYear()} soujvnunes
      </span>
      <ul className="flex space-x-4 lg:ml-auto">
        {socials.map((social) => (
          <li key={social.title}>
            <a
              className="underline uppercase text-black/60 hover:text-black/80 dark:text-white/80 dark:hover:text-white"
              target="_blank"
              rel="noreferrer"
              href={social.href}
            >
              <span className="sr-only">{t("socials_label")}</span>
              <strong>{social.title}</strong>
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
