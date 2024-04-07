const className = {
  text: {
    color: {
      primary: "text-black/80 dark:text-white",
      secondary: "text-black/60 dark:text-white/60",
    },
    variant: {
      headline:
        "text-balance text-[2.5rem]/[2.5rem] font-bold lg:text-[4rem]/[4rem]",
      title: "lg:text-2xl",
      caption: "text-xs uppercase font-bold tracking-wide",
    },
  },
};

const classNames = {
  container: {
    root: "mx-auto w-full px-4 lg:px-8 lg:max-w-5xl",
  },
  button: {
    root: `inline-flex align-middle items-center justify-center rounded-lg ${className.text.variant.caption}`,
    size: {
      sm: "h-8 min-w-8 pl-2 pr-2",
      md: "h-10 min-w-10 pl-2 pr-2",
    },
    variant: {
      tone: "bg-amber-500/10 text-amber-600 hover:bg-amber-500/20 motion-safe:transition-colors dark:text-amber-400",
      text: "text-amber-600 dark:text-amber-400 hover:bg-amber-500/10 motion-safe:transition-colors",
      outline:
        "border border-amber-500/40 text-amber-600 motion-safe:transition-colors hover:border-amber-500/60 hover:bg-amber-500/10 dark:text-amber-400",
    },
  },
  text: className.text,
  surface: {
    primary:
      "rounded-2xl bg-white p-2 shadow-lg shadow-amber-800/5 dark:border-t dark:border-t-amber-500/10 dark:bg-amber-900/20 dark:bg-gradient-to-tl dark:from-amber-900/80 dark:shadow-none dark:backdrop-blur-2xl",
    secondary: "bg-amber-50 dark:bg-amber-950",
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
