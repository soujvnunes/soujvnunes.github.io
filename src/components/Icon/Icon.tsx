import { memo } from "react";
import { twMerge } from "tailwind-merge";
import classNames from "consts/classNames";

// Pairing each svg with its key to turn the usage predictable
const svgs = {
  ArrowOutward: await import("./__svgs__/ArrowOutward.svg?react"),
  Behance: await import("./__svgs__/Behance.svg?react"),
  BeproNetwork: await import("./__svgs__/BeproNetwork.svg?react"),
  GitHub: await import("./__svgs__/GitHub.svg?react"),
  Language: await import("./__svgs__/Language.svg?react"),
  LinkedIn: await import("./__svgs__/LinkedIn.svg?react"),
  Medium: await import("./__svgs__/Medium.svg?react"),
  Pen: await import("./__svgs__/Pen.svg?react"),
  Polkamarkets: await import("./__svgs__/Polkamarkets.svg?react"),
  Ufal: await import("./__svgs__/Ufal.svg?react"),
  Vitalk: await import("./__svgs__/Vitalk.svg?react"),
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
      className={twMerge(
        "inline-flex fill-current",
        ...classNames.size[size],
        className,
      )}
      {...props}
    />
  );
});
