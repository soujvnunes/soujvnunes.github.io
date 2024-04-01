import { twMerge } from "tailwind-merge";
import { PickFrom } from "types/PickFrom";
import HeaderIntroMemojiFallbackSvg from "./HeaderIntroMemojiFallback.svg?react";

type HeaderIntroMemojiFallbackProps = PickFrom<"svg", "className">;

export default function HeaderIntroMemojiFallback(
  { className }: HeaderIntroMemojiFallbackProps,
  ref: React.ForwardedRef<SVGSVGElement>,
) {
  return (
    <HeaderIntroMemojiFallbackSvg
      ref={ref}
      className={twMerge("absolute w-48", className)}
    />
  );
}
