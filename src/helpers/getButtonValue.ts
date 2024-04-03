export function getButtonValue(value: string) {
  return {
    currentTarget: {
      value,
    },
  } as React.MouseEvent<HTMLButtonElement>;
}
