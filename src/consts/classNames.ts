const className = {
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

const classNames = {
  container: {
    root: "pl-4 pr-4 lg:pl-8 lg:pr-8",
  },
  button: {
    root: "inline-flex items-center justify-center rounded-lg text-xs font-bold uppercase",
    size: {
      sm: "h-8 min-w-8 pl-1 pr-1",
      md: "h-10 min-w-10 pl-2 pr-2",
    },
    variant: {
      text: "text-black/60 hover:text-black/80 dark:text-white/60 dark:hover:text-white hover:bg-black/10 dark:hover:bg-white/10",
      outline:
        "text-black/60 hover:text-black/80 dark:text-white/60 dark:hover:text-white border border-black/20 hover:border-black/40 hover:bg-black/10 dark:border-white/20 dark:hover:border-white/40 dark:hover:bg-white/10",
    },
  },
  text: {
    secondary: "text-black/60 dark:text-white/60",
    headline: "text-balance text-5xl font-bold",
    title: "text-2xl font-bold",
  },
  surface: {
    primary: "bg-white dark:bg-stone-800",
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
  size: className.size,
} as const;

export default classNames;
