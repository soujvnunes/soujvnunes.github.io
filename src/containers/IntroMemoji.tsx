import { useRef } from "react";
import { twMerge } from "tailwind-merge";
import Image from "components/Image";
import memoji from "/memoji.mov";
import memoji_fallback from "/memoji.png";

export default function IntroMemoji({
  className,
}: React.ComponentPropsWithoutRef<"video">) {
  const video = useRef<HTMLVideoElement | null>(null);
  const timeout = useRef(0);

  function handleTimeUpdate(event: React.SyntheticEvent<HTMLVideoElement>) {
    const node = video.current;

    if (node) {
      if (event.currentTarget.currentTime >= 11) {
        node.currentTime = 7;

        timeout.current = window.setTimeout(() => {
          void (async () => {
            await node.play();
          })();
        }, 3000);
      }
    } else {
      window.clearInterval(timeout.current);
    }
  }

  return (
    <span className={twMerge("inline-block overflow-hidden", className)}>
      <video
        muted
        autoPlay
        playsInline
        preload="metadata"
        crossOrigin="anonymous"
        className="h-full scale-150"
        ref={video}
        src={memoji}
        poster={memoji_fallback}
        onTimeUpdate={handleTimeUpdate}
      >
        <Image alt="" className="h-full scale-150" src={memoji_fallback} />
      </video>
    </span>
  );
}
