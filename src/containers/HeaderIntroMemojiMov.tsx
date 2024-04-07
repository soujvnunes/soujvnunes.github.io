import { useCallback, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import isAppleWidget from "helpers/isAppleWidget";
import HeaderIntroMemojiFallback from "./HeaderIntroMemojiFallback";
import memojiUrl from "/memoji.mov";

interface HeaderIntroMemojiMovProps {
  onPlaying(params: boolean): void;
}

export default function HeaderIntroMemojiMov({
  onPlaying,
}: HeaderIntroMemojiMovProps) {
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
        onPlaying(false);
      });
    },
    [onPlaying],
  );

  useEffect(() => {
    onPlaying(
      isAppleWidget
        ? !isPlaying && canPlay
        : isPaused && !(isPlaying || canPlay),
    );
  }, [canPlay, isPaused, isPlaying, onPlaying]);

  return (
    <>
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
