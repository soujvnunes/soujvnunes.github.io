import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "config/i18n";
import "./main.css";
import SoujvnunesLogos from "components/SoujvnunesLogos";
import LazyApp from "./LazyApp";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense
      fallback={<SoujvnunesLogos className="m-auto animate-pulse text-2xl" />}
    >
      <LazyApp />
    </Suspense>
  </StrictMode>,
);
