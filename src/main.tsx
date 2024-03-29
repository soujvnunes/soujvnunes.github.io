import { StrictMode, Suspense } from "react";
import "config/i18n";
import SuspenseFallback from "containers/SuspenseFallback";
import LazyApp from "./LazyApp";
import root from "./root";
import "./main.css";

root?.render(
  <StrictMode>
    <Suspense fallback={<SuspenseFallback />}>
      <LazyApp />
    </Suspense>
  </StrictMode>,
);
