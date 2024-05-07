import { useCallback, useState } from "react";

export default function useBoundingClient() {
  const [rect, setRect] = useState(defaultRect);
  const ref = useCallback((node: HTMLElement | null) => {
    const boundingClientRect = node?.getBoundingClientRect();

    setRect(boundingClientRect ?? defaultRect);
  }, []);

  return { rect, ref };
}

const defaultRect = {
  bottom: 0,
  height: 0,
  left: 0,
  right: 0,
  top: 0,
  width: 0,
  x: 0,
  y: 0,
  toJSON: () => null,
};
