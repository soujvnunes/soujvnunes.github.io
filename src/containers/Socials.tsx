import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";
import Button from "components/Button";
import Icon from "components/Icon";

interface SocialsProps
  extends Pick<React.ComponentPropsWithoutRef<"ul">, "className"> {
  inline?: boolean;
}

export default function Socials({ className, inline }: SocialsProps) {
  const [t] = useTranslation();

  return (
    <ul
      className={twMerge(
        inline
          ? "space-x-2"
          : "inline-grid grid-cols-[104px_104px] grid-rows-[104px_104px] gap-2",
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
            className={twMerge(
              inline && "inline-block",
              isBehance && "text-right",
              isGitHub && "text-left",
              isLinkedIn && "flex items-end text-left",
            )}
            key={name}
          >
            <Button
              as="a"
              variant="text"
              target="_blank"
              rel="noreferrer"
              className={twMerge(
                "plausible-event-name=Visited+socials",
                !inline && "inline-flex bg-gradient-to-tl",
                isLinkedIn &&
                  "h-10 w-10 from-[#0A66C2]/20 to-[#0A66C2]/10 text-[#0A66C2] dark:text-[#3782CD]",
                isGitHub &&
                  "h-16 w-16 from-[#333333]/20 to-[#333333]/10 text-[#333333] dark:from-white/10 dark:to-white/5 dark:text-white",
                !inline &&
                  name === "Medium" &&
                  "h-[104px] w-[104px] from-[#aaaaaa]/20 to-[#aaaaaa]/10 text-black/80 dark:from-gray-50/10 dark:to-gray-100/5 dark:text-gray-200",
                isBehance &&
                  "h-[88px] w-[88px] from-[#0057FF]/20 to-[#0057FF]/10 text-[#0057FF] dark:text-[#2E76FF]",
              )}
              href={href}
              title={title}
            >
              <Icon name={name} title={title} />
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
