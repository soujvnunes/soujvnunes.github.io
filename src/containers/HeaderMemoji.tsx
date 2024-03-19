import { useCallback, useState } from "react";
import HeaderMemojiFallback from "./HeaderMemojiFallback.svg?react";
import memojiUrl from "/memoji.mov";

const headerMemojiFallback = (
  <HeaderMemojiFallback className="absolute w-36 lg:w-60" />
);
const headerMemojiDuration = 11;
const headerMemojiFrame = 7;

export default function HeaderMemoji() {
  const [canPlay, setCanPlay] = useState(false);
  const handleCanPlayThrough = useCallback(() => {
    setCanPlay(true);
  }, []);
  const handleTimeUpdate = useCallback(
    (event: React.SyntheticEvent<HTMLVideoElement>) => {
      const video = event.currentTarget;

      if (video.currentTime >= headerMemojiDuration) {
        video.currentTime = headerMemojiFrame;

        void (async () => {
          try {
            await video.play();
          } catch (error) {
            setCanPlay(false);
          }
        })();
      }
    },
    [],
  );

  return (
    <span className="-ml-8 -mr-6 inline-flex h-32 w-32 items-center justify-center overflow-hidden">
      <video
        muted
        autoPlay
        playsInline
        preload="none"
        crossOrigin="anonymous"
        className="h-full scale-150"
        src={memojiUrl}
        onCanPlayThrough={handleCanPlayThrough}
        onTimeUpdate={handleTimeUpdate}
      >
        {headerMemojiFallback}
      </video>
      {!canPlay && headerMemojiFallback}
    </span>
  );
}
