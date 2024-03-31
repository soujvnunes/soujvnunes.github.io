import { memo } from "react";
import { twMerge } from "tailwind-merge";
import classNames from "consts/classNames";
import useSvg, { type SvgProps, type Svgs } from "hooks/useSvg";

interface IconProps extends SvgProps {
  size?: "sm" | "md";
  name: Svgs;
}
export type IconName<
  T extends TIconName | (string & NonNullable<unknown>) = string,
  TIconName = IconProps["name"],
> = T extends TIconName ? Extract<TIconName, T> : TIconName;

export default memo(function Icon({
  name,
  className,
  size = "md",
  title,
  children,
  ...props
}: IconProps) {
  const Svg = useSvg(name);

  if (!Svg) return null;

  return (
    <Svg
      focusable="false"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden={title ? undefined : "true"}
      className={twMerge(
        "inline-flex fill-current",
        ...classNames.size[size],
        className,
      )}
      {...props}
    />
  );
});
