/**
 * Shorthand for picking components props wihout ref, instead of getting it all.
 * 
 * @param {string} element - The JSX intrinsic element to be picked from;
 * @param {object} props - Union of props to pick from the element.
 */
export type PickFrom<
  E extends keyof JSX.IntrinsicElements,
  P extends keyof React.ComponentPropsWithoutRef<E>,
> = Pick<React.ComponentPropsWithoutRef<E>, P>;
