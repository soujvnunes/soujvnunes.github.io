type CardFooterProps = Pick<
  React.ComponentPropsWithoutRef<"footer">,
  "children"
>;

export default function CardFooter(props: CardFooterProps) {
  return <footer className="mt-auto flex justify-end gap-1" {...props} />;
}
