import { memo } from "react";
import classNames from "consts/classNames";
import cn from "helpers/cn";

const svgs = {
  Behance: await import("./__svgs__/Behance.svg?react"),
  GitHub: await import("./__svgs__/GitHub.svg?react"),
  LinkedIn: await import("./__svgs__/LinkedIn.svg?react"),
  Medium: await import("./__svgs__/Medium.svg?react"),
  Polkamarkets: await import("./__svgs__/Polkamarkets.svg?react"),
  Ufal: await import("./__svgs__/Ufal.svg?react"),
};

type Svgs = keyof typeof svgs;
export interface IconProps extends React.ComponentPropsWithoutRef<"svg"> {
  title?: string;
  className?: string;
  size?: "sm" | "md";
  name: Svgs;
}

export default memo(function Icon({
  name,
  className,
  title,
  size = "md",
  ...props
}: IconProps) {
  const Svg = svgs[name].default;

  return (
    <Svg
      focusable="false"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden={title ? undefined : "true"}
      className={cn("fill-current", ...classNames.size[size], className)}
      {...props}
    />
  );
});
