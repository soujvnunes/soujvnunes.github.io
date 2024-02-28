import { PROJECTS, SOCIALS } from "@shared/consts";
import { cn } from "@shared/helpers";
import UfalIcon from "./components/UfalIcon";
import me from "/me.jpg";

export default function App() {
  return (
    <>
      <header className="flex items-center h-16 pl-8 pr-8 bg-white">
        <a href="/" className="mr-auto">
          <h1>
            <strong>
              sou
              <span className="text-red-600">j</span>
              <span className="text-amber-600">v</span>
              <span className="text-blue-600">n</span>
              unes
            </strong>
            <span className="-ml-1.5 -mr-1.5 align-middle material-symbols-outlined">
              pen_size_1
            </span>
            design_
            <strong>engineer</strong>
          </h1>
        </a>
        <button
          className="inline-flex items-center h-10 pl-2 pr-2 rounded-lg hover:bg-black/20"
          aria-label="Change to dark mode"
          title="Change to dark mode"
        >
          <span className="material-symbols-outlined">dark_mode</span>
        </button>
      </header>
      <main className="flex flex-col grow">
        <section className="flex flex-col justify-center pl-8 pr-8 grow">
          <p className="inline-block ml-2 text-black/60">
            <img src={me} className="inline-block w-16 h-16" alt="Vite logo" />
            <strong className="ml-2">Hi, I&apos;m Victor</strong>
          </p>
          <h2 className="mb-6 font-bold text-8xl text-balance">
            Lemme build you something extraordinary!
          </h2>
          <hr className="sr-only" />
          <p>
            <button className="font-serif text-2xl italic text-black/60">
              More about me
              <span className="ml-1 text-4xl align-middle material-symbols-outlined wght-200">
                trending_flat
              </span>
            </button>
          </p>
        </section>
        <section role="feed" className="pl-8 pr-8 mb-6">
          <h2 className="mb-4 text-2xl font-bold text-black/60">
            Contributions
          </h2>
          <ul className="-mr-2 -mt-2 flex w-[calc(100%+0.5rem)] flex-wrap md:-mr-3 md:-mt-3 md:w-[calc(100%+0.75rem)] lg:-mr-4 lg:-mt-4 lg:w-[calc(100%+1rem)]">
            {PROJECTS.map((project) => (
              <li
                key={project.title}
                className="max-w-full grow-0 basis-full pr-2 pt-2 md:max-w-[50%] md:basis-1/2 md:pr-3 md:pt-3 lg:max-w-[25%] lg:basis-1/4 lg:pr-4 lg:pt-4"
              >
                <article className="relative p-2 overflow-hidden bg-white rounded-2xl">
                  <header className="flex items-center">
                    <div
                      className={cn("flex w-10 h-10 rounded-lg", project.color)}
                    >
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
                            >
                              <path d="M7.67,6.33c-.74,0-1.48.15-2.17.43-.69.28-1.31.7-1.84,1.23-.53.53-.94,1.15-1.23,1.84-.28.69-.43,1.42-.43,2.17s.15,1.48.43,2.17c.28.69.7,1.31,1.23,1.84.53.53,1.15.94,1.84,1.23.69.28,1.42.43,2.17.43s1.48-.15,2.17-.43c.69-.28,1.31-.7,1.84-1.23.53-.53.94-1.15,1.23-1.84.28-.69.43-1.42.43-2.17s-.15-1.48-.43-2.17c-.28-.69-.7-1.31-1.23-1.84-.53-.53-1.15-.94-1.84-1.23-.69-.28-1.42-.43-2.17-.43ZM16.67,7c-.35,0-.7.13-1.02.38-.32.25-.62.62-.87,1.08s-.44,1.02-.58,1.62c-.13.61-.2,1.26-.2,1.91s.07,1.31.2,1.91c.13.61.33,1.16.58,1.62s.54.83.87,1.08c.32.25.67.38,1.02.38s.7-.13,1.02-.38.62-.62.87-1.08.44-1.02.58-1.62c.13-.61.2-1.26.2-1.91s-.07-1.31-.2-1.91-.33-1.16-.58-1.62-.54-.83-.87-1.08c-.32-.25-.67-.38-1.02-.38ZM21,7.67c-.27,0-.52.46-.71,1.27-.19.81-.29,1.91-.29,3.06s.11,2.25.29,3.06c.19.81.44,1.27.71,1.27s.52-.46.71-1.27c.19-.81.29-1.91.29-3.06s-.11-2.25-.29-3.06c-.19-.81-.44-1.27-.71-1.27Z" />
                            </svg>
                          ),
                        }[project.id]
                      }
                    </div>
                    <h3 className="ml-2 font-bold">{project.title}</h3>
                    <a
                      className="inline-flex items-center h-10 pl-2 pr-2 ml-auto rounded-lg hover:bg-black/20"
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Visit ${project.title}`}
                      href={project.href}
                    >
                      <span className="material-symbols-outlined">
                        arrow_outward
                      </span>
                    </a>
                  </header>
                  <p className="pb-3 pl-12 text-black/60">
                    {project.description}
                  </p>
                </article>
              </li>
            ))}
          </ul>
        </section>
        <footer className="flex items-center h-10 pl-8 pr-8 text-xs bg-white text-black/60">
          Copyright (c) {new Date().getFullYear()} soujvnunes
          <ul className="flex ml-auto space-x-4">
            {SOCIALS.map((social) => (
              <li key={social.title}>
                <a
                  className="underline uppercase"
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
