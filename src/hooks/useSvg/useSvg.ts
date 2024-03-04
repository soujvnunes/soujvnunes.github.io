import { useEffect, useRef, useState } from "react";

// Pairing each svg with its key to turn the usage predictable
const svgs = {
  Behance: await import("./__svg__/Behance.svg?react"),
  GitHub: await import("./__svg__/GitHub.svg?react"),
  LinkedIn: await import("./__svg__/LinkedIn.svg?react"),
  Medium: await import("./__svg__/Medium.svg?react"),
  Polkamarkets: await import("./__svg__/Polkamarkets.svg?react"),
  Ufal: await import("./__svg__/Ufal.svg?react"),
};

export type Svgs = keyof typeof svgs;
export type SvgProps = React.SVGProps<SVGSVGElement> & {
  title?: string;
};
type SvgComponent = React.FunctionComponent<Omit<SvgProps, "name">>;

export default function useSvg(svg: Svgs) {
  const [Svg, setSvg] = useState<SvgComponent | null>(null);
  const isMounted = useRef(true);

  useEffect(() => {
    if (isMounted.current) setSvg(() => svgs[svg].default);

    return () => {
      isMounted.current = false;
    };
  }, [svg]);

  return Svg;
}
