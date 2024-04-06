import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import useImage from "hooks/useImage";
import { PickFrom } from "types/PickFrom";

type ImageProps = PickFrom<"img", "src" | "alt" | "className">;

export default function Image({ className, ...props }: ImageProps) {
  const image = useImage();

  return (
    <span
      className={twMerge(
        "relative inline-block w-full overflow-hidden",
        className,
      )}
    >
      <img
        alt=""
        loading="lazy"
        decoding="async"
        className={twMerge(
          "bg-cover bg-no-repeat object-cover motion-safe:transition-opacity",
          image.isLoading && "opacity-0",
        )}
        {...image.handlers}
        {...props}
      />
      <motion.span
        className="absolute inset-0 bg-black/10 motion-safe:animate-pulse dark:bg-white/10"
        animate={image.isLoading ? "show" : "hidden"}
        variants={{ show: { opacity: 1 }, hidden: { opacity: 0 } }}
      />
    </span>
  );
}
