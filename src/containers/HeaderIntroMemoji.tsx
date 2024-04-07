import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";
import hasWebKit from "helpers/hasWebKit";
import { PickFrom } from "types/PickFrom";
import HeaderIntroMemojiFallback from "./HeaderIntroMemojiFallback";
import HeaderIntroMemojiMov from "./HeaderIntroMemojiMov";
import Snackbars from "./Snackbars";

type HeaderMemojiProps = PickFrom<"span", "className">;

export default function HeaderIntroMemoji({ className }: HeaderMemojiProps) {
  const [t] = useTranslation();
  const [show, setShow] = useState(false);
  const handleShow = useCallback((params: boolean) => {
    setShow(params);
  }, []);

  return (
    <>
      <Snackbars show={show} title={t("reduced_resources.title")}>
        {t("reduced_resources.description")}
      </Snackbars>
      <span
        className={twMerge(
          "inline-flex h-32 w-32 items-center justify-center overflow-hidden",
          className,
        )}
      >
        {hasWebKit ? (
          <HeaderIntroMemojiMov onPlaying={handleShow} />
        ) : (
          <HeaderIntroMemojiFallback />
        )}
      </span>
    </>
  );
}
