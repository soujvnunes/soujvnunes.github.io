import { useTranslation } from "react-i18next";
import { Fragment } from "react/jsx-runtime";
import { twMerge } from "tailwind-merge";
import classNames from "consts/classNames";
import CardProvider from "providers/CardProvider";
import Button from "components/Button";
import CardContent from "components/CardContent";
import CardFooter from "components/CardFooter";
import CardHeader from "components/CardHeader";
import CardRoot from "components/CardRoot";
import Icon, { type IconName } from "components/Icon";
import Image from "components/Image";

export interface ProjectProps {
  id: string;
  startItem: { icon: IconName; className: string };
  endItem?: { href: string };
  actions: ((
    | { startItem: { icon: IconName<"GitHub"> }; id: "contribution" }
    | { startItem: { icon: IconName<"Behance"> }; id: "project" }
    | { startItem: { icon: IconName<"Medium"> }; id: "article" }
  ) & {
    href: string;
  })[];
}

export default function Project({
  id,
  actions,
  startItem,
  endItem,
}: ProjectProps) {
  const [t] = useTranslation();
  const endItemLabel = t("contributions_title_visit_label");

  return (
    <CardProvider>
      <CardRoot className="border-b border-b-amber-700/10 bg-gradient-to-tl from-stone-800/40 backdrop-blur-2xl dark:border-b-0 dark:border-t dark:border-t-stone-500/10 dark:bg-stone-800/20">
        <div
          className={twMerge(
            "flex max-w-full grow-0 basis-full rounded-lg px-6 pt-10 md:max-w-[41.666667%] md:basis-5/12",
            startItem.className,
          )}
        >
          <Image className="h-48 rounded-t-[4px]" src={`/projects/${id}.jpg`} />
        </div>
        <div className="flex max-w-full basis-full flex-col md:max-w-[58.333333%] md:basis-7/12">
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
                  className="plausible-event-name=Visited+project"
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
                    className={`plausible-event-name=Saw+${action.id}`}
                  >
                    {actionValue}
                  </Button>
                </Fragment>
              );
            })}
          </CardFooter>
        </div>
      </CardRoot>
    </CardProvider>
  );
}
