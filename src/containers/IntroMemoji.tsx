import { useRef } from "react";
import { twMerge } from "tailwind-merge";
import Image from "components/Image";
import me from "/me.jpg";
import memoji from "/me.mov";

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
        autoPlay
        muted
        crossOrigin="anonymous"
        className="h-full scale-125"
        src={memoji}
        ref={video}
        onTimeUpdate={handleTimeUpdate}
      >
        <Image alt="" size="lg" radius="2xs" src={me} />
      </video>
    </span>
  );
}
