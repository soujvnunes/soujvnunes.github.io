import { StrictMode, Suspense } from "react";
import "config/i18n";
import SoujvnunesLogos from "containers/SoujvnunesLogos";
import LazyApp from "./LazyApp";
import root from "./root";
import "./main.css";

root?.render(
  <StrictMode>
    <Suspense
      fallback={<SoujvnunesLogos className="m-auto animate-pulse text-2xl" />}
    >
      <LazyApp />
    </Suspense>
  </StrictMode>,
);
