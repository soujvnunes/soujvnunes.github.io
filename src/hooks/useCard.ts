import { createContext, useContext } from "react";

export const CardContext = createContext({
  labelId: "",
  descriptionId: "",
});

export default function useCard() {
  return useContext(CardContext);
}
