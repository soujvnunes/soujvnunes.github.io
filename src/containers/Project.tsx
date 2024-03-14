import { useTranslation } from "react-i18next";
import { Fragment } from "react/jsx-runtime";
import { twMerge } from "tailwind-merge";
import classNames from "consts/classNames";
import Button from "components/Button";
import Card from "components/Card";
import CardContent from "components/CardContent";
import CardFooter from "components/CardFooter";
import CardHeader from "components/CardHeader";
import Icon, { type IconName } from "components/Icon";

export interface ProjectProps {
  id: string;
  actions: ((
    | { endItem: { icon: IconName<"ArrowOutward"> }; id: "live" }
    | { startItem: { icon: IconName<"GitHub"> }; id: "contribution" }
    | { startItem: { icon: IconName<"Behance"> }; id: "project" }
    | { startItem: { icon: IconName<"Medium"> }; id: "article" }
  ) & {
    href: string;
  })[];
  startItem: {
    icon: IconName;
    className: string;
  };
}

export default function Project({ id, actions, startItem }: ProjectProps) {
  const [t] = useTranslation();

  return (
    <Card>
      <CardHeader
        subhead={t(`contributions_projects.${id}.company`)}
        startItem={
          <span
            className={twMerge(
              ...classNames.size.lg,
              "flex shrink-0 rounded-lg",
              startItem.className,
            )}
          >
            <Icon className="m-auto" name={startItem.icon} />
          </span>
        }
      >
        {t(`contributions_projects.${id}.title`)}
      </CardHeader>
      <CardContent>{t(`contributions_projects.${id}.description`)}</CardContent>
      <CardFooter>
        {actions.map((action) => {
          const actionValue = t(`contributions_projects_actions.${action.id}`);
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
                  "endItem" in action && <Icon name={action.endItem.icon} />
                }
                startItem={
                  "startItem" in action && <Icon name={action.startItem.icon} />
                }
              >
                {actionValue}
              </Button>
            </Fragment>
          );
        })}
      </CardFooter>
    </Card>
  );
}
