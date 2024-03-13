import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";
import classNames from "consts/classNames";
import Button from "components/Button";
import Card from "components/Card";
import CardContent from "components/CardContent";
import CardFooter from "components/CardFooter";
import CardHeader from "components/CardHeader";
import Icon, { type IconProps } from "components/Icon";

interface Projects {
  id: string;
  actions: ((
    | {
        endItem: {
          icon: "ArrowOutward";
        };
        id: "live";
      }
    | {
        startItem: {
          icon: "GitHub";
        };
        id: "contribution";
      }
    | {
        startItem: {
          icon: "Behance";
        };
        id: "project";
      }
    | {
        startItem: {
          icon: "Medium";
        };
        id: "article";
      }
  ) & {
    href: string;
  })[];
  startItem: {
    icon: IconProps["name"];
    className: string;
  };
}

const projects: Projects[] = [
  {
    id: "polkamarkets",
    actions: [
      {
        id: "live",
        href: "https://app.polkamarkets.com/",
        endItem: {
          icon: "ArrowOutward",
        },
      },
      {
        id: "contribution",
        href: "https://github.com/Polkamarkets/polkamarkets-web/commits?author=soujvnunes",
        startItem: {
          icon: "GitHub",
        },
      },
    ],
    startItem: {
      className: "bg-gradient-to-br from-blue-500/10 to-blue-500/20",
      icon: "Polkamarkets",
    },
  },
  {
    id: "vitalk",
    actions: [
      {
        id: "article",
        href: "https://medium.com/@soujvnunes/uma-das-possíveis-maneiras-de-criar-design-tokens-d52a8c315b2",
        startItem: {
          icon: "Medium",
        },
      },
    ],
    startItem: {
      className: "bg-gradient-to-br from-sky-500/10 to-sky-500/20",
      icon: "Vitalk",
    },
  },
  {
    id: "ufal",
    actions: [
      {
        id: "live",
        href: "https://sites.ufal.br/ufal-60-anos/",
        endItem: {
          icon: "ArrowOutward",
        },
      },
      {
        id: "contribution",
        href: "https://github.com/soujvnunes/virtual-exhibition/commits?author=soujvnunes",
        startItem: {
          icon: "GitHub",
        },
      },
      {
        id: "project",
        href: "https://www.behance.net/gallery/116828869/UFAL-60-Anos",
        startItem: {
          icon: "Behance",
        },
      },
    ],
    startItem: {
      className: "bg-gradient-to-br from-fuchsia-500/10 to-fuchsia-500/20",
      icon: "Ufal",
    },
  },
];

export default function ContributionsSectionProjects() {
  const [t] = useTranslation();

  return (
    <ul className={twMerge(classNames.grid.root, classNames.grid.col[4][0])}>
      {projects.map((project) => (
        <li key={project.id} className={classNames.grid.col[4][1]}>
          <Card>
            <CardHeader
              subhead={t(`contributions_projects.${project.id}.company`)}
              startItem={
                <span
                  className={twMerge(
                    ...classNames.size.lg,
                    "flex shrink-0 rounded-lg",
                    project.startItem.className,
                  )}
                >
                  <Icon className="m-auto" name={project.startItem.icon} />
                </span>
              }
            >
              {t(`contributions_projects.${project.id}.title`)}
            </CardHeader>
            <CardContent>
              {t(`contributions_projects.${project.id}.description`)}
            </CardContent>
            <CardFooter>
              {project.actions.map((action) => {
                const actionValue = t(
                  `contributions_projects_actions.${action.id}`,
                );
                const label = t("contributions_projects_actions_label", {
                  action: actionValue,
                });

                return (
                  <Fragment key={action.id}>
                    <Button
                      as="a"
                      size="sm"
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      title={label}
                      href={action.href}
                      className={action.id === "live" ? "mr-auto" : ""}
                      variant={action.id === "live" ? "outline" : "text"}
                      endItem={
                        "endItem" in action && (
                          <Icon name={action.endItem.icon} />
                        )
                      }
                      startItem={
                        "startItem" in action && (
                          <Icon name={action.startItem.icon} />
                        )
                      }
                    >
                      {actionValue}
                    </Button>
                  </Fragment>
                );
              })}
            </CardFooter>
          </Card>
        </li>
      ))}
    </ul>
  );
}
