/**
 * From https://blog.logrocket.com/build-strongly-typed-polymorphic-components-react-typescript/
 *
 * AsProp
 * PropsToOmit
 * PolymorphicComponentProps: This is the first reusable type utility we built
 * ComponentPropsWithRef: This is a new type utitlity with ref!
 * Ref: This is the type for the "ref" only
 * TButton: This is the type used in the type annotation for the component
 */

interface AsProp<C extends React.ElementType> {
  as?: C;
}

type PropsToOmit<
  C extends React.ElementType,
  P extends object = Record<string, never>,
> = keyof (AsProp<C> & P);

type PolymorphicComponentProps<
  C extends React.ElementType,
  Props extends object = Record<string, never>,
> = React.PropsWithChildren<Props & AsProp<C>> &
  Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

export type Ref<C extends React.ElementType> =
  React.ComponentPropsWithRef<C>["ref"];

export type ComponentPropsWithRef<
  C extends React.ElementType,
  Props extends object = Record<string, never>,
> = PolymorphicComponentProps<C, Props> & {
  ref?: Ref<C>;
};

export type Component<P> = (props: P) => React.ReactNode;
