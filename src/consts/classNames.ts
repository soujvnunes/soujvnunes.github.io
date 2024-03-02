const classNames = {
  container: {
    root: "pl-4 pr-4 lg:pl-8 lg:pr-8",
  },
  button: {
    root: "inline-flex justify-center items-center text-xs uppercase font-bold h-10 pl-2 pr-2 rounded-lg min-w-10",
    text: "hover:bg-black/20 dark:hover:bg-white/20",
    outline:
      "border hover:bg-black/10 dark:hover:bg-white/10 border-black/20 dark:border-white/20 hover:border-black/40 dark:hover:border-white/40",
  },
  text: {
    secondary: "text-black/60 dark:text-white/60",
  },
  surface: {
    primary: "bg-white dark:bg-stone-800",
  },
};

export default classNames;
