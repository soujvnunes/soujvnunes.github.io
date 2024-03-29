import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import HeaderIntroMemojiFallbackSvg from "./HeaderIntroMemojiFallback.svg?react";

type HeaderIntroMemojiFallbackProps = Pick<
  React.ComponentPropsWithoutRef<"svg">,
  "className"
>;

const HeaderIntroMemojiFallback = forwardRef(function HeaderIntroMemojiFallback(
  { className }: HeaderIntroMemojiFallbackProps,
  ref: React.ForwardedRef<SVGSVGElement>,
) {
  return (
    <HeaderIntroMemojiFallbackSvg
      ref={ref}
      className={twMerge("absolute w-48", className)}
    />
  );
});

export default HeaderIntroMemojiFallback;
