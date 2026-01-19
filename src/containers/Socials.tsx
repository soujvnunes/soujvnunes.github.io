import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";
import Button from "components/Button";
import Icon from "components/Icon";
import { PickFrom } from "types/PickFrom";

interface SocialsProps extends PickFrom<"ul", "className"> {
  inline?: boolean;
}

export default function Socials({ className, inline }: SocialsProps) {
  const [t] = useTranslation();

  return (
    <ul
      className={twMerge(
        inline && "space-x-2",
        !inline &&
          "inline-grid grid-cols-[104px_104px] grid-rows-[104px_104px] gap-2",
        className,
      )}
    >
      {socials.map(({ name, href }) => {
        const title = t("socials_label", {
          name,
        });
        const isBehance = !inline && name === "Behance";
        const isGitHub = !inline && name === "GitHub";
        const isLinkedIn = !inline && name === "LinkedIn";

        return (
          <li
            key={name}
            className={twMerge(
              inline && "inline-block",
              isBehance && "text-right",
              isGitHub && "text-left",
              isLinkedIn && "flex items-end text-left",
            )}
          >
            <Button
              as="a"
              variant="text"
              target="_blank"
              rel="noreferrer"
              href={href}
              title={title}
              aria-label={title}
              className={twMerge(
                !inline && "inline-flex bg-gradient-to-tl",
                isLinkedIn &&
                  "h-10 w-10 from-linkedin-500/20 to-linkedin-500/10 text-linkedin-500 dark:text-linkedin-400",
                isGitHub &&
                  "h-16 w-16 from-neutral-700/20 to-neutral-700/10 text-neutral-700 dark:from-white/10 dark:to-white/5 dark:text-white",
                !inline &&
                  name === "Medium" &&
                  "h-[104px] w-[104px] from-neutral-400/20 to-neutral-400/10 text-black/80 dark:from-gray-50/10 dark:to-gray-100/5 dark:text-gray-200",
                isBehance &&
                  "h-[88px] w-[88px] from-behance-500/20 to-behance-500/10 text-behance-500 dark:text-behance-400",
              )}
            >
              <Icon name={name} />
            </Button>
          </li>
        );
      })}
    </ul>
  );
}

const socials = [
  {
    href: "https://medium.com/@soujvnunes",
    name: "Medium",
  },
  {
    href: "https://www.linkedin.com/in/soujvnunes/",
    name: "LinkedIn",
  },
  {
    href: "https://www.behance.net/soujvnunes",
    name: "Behance",
  },
  {
    href: "https://github.com/soujvnunes",
    name: "GitHub",
  },
] as const;
