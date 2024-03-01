import classNames from "consts/classNames";
import cn from "helpers/cn";
import MaterialSymbols from "./MaterialSymbols";

export default function IntroSection() {
  return (
    <section
      className={cn(
        "flex flex-col justify-center grow pt-4 pb-4",
        classNames.container.root,
      )}
    >
      <p className={cn("inline-block ml-1 lg:ml-2", classNames.text.secondary)}>
        <img
          src="/me.jpg"
          className="inline-block w-10 h-10 lg:w-16 lg:h-16"
          alt="Vite logo"
        />
        <strong className="ml-2">Hi, I&apos;m Victor</strong>
      </p>
      <h2 className="mb-2 text-5xl font-bold lg:mb-6 lg:text-8xl text-balance">
        Lemme build you something extraordinary!
      </h2>
      <p>
        <button
          className={cn(
            "font-serif italic lg:text-2xl",
            classNames.text.secondary,
          )}
        >
          More about me
          <MaterialSymbols
            name="trending_flat"
            className="ml-1 text-4xl align-middle wght-200"
          />
        </button>
      </p>
    </section>
  );
}
