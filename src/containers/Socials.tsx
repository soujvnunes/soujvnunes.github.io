import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";
import Button from "components/Button";
import Icon from "components/Icon";

type FooterSocialsProps = Pick<
  React.ComponentPropsWithoutRef<"ul">,
  "className"
>;

export default function FooterSocials({ className }: FooterSocialsProps) {
  const [t] = useTranslation();

  return (
    <ul className={twMerge("space-x-2", className)}>
      {socials.map(({ name, href }) => {
        const title = t("socials_label", {
          name,
        });

        return (
          <li className="inline-block" key={name}>
            <Button
              as="a"
              variant="text"
              target="_blank"
              rel="noreferrer"
              className="plausible-event-name=Visited+socials"
              title={title}
              href={href}
              aria-label={title}
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
