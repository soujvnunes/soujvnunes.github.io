import { useContext } from "react";
import { CardContext } from "providers/CardProvider";

export default function useCard() {
  return useContext(CardContext);
}
