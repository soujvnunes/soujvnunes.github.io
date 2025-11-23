import { useEffect, useRef, useState } from "react";

export type Svgs = keyof typeof svgs;
export type SvgProps = React.SVGProps<SVGSVGElement> & {
  title?: string;
};
type SvgComponent = React.FunctionComponent<Omit<SvgProps, "name">>;

export default function useSvg(svg: Svgs) {
  const [Svg, setSvg] = useState<SvgComponent | null>(null);
  const isMounted = useRef(true);

  useEffect(() => {
    async function handleSvg() {
      try {
        const SvgComponent = await svgs[svg]();

        setSvg(() => SvgComponent.default);
      } catch (_error) {
        setSvg(null);
      }
    }

    if (isMounted.current) void handleSvg();

    return () => {
      isMounted.current = false;
    };
  }, [svg]);

  return Svg;
}

// Pairing each callable splitted SVG with its key to turn the usage predictable
const svgs = {
  AINotator: () => import("./__svgs__/AINotator.svg?react"),
  ArrowOutward: () => import("./__svgs__/ArrowOutward.svg?react"),
  Behance: () => import("./__svgs__/Behance.svg?react"),
  BeproNetwork: () => import("./__svgs__/BeproNetwork.svg?react"),
  Cross: () => import("./__svgs__/Cross.svg?react"),
  GitHub: () => import("./__svgs__/GitHub.svg?react"),
  Language: () => import("./__svgs__/Language.svg?react"),
  LinkedIn: () => import("./__svgs__/LinkedIn.svg?react"),
  Medium: () => import("./__svgs__/Medium.svg?react"),
  Mentalyc: () => import("./__svgs__/Mentalyc.svg?react"),
  NPM: () => import("./__svgs__/NPM.svg?react"),
  Palpitada: () => import("./__svgs__/Palpitada.svg?react"),
  Pen: () => import("./__svgs__/Pen.svg?react"),
  Polkamarkets: () => import("./__svgs__/Polkamarkets.svg?react"),
  Storybook: () => import("./__svgs__/Storybook.svg?react"),
  Themizer: () => import("./__svgs__/Themizer.svg?react"),
  Ufal: () => import("./__svgs__/Ufal.svg?react"),
  Vitalk: () => import("./__svgs__/Vitalk.svg?react"),
};
