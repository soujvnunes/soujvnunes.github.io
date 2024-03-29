import classNames from "consts/classNames";
import { PickFrom } from "types/PickFrom";

type MainProps = PickFrom<"main", "children">;

export default function Main(props: MainProps) {
  return <main className={classNames.container.root} {...props} />;
}
