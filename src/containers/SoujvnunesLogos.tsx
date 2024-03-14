import SoujvnunesSymbol from "./SoujvnunesSymbol";

type SoujvnunesLogosProps = Pick<
  React.ComponentPropsWithoutRef<"strong">,
  "className"
>;

export default function SoujvnunesLogos(props: SoujvnunesLogosProps) {
  return (
    <strong {...props}>
      sou
      <SoujvnunesSymbol />
      unes
    </strong>
  );
}
