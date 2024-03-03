import { useTranslation } from "react-i18next";
import classNames from "consts/classNames";
import cn from "helpers/cn";
import Card from "./Card";

const projects = [
  {
    id: "1",
    href: "https://app.polkamarkets.com/",
    title: "contributions_projects.0.title",
    description: "contributions_projects.0.description",
    icon: {
      name: "polkamarkets",
    },
    className: {
      startItem: "bg-blue-500/20",
    },
  },
  {
    id: "2",
    href: "https://sites.ufal.br/ufal-60-anos/",
    title: "contributions_projects.1.title",
    description: "contributions_projects.1.description",
    icon: {
      name: "ufal60anos",
    },
    className: {
      startItem: "bg-fuchsia-500/20",
    },
  },
  {
    id: "3",
    href: "https://medium.com/@soujvnunes/uma-das-possíveis-maneiras-de-criar-design-tokens-d52a8c315b2",
    title: "contributions_projects.2.title",
    description: "contributions_projects.2.description",
    icon: {
      name: "medium",
    },
    className: {
      startItem: "bg-gray-500/20",
    },
  },
] as const;

export default function ContributionsSection() {
  const [t] = useTranslation();

  return (
    <section
      role="feed"
      className={cn(classNames.container.root, "lg:mb-6 mb-4")}
    >
      <h2
        className={cn(
          classNames.text.secondary,
          "mb-2 font-bold lg:mb-4 text-2xl",
        )}
      >
        {t("contributions_title")}
      </h2>
      <ul className="-mr-2 -mt-2 flex w-[calc(100%+0.5rem)] flex-wrap md:-mr-3 md:-mt-3 md:w-[calc(100%+0.75rem)] xl:-mr-4 xl:-mt-4 xl:w-[calc(100%+1rem)]">
        {projects.map((project) => (
          <li
            key={project.id}
            className="max-w-full grow-0 basis-full pr-2 pt-2 md:max-w-[50%] md:basis-1/2 md:pr-3 md:pt-3 xl:max-w-[25%] xl:basis-1/4 xl:pr-4 xl:pt-4"
          >
            <Card
              label={t(project.title)}
              href={project.href}
              icon={{
                name: project.icon.name,
              }}
              className={{
                startItem: project.className.startItem,
              }}
            >
              {t(project.description)}
            </Card>
          </li>
        ))}
      </ul>
    </section>
  );
}
