import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";
import classNames from "consts/classNames";
import Card from "./Card";
import Icon from "./Icon";
import MaterialSymbols from "./MaterialSymbols";

const projects = [
  {
    href: "https://app.polkamarkets.com/",
    title: "contributions_projects.0.title",
    description: "contributions_projects.0.description",
    icon: {
      name: "Polkamarkets",
    },
    className: {
      startItem: "bg-blue-500/20",
    },
  },
  {
    href: "https://sites.ufal.br/ufal-60-anos/",
    title: "contributions_projects.1.title",
    description: "contributions_projects.1.description",
    icon: {
      name: "Ufal",
    },
    className: {
      startItem: "bg-fuchsia-500/20",
    },
  },
  {
    href: "https://medium.com/@soujvnunes/uma-das-possíveis-maneiras-de-criar-design-tokens-d52a8c315b2",
    title: "contributions_projects.2.title",
    description: "contributions_projects.2.description",
    icon: {
      name: "Medium",
    },
    className: {
      startItem: "bg-gray-500/20",
    },
  },
] as const;

export default function ContributionsSectionProjects() {
  const [t] = useTranslation();

  return (
    <ul className={twMerge(classNames.grid.root, classNames.grid.col[4][0])}>
      {projects.map((project) => (
        <li key={project.href} className={classNames.grid.col[4][1]}>
          <Card
            href={project.href}
            label={t(project.title)}
            startItem={
              <span
                className={twMerge(
                  ...classNames.size.lg,
                  "flex shrink-0 rounded-lg",
                  project.className.startItem,
                )}
              >
                <Icon className="m-auto" name={project.icon.name} />
              </span>
            }
            endItem={
              <a
                target="_blank"
                rel="noreferrer"
                href={project.href}
                aria-label={t("contributions_cta")}
                className={twMerge(
                  classNames.button.root,
                  classNames.button.text,
                  "ml-auto",
                )}
              >
                <MaterialSymbols name="&#xf8ce;" />
              </a>
            }
          >
            {t(project.description)}
          </Card>
        </li>
      ))}
    </ul>
  );
}
