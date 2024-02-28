export function cn(...params: (string | null | undefined | false)[]) {
  return params.filter(Boolean).join(" ");
}
