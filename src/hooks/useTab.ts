import { useCallback, useMemo } from "react";

export default function useTab() {
  const url = useMemo(() => new URL(document.location.href), []);
  const current = url.searchParams.get(searchParam) ?? group.contributions;
  const set = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      url.searchParams.set(searchParam, event.currentTarget.value);
      window.history.pushState({}, "", url);
    },
    [url],
  );

  return {
    group,
    current,
    set,
  } as const;
}

const searchParam = "tab" as const;
const group = {
  contributions: "contributions",
  about: "about",
} as const;
