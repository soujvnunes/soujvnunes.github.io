import { StrictMode, Suspense } from "react";
import SoujvnunesLogos from "containers/SoujvnunesLogos";
import LazyApp from "./LazyApp";
import root from "./root";

root?.render(
  <StrictMode>
    <Suspense
      fallback={<SoujvnunesLogos className="m-auto animate-pulse text-2xl" />}
    >
      <LazyApp />
    </Suspense>
  </StrictMode>,
);
