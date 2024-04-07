import { twMerge } from "tailwind-merge";
import { PickFrom } from "types/PickFrom";

type CardFooterProps = PickFrom<"footer", "children" | "className">;

export default function CardFooter({ className, ...props }: CardFooterProps) {
  return (
    <footer
      className={twMerge("mt-auto flex justify-end gap-1", className)}
      {...props}
    />
  );
}
