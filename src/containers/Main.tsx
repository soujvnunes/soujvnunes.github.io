import { Tab } from "@headlessui/react";
import classNames from "consts/classNames";

type MainProps = Pick<React.ComponentPropsWithoutRef<"main">, "children">;

export default function Main(props: MainProps) {
  return (
    <Tab.Panels as="main" className={classNames.container.root} {...props} />
  );
}
