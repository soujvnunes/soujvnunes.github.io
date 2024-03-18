import { useCallback, useState } from "react";
import IntroMemojiFallback from "./IntroMemojiFallback.svg?react";
import memojiUrl from "/memoji.mov";

const introMemojiFallback = (
  <IntroMemojiFallback className="absolute w-36 lg:w-60" />
);
const introMemojiDuration = 11;
const introMemojiFrame = 7;

export default function IntroMemoji() {
  const [canPlay, setCanPlay] = useState(false);
  const handleCanPlayThrough = useCallback(() => {
    setCanPlay(true);
  }, []);
  const handleTimeUpdate = useCallback(
    (event: React.SyntheticEvent<HTMLVideoElement>) => {
      const video = event.currentTarget;

      if (event.currentTarget.currentTime >= introMemojiDuration) {
        video.currentTime = introMemojiFrame;

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
    <span className="-mr-11 inline-flex h-24 w-24 items-center justify-center overflow-hidden lg:-mr-20 lg:h-40 lg:w-40">
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
        {introMemojiFallback}
      </video>
      {!canPlay && introMemojiFallback}
    </span>
  );
}
