import { useCallback, useState } from "react";
import { twMerge } from "tailwind-merge";
import HeaderIntroMemojiFallback from "./HeaderIntroMemojiFallback";
import memojiUrl from "/memoji.mov";

type HeaderMemojiProps = Pick<
  React.ComponentPropsWithoutRef<"span">,
  "className"
>;

export default function HeaderIntroMemoji({ className }: HeaderMemojiProps) {
  const [isPlaying, setPlaying] = useState(false);
  const [canPlay, setCanPlay] = useState(false);
  const handleCanPlay = useCallback(() => {
    setCanPlay(true);
  }, []);
  const handlePlaying = useCallback(() => {
    setPlaying(true);
  }, []);
  const handleEnded = useCallback(
    (event: React.SyntheticEvent<HTMLVideoElement>) => {
      const video = event.currentTarget;

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
