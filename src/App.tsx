import classNames from "consts/classNames";
import PROJECTS from "consts/projects";
import SOCIALS from "consts/socials";
import cn from "helpers/cn";
import Header from "components/Header";
import IntroSection from "components/IntroSection";
import UfalIcon from "components/UfalIcon";

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
                <article
                  aria-labelledby={`article_label_${project.id}`}
                  aria-describedby={`article_desc_${project.id}`}
                  className={cn("p-2 rounded-2xl", classNames.surface.primary)}
                >
                  <header className="flex items-center">
                    <span
                      className={cn(
                        "flex w-10 h-10 shrink-0 rounded-lg",
                        project.color,
                      )}
                    >
                      {/** todo: get rid of it */}
                      {
                        {
                          1: (
                            <svg
                              viewBox="0 0 38 46"
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-5 h-6 m-auto"
                            >
                              <path
                                d="M18.7571 0L-0.157959 22.7696L18.7929 45.7896L37.842 22.8143L18.7571 0Z"
                                fill="#5751FC"
                              />
                              <path
                                d="M18.7929 45.7899L-0.157959 22.7698L23.6491 17.0104L18.7929 45.7899Z"
                                fill="#3033BE"
                              />
                              <path
                                d="M18.7571 0L37.842 22.8143L23.6491 17.0012L18.7571 0Z"
                                fill="#51A0FC"
                              />
                            </svg>
                          ),
                          2: <UfalIcon />,
                          3: (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-6 h-6 m-auto"
                              fill="currentColor"
                            >
                              <path d="M7.67,6.33c-.74,0-1.48.15-2.17.43-.69.28-1.31.7-1.84,1.23-.53.53-.94,1.15-1.23,1.84-.28.69-.43,1.42-.43,2.17s.15,1.48.43,2.17c.28.69.7,1.31,1.23,1.84.53.53,1.15.94,1.84,1.23.69.28,1.42.43,2.17.43s1.48-.15,2.17-.43c.69-.28,1.31-.7,1.84-1.23.53-.53.94-1.15,1.23-1.84.28-.69.43-1.42.43-2.17s-.15-1.48-.43-2.17c-.28-.69-.7-1.31-1.23-1.84-.53-.53-1.15-.94-1.84-1.23-.69-.28-1.42-.43-2.17-.43ZM16.67,7c-.35,0-.7.13-1.02.38-.32.25-.62.62-.87,1.08s-.44,1.02-.58,1.62c-.13.61-.2,1.26-.2,1.91s.07,1.31.2,1.91c.13.61.33,1.16.58,1.62s.54.83.87,1.08c.32.25.67.38,1.02.38s.7-.13,1.02-.38.62-.62.87-1.08.44-1.02.58-1.62c.13-.61.2-1.26.2-1.91s-.07-1.31-.2-1.91-.33-1.16-.58-1.62-.54-.83-.87-1.08c-.32-.25-.67-.38-1.02-.38ZM21,7.67c-.27,0-.52.46-.71,1.27-.19.81-.29,1.91-.29,3.06s.11,2.25.29,3.06c.19.81.44,1.27.71,1.27s.52-.46.71-1.27c.19-.81.29-1.91.29-3.06s-.11-2.25-.29-3.06c-.19-.81-.44-1.27-.71-1.27Z" />
                            </svg>
                          ),
                        }[project.id]
                      }
                    </span>
                    <h3
                      className="ml-2 font-bold"
                      id={`article_label_${project.id}`}
                    >
                      {project.title}
                    </h3>
                    <a
                      className={cn(classNames.button.root, "ml-auto")}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Visit ${project.title}`}
                      href={project.href}
                    >
                      <span aria-hidden className="material-symbols-outlined">
                        arrow_outward
                      </span>
                    </a>
                  </header>
                  <p
                    className={cn(classNames.text.secondary, "pb-3 pl-12")}
                    id={`article_desc_${project.id}`}
                  >
                    {project.description}
                  </p>
                </article>
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
