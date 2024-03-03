import { memo, useEffect, useRef, useState } from "react";
import cn from "helpers/cn";

export type IconProps = React.SVGProps<SVGSVGElement> & {
  title?: string;
  name: "Behance" | "GitHub" | "LinkedIn" | "Medium" | "Polkamarkets" | "Ufal";
  className?: string;
};
type SvgComponent = React.FunctionComponent<Omit<IconProps, "name">>;

export default memo(function Icon({
  name,
  className,
  title,
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
      aria-hidden={title ? undefined : "true"}
      focusable="false"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-6 h-6 fill-current", className)}
      {...props}
    />
  ) : null;
});
