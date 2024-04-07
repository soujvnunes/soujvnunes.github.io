import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";
import isAppleWidget from "helpers/isAppleWidget";
import HeaderIntroMemojiFallback from "./HeaderIntroMemojiFallback";
import Snackbars from "./Snackbars";
import memojiUrl from "/memoji.mov";

export default function HeaderIntroMemojiMov() {
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

  return (
    <>
      <Snackbars
        show={
          isAppleWidget
            ? !isPlaying && canPlay
            : isPaused && !(isPlaying || canPlay)
        }
        title={t("reduced_resources.title")}
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
        className={twMerge("h-full scale-150", !isPlaying && "opacity-0")}
      >
        <HeaderIntroMemojiFallback />
      </video>
      {!isPlaying && (
        <HeaderIntroMemojiFallback className={canPlay ? "" : "animate-pulse"} />
      )}
    </>
  );
}
