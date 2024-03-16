import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import classNames from "consts/classNames";

const defaultElement = "button" as const;

type DefaultElement = typeof defaultElement;

/**
 * From https://blog.logrocket.com/build-strongly-typed-polymorphic-components-react-typescript/
 *
 * AsProp
 * PropsToOmit
 * PolymorphicComponentProps: This is the first reusable type utility we built
 * PolymorphicComponentPropsWithRef: This is a new type utitlity with ref!
 * PolymorphicRef: This is the type for the "ref" only
 * TButton: This is the type used in the type annotation for the component
 */

interface AsProp<C extends React.ElementType = DefaultElement> {
  as?: C;
}

type PropsToOmit<
  C extends React.ElementType = DefaultElement,
  P extends object = Record<string, never>,
> = keyof (AsProp<C> & P);

type PolymorphicComponentProps<
  C extends React.ElementType = DefaultElement,
  Props extends object = Record<string, never>,
> = React.PropsWithChildren<Props & AsProp<C>> &
  Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

type PolymorphicComponentPropsWithRef<
  C extends React.ElementType = DefaultElement,
  Props extends object = Record<string, never>,
> = PolymorphicComponentProps<C, Props> & {
  ref?: PolymorphicRef<C>;
};

type PolymorphicRef<C extends React.ElementType = DefaultElement> =
  React.ComponentPropsWithRef<C>["ref"];

type ButtonProps<C extends React.ElementType = DefaultElement> =
  PolymorphicComponentPropsWithRef<
    C,
    {
      startItem?: React.ReactNode;
      endItem?: React.ReactNode;
      /** @default md */
      size?: "sm" | "md";
      /** @default outline */
      variant?: "text" | "outline" | "toned";
    }
  >;

type TButton = <C extends React.ElementType = DefaultElement>(
  props: ButtonProps<C>,
) => React.ReactNode;

const Button: TButton = forwardRef(function Button<
  T extends React.ElementType = DefaultElement,
>(
  {
    as,
    children,
    startItem,
    endItem,
    className,
    variant = "outline",
    size = "md",
    // todo: props' becoming undefined
    ...props
  }: ButtonProps<T>,
  ref: PolymorphicRef<T>,
) {
  const ButtonRoot = as ?? defaultElement;

  return (
    <ButtonRoot
      ref={ref}
      className={twMerge(
        classNames.button.root,
        classNames.button.variant[variant],
        classNames.button.size[size],
        !!startItem && size === "sm" && "pr-2",
        !!endItem && size === "sm" && "pl-2",
        !!startItem && size === "md" && "pr-3",
        !!endItem && size === "md" && "pl-3",
        className,
      )}
      {...props}
    >
      {!!startItem && <span className="mr-auto pr-1">{startItem}</span>}
      {children}
      {!!endItem && <span className="ml-auto pl-1">{endItem}</span>}
    </ButtonRoot>
  );
});

export default Button;
