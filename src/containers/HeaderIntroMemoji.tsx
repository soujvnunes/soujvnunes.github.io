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
        "inline-flex h-24 w-24 items-center justify-center overflow-hidden lg:h-32 lg:w-32",
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
        onPlaying={handlePlaying}
        onEnded={handleEnded}
        className={twMerge("h-full scale-150", !isPlaying && "opacity-0")}
      >
        <HeaderIntroMemojiFallback />
      </video>
      {!isPlaying && <HeaderIntroMemojiFallback className="animate-pulse" />}
    </span>
  );
}
