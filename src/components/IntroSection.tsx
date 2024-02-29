import classNames from "consts/classNames";
import cn from "helpers/cn";

export default function IntroSection() {
  return (
    <section
      className={cn(
        "flex flex-col justify-center grow pt-4 pb-4",
        classNames.container.root,
      )}
    >
      <p className="inline-block ml-1 lg:ml-2 text-black/60">
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
      <hr className="sr-only" />
      <p>
        <button className="font-serif italic lg:text-2xl text-black/60">
          More about me
          <span className="ml-1 text-4xl align-middle material-symbols-outlined wght-200">
            trending_flat
          </span>
        </button>
      </p>
    </section>
  );
}
