import { createContext, useId, useState } from "react";

export const CardContext = createContext({
  labelId: "",
  descriptionId: "",
});

export default function CardProvider(props: React.PropsWithChildren) {
  const labelId = useId();
  const descriptionId = useId();
  const [ids] = useState({
    labelId,
    descriptionId,
  });

  return <CardContext.Provider value={ids} {...props} />;
}
