const text = {
  color: {
    primary: "text-black/80 dark:text-white",
    secondary: "text-black/60 dark:text-white/60",
  },
  variant: {
    headline: "text-balance text-2xl font-bold lg:text-[4rem]/[4rem]",
    title: "lg:text-2xl",
    caption: "text-xs uppercase font-bold tracking-wide",
  },
};

const classNames = {
  container: {
    root: "mx-auto w-full max-lg:px-4 lg:max-w-4xl",
  },
  button: {
    root: `flex items-center justify-center rounded-lg ${text.variant.caption}`,
    size: {
      sm: "h-8 min-w-8 pl-1 pr-1",
      md: "h-10 min-w-10 pl-2 pr-2",
    },
    variant: {
      toned:
        "text-black/80 dark:text-white bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 transition-colors",
      text: "text-black/80 dark:text-white hover:bg-black/10 dark:hover:bg-white/10 transition-colors",
      outline:
        "border border-black/20 text-black/80 transition-colors hover:border-black/40 hover:bg-black/10 dark:border-white/20 dark:text-white dark:hover:border-white/40 dark:hover:bg-white/10",
    },
  },
  text,
  surface: {
    primary: "bg-white dark:bg-stone-800",
    secondary: "bg-gray-100 dark:bg-stone-900",
  },
  grid: {
    root: "flex flex-wrap",
    /** [col]: [root, item] */
    col: {
      4: [
        "-mr-2 -mt-2 w-[calc(100%+0.5rem)] md:-mr-3 md:-mt-3 md:w-[calc(100%+0.75rem)] xl:-mr-4 xl:-mt-4 xl:w-[calc(100%+1rem)]",
        "max-w-full grow-0 basis-full pr-2 pt-2 md:max-w-[50%] md:basis-1/2 md:pr-3 md:pt-3 xl:max-w-[25%] xl:basis-1/4 xl:pr-4 xl:pt-4",
      ],
    },
  },
  /** [size]: [width, height] */
  size: {
    x2s: ["w-2", "h-2"],
    xs: ["w-3", "h-3"],
    sm: ["w-4", "h-4"],
    md: ["w-6", "h-6"],
    lg: ["w-10", "h-10"],
    xl: ["w-16", "h-16"],
    x2l: ["w-24", "h-24"],
  },
} as const;

export default classNames;
