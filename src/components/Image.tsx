import { Transition } from "@headlessui/react";
import { twMerge } from "tailwind-merge";
import useImage from "hooks/useImage";

interface ImageProps
  extends Pick<
    React.ComponentPropsWithoutRef<"img">,
    "src" | "alt" | "className"
  > {
  radius?: "2xs";
  size?: "lg";
}

export default function Image({
  alt,
  className,
  radius,
  size,
  ...props
}: ImageProps) {
  const image = useImage();

  return (
    <span
      className={twMerge(
        "relative inline-block overflow-hidden",
        size === "lg" && "h-10 w-10 lg:h-16 lg:w-16",
        radius === "2xs" && "rounded-lg",
        className,
      )}
    >
      <img
        loading="lazy"
        alt={alt}
        className={twMerge(
          "block bg-cover bg-no-repeat object-cover",
          image.isLoading ? "opacity-0" : "transition-opacity",
          !!size && "aspect-square",
        )}
        {...image.handlers}
        {...props}
      />
      <Transition
        as="span"
        aria-hidden
        enter="transition-opacity"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        show={image.isLoading}
      >
        <span className="absolute inset-0 bg-black/10 motion-safe:animate-pulse dark:bg-white/10" />
      </Transition>
    </span>
  );
}
