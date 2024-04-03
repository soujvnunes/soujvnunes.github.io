import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import classNames from "consts/classNames";
import type {
  Ref,
  ComponentPropsWithRef,
  Component,
} from "types/PolymorphicComponent";

type ButtonProps<C extends React.ElementType> = ComponentPropsWithRef<
  C,
  {
    startItem?: React.ReactNode;
    endItem?: React.ReactNode;
    item?: boolean;
    /** @default md */
    size?: "sm" | "md";
    /** @default outline */
    variant?: "text" | "outline" | "tone";
  }
>;

const Button: Component<ButtonProps<React.ElementType>> = forwardRef(
  function Button<T extends React.ElementType>(
    {
      as,
      children,
      startItem,
      endItem,
      className,
      item,
      variant = "outline",
      size = "md",
      // todo: props' becoming undefined
      ...props
    }: ButtonProps<T>,
    ref: Ref<T>,
  ) {
    const ButtonRoot = as ?? "button";

    return (
      <ButtonRoot
        ref={ref}
        className={twMerge(
          classNames.button.root,
          classNames.button.variant[variant],
          classNames.button.size[size],
          !!startItem && size === "sm" && "pl-1",
          !!endItem && size === "sm" && "pr-1",
          !!startItem && size === "md" && "pr-3",
          !!endItem && size === "md" && "pl-3",
          item && size === "sm" && "px-0.5",
          className,
        )}
        {...props}
      >
        {!!startItem && <span className="mr-auto pr-1">{startItem}</span>}
        {children}
        {!!endItem && <span className="ml-auto pl-1">{endItem}</span>}
      </ButtonRoot>
    );
  },
);

export default Button;
