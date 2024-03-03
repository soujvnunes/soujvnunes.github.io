import { memo, useEffect, useRef, useState } from "react";
import cn from "helpers/cn";

export type IconProps = React.SVGProps<SVGSVGElement> & {
  title?: string;
  className?: string;
  size?: "sm" | "md";
  name: "Behance" | "GitHub" | "LinkedIn" | "Medium" | "Polkamarkets" | "Ufal";
};
type SvgComponent = React.FunctionComponent<Omit<IconProps, "name">>;

export default memo(function Icon({
  name,
  className,
  title,
  size = "md",
  ...props
}: IconProps) {
  const [Svg, setSvg] = useState<SvgComponent | null>(null);
  const isMounted = useRef(true);

  useEffect(() => {
    if (isMounted.current) {
      void (async function handlePath() {
        const svg = (await import(`../assets/icons/${name}.svg?react`)) as {
          default: SvgComponent;
        };

        setSvg(() => svg.default);
      })();
    }

    return () => {
      isMounted.current = false;
    };
  }, [name]);

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
