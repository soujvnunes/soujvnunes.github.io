import Socials from "./Socials";
import SoujvnunesLogos from "./SoujvnunesLogos";

export default function SuspenseFallback() {
  return (
    <div className="flex h-dvh">
      <span className="m-auto text-center">
        <h1>
          <SoujvnunesLogos className="m-auto animate-pulse text-2xl" />
        </h1>
        <p className="mb-4">victor nunes - design engineer</p>
        <Socials inline />
      </span>
    </div>
  );
}
