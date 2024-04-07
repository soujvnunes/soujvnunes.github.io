import { twMerge } from "tailwind-merge";
import getSupportsMov from "helpers/getSupportsMov";
import { PickFrom } from "types/PickFrom";
import HeaderIntroMemojiFallback from "./HeaderIntroMemojiFallback";
import HeaderIntroMemojiMov from "./HeaderIntroMemojiMov";

type HeaderIntroMemojiProps = PickFrom<"span", "className">;

export default function HeaderIntroMemoji({
  className,
}: HeaderIntroMemojiProps) {
  return (
    <>
      <span
        className={twMerge(
          "inline-flex h-32 w-32 items-center justify-center overflow-hidden",
          className,
        )}
      >
        {getSupportsMov() ? (
          <HeaderIntroMemojiMov />
        ) : (
          <HeaderIntroMemojiFallback />
        )}
      </span>
    </>
  );
}
