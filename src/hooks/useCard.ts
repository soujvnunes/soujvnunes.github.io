import { useContext } from "react";
import CardContext from "config/CardContext";

export default function useCard() {
  return useContext(CardContext);
}
