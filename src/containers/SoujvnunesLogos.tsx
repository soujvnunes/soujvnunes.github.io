import { PickFrom } from "types/PickFrom";
import SoujvnunesSymbol from "./SoujvnunesSymbol";

type SoujvnunesLogosProps = PickFrom<"strong", "className">;

export default function SoujvnunesLogos(props: SoujvnunesLogosProps) {
  return (
    <strong {...props}>
      sou
      <SoujvnunesSymbol />
      unes
    </strong>
  );
}
