import { twMerge } from "tailwind-merge";
import { PickFrom } from "types/PickFrom";
import HeaderIntroMemojiFallbackSvg from "./HeaderIntroMemojiFallback.svg?react";

type HeaderIntroMemojiFallbackProps = PickFrom<"svg", "className">;

export default function HeaderIntroMemojiFallback({
  className,
}: HeaderIntroMemojiFallbackProps) {
  return (
    <HeaderIntroMemojiFallbackSvg
      className={twMerge("absolute w-48", className)}
    />
  );
}
