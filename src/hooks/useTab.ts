import { useCallback } from "react";

export default function useTab() {
  return {
    group,
    set: useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
      url.searchParams.set(searchParam, event.currentTarget.value);
      window.history.pushState({}, "", url);
    }, []),
    current: url.searchParams.get(searchParam) ?? group.contributions,
  } as const;
}

const url = new URL(document.location.href);
const searchParam = "tab" as const;
const group = {
  contributions: "contributions",
  /**
   * TODO: implement on 2.1
   *
   * about: "about",
   */
} as const;
