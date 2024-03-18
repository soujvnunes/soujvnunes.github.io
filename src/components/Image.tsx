import { useState } from "react";

import { Transition } from "@headlessui/react";
import { twMerge } from "tailwind-merge";
import isLoading from "helpers/isLoading";

const imageStates = {
  loading: "loading",
  error: "error",
  success: "success",
} as const;

interface ImageProps
  extends Pick<
    React.ComponentPropsWithRef<"img">,
    "src" | "alt" | "className"
  > {
  size?: "lg";
  radius?: "2xs";
}
type ImageStates = keyof typeof imageStates;

export default function Image({
  alt,
  className,
  radius,
  size,
  ...props
}: ImageProps) {
  const [state, setState] = useState<ImageStates>(imageStates.loading);

  return (
    <span
      className={twMerge(
        "relative overflow-hidden",
        size === "lg" && "h-10 w-10 lg:h-16 lg:w-16",
        radius === "2xs" && "rounded-lg",
        className,
      )}
    >
      <img
        // eslint-disable-next-line react/no-unknown-property
        fetchPriority="high"
        loading="lazy"
        alt={alt}
        className={twMerge(
          "block bg-cover bg-no-repeat object-cover transition-opacity",
          isLoading(state) && "opacity-0",
          !!size && "aspect-square",
        )}
        onLoad={() => {
          setState(imageStates.success);
        }}
        onError={() => {
          setState(imageStates.error);
        }}
        ref={(image: HTMLImageElement | null) => {
          if (image?.complete) {
            if (!image.naturalWidth || !image.naturalHeight) {
              setState(imageStates.error);
            } else {
              setState(imageStates.success);
            }
          }
        }}
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
        show={isLoading(state)}
      >
        <span className="absolute inset-0 bg-black/10 motion-safe:animate-pulse dark:bg-white/10" />
      </Transition>
    </span>
  );
}
