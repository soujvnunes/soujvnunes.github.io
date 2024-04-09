import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";
import isAppleWidget from "helpers/isAppleWidget";
import { PickFrom } from "types/PickFrom";
import HeaderIntroMemojiFallback from "./HeaderIntroMemojiFallback";
import Snackbars from "./Snackbars";
import memojiUrl from "/memoji.mov";

type HeaderIntroMemojiProps = PickFrom<"span", "className">;

export default function HeaderIntroMemoji({
  className,
}: HeaderIntroMemojiProps) {
  const [t] = useTranslation();
  const [isPlaying, setPlaying] = useState(false);
  const [canPlay, setCanPlay] = useState(false);
  const [isPaused, setPaused] = useState(false);
  const handlePause = useCallback(() => {
    setPaused(true);
  }, []);
  const handleCanPlay = useCallback(() => {
    setCanPlay(true);
  }, []);
  const handlePlaying = useCallback(() => {
    setPlaying(true);
  }, []);
  const handleEnded = useCallback(
    ({ currentTarget: video }: React.SyntheticEvent<HTMLVideoElement>) => {
      video.currentTime = 7;

      video.play().catch(() => {
        video.currentTime = 0;

        setPlaying(false);
      });
    },
    [],
  );
  const isDefinitelyPaused = (!isAppleWidget && isPaused) || !isPlaying;

  return (
    <span
      className={twMerge(
        "inline-flex h-32 w-32 items-center justify-center overflow-hidden",
        className,
      )}
    >
      <Snackbars
        title={t("reduced_resources.title")}
        show={
          isAppleWidget
            ? !isPlaying && canPlay
            : isPaused && !(isPlaying || canPlay)
        }
      >
        {t("reduced_resources.description")}
      </Snackbars>
      <video
        muted
        autoPlay
        playsInline
        preload="none"
        crossOrigin="anonymous"
        src={memojiUrl}
        onPause={handlePause}
        onEnded={handleEnded}
        onPlaying={handlePlaying}
        onCanPlayThrough={handleCanPlay}
        className={twMerge(
          "h-full scale-150",
          isDefinitelyPaused && "pointer-events-none opacity-0",
        )}
      >
        <HeaderIntroMemojiFallback />
      </video>
      {isDefinitelyPaused && (
        <HeaderIntroMemojiFallback className={canPlay ? "" : "animate-pulse"} />
      )}
    </span>
  );
}
