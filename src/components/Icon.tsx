import { memo } from "react";
import useSvg, { type SvgProps, type Svgs } from "hooks/useSvg";
import cn from "helpers/cn";

export interface IconProps extends SvgProps {
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
  const Svg = useSvg(name);

  return Svg ? (
    <Svg
      focusable="false"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden={title ? undefined : "true"}
      className={cn(
        "fill-current",
        size === "md" && "w-6 h-6",
        size === "sm" && "w-4 h-4",
        className,
      )}
      {...props}
    />
  ) : null;
});
