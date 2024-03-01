import classNames from "consts/classNames";
import PROJECTS from "consts/projects";
import SOCIALS from "consts/socials";
import cn from "helpers/cn";
import Card from "components/Card";
import Header from "components/Header";
import IntroSection from "components/IntroSection";

export default function App() {
  return (
    <>
      <Header />
      <main className="flex flex-col grow">
        <IntroSection />
        <section
          role="feed"
          className={cn(classNames.container.root, "lg:mb-6 mb-4")}
        >
          <h2
            className={cn(
              classNames.text.secondary,
              "mb-2 font-bold lg:mb-4 lg:text-2xl",
            )}
          >
            Contributions
          </h2>
          <ul className="-mr-2 -mt-2 flex w-[calc(100%+0.5rem)] flex-wrap md:-mr-3 md:-mt-3 md:w-[calc(100%+0.75rem)] xl:-mr-4 xl:-mt-4 xl:w-[calc(100%+1rem)]">
            {PROJECTS.map((project) => (
              <li
                key={project.title}
                className="max-w-full grow-0 basis-full pr-2 pt-2 md:max-w-[50%] md:basis-1/2 md:pr-3 md:pt-3 xl:max-w-[25%] xl:basis-1/4 xl:pr-4 xl:pt-4"
              >
                <Card
                  label={project.title}
                  href={project.description}
                  icon={{
                    name: project.icon.name,
                  }}
                  className={{
                    startItem: project.className.startItem,
                  }}
                >
                  {project.description}
                </Card>
              </li>
            ))}
          </ul>
        </section>
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
            {SOCIALS.map((social) => (
              <li key={social.title}>
                <a
                  className="underline uppercase text-black/60 hover:text-black/80 dark:text-white/80 dark:hover:text-white"
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <strong>{social.title}</strong>
                </a>
              </li>
            ))}
          </ul>
        </footer>
      </main>
    </>
  );
}
