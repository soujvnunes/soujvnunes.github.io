import { useCallback, useState } from "react";
import { twMerge } from "tailwind-merge";
import useSnackbar from "hooks/useSnackbar";
import { PickFrom } from "types/PickFrom";
import HeaderIntroMemojiFallback from "./HeaderIntroMemojiFallback";
import memojiUrl from "/memoji.mov";

type HeaderMemojiProps = PickFrom<"span", "className">;

export default function HeaderIntroMemoji({ className }: HeaderMemojiProps) {
  const snackbar = useSnackbar();
  const [isPlaying, setPlaying] = useState(false);
  const [canPlay, setCanPlay] = useState(false);
  const handlePause = useCallback(() => {
    if (isPlaying || canPlay) return;

    snackbar.show({
      title: "🔋 Reduced Resources",
      children:
        "Your device is probably with battery saving on. Would you like to disable it and reload the page for a better web experience?",
    });
  }, [canPlay, isPlaying, snackbar]);
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
    <span
      className={twMerge(
        "inline-flex h-32 w-32 items-center justify-center overflow-hidden",
        className,
      )}
    >
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
    </span>
  );
}
