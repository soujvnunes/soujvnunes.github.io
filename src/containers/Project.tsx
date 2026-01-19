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
import Image from "components/Image";

export interface ProjectProps {
  id: string;
  startItem: { icon: IconName; className: string };
  endItem?: { href: string };
  technologies?: string[];
  actions: ((
    | { startItem: { icon: IconName<"GitHub"> }; id: "contribution" }
    | { startItem: { icon: IconName<"Behance"> }; id: "project" }
    | { startItem: { icon: IconName<"Medium"> }; id: "article" }
    | { startItem: { icon: IconName<"Storybook"> }; id: "stories" }
    | { startItem: { icon: IconName<"NPM"> }; id: "package" }
  ) & {
    href: string;
  })[];
}

export default function Project({
  id,
  actions,
  startItem,
  endItem,
  technologies,
}: ProjectProps) {
  const [t] = useTranslation();
  const endItemLabel = t("contributions_title_visit_label");

  return (
    <Card className="grid grid-cols-1 gap-4 sm:grid-cols-12">
      <div
        className={twMerge(
          "flex overflow-hidden rounded-lg px-6 pt-10 sm:col-span-5",
          startItem.className,
        )}
      >
        <Image
          className="mt-auto h-40 rounded-t-[4px]"
          src={`/projects/${id}.jpg`}
        />
      </div>
      <div className="flex flex-col sm:col-span-7">
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
          endItem={
            endItem?.href && (
              <Button
                as="a"
                target="_blank"
                rel="noreferrer"
                variant="text"
                className="shrink-0"
                aria-label={endItemLabel}
                title={endItemLabel}
                href={endItem.href}
                endItem={<Icon name="ArrowOutward" />}
              >
                {t("contributions_title_visit")}
              </Button>
            )
          }
        >
          {t(`contributions_projects.${id}.title`)}
        </CardHeader>
        <CardContent>
          {t(`contributions_projects.${id}.description`)}
          {!!technologies?.length && (
            <ul
              aria-label="technologies"
              className="wrap mt-2 flex flex-wrap gap-2"
            >
              {technologies.map((technology) => (
                <li
                  key={technology}
                  className={twMerge(
                    classNames.button.root,
                    classNames.button.size.xs,
                    classNames.button.variant.tone,
                    "pointer-events-none cursor-default",
                  )}
                >
                  {technology}
                </li>
              ))}
            </ul>
          )}
        </CardContent>
        <CardFooter>
          {actions.map((action) => {
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
                  variant="outline"
                  aria-label={label}
                  title={label}
                  href={action.href}
                  startItem={<Icon name={action.startItem.icon} />}
                >
                  {actionValue}
                </Button>
              </Fragment>
            );
          })}
        </CardFooter>
      </div>
    </Card>
  );
}
