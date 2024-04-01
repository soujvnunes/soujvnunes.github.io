import { Transition } from "@headlessui/react";
import { twMerge } from "tailwind-merge";
import useImage from "hooks/useImage";
import { PickFrom } from "types/PickFrom";

type ImageProps = PickFrom<"img", "src" | "alt" | "className">;

export default function Image({ className, ...props }: ImageProps) {
  const image = useImage();

  return (
    <span
      className={twMerge("relative inline-block overflow-hidden", className)}
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
      <Transition
        aria-hidden
        enter="motion-safe:transition-opacity"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="motion-safe:transition-opacity"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        show={image.isLoading}
      >
        <span className="absolute inset-0 bg-black/10 motion-safe:animate-pulse dark:bg-white/10" />
      </Transition>
    </span>
  );
}
