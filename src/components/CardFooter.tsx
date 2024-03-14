import { twMerge } from "tailwind-merge";

type CardFooterProps = Pick<
  React.ComponentPropsWithoutRef<"footer">,
  "children" | "className"
>;

export default function CardFooter({ className, ...props }: CardFooterProps) {
  return (
    <footer
      className={twMerge("mt-auto flex justify-end gap-1", className)}
      {...props}
    />
  );
}
