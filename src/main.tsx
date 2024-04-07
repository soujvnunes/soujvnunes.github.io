import { StrictMode, Suspense } from "react";
import "config/i18n";
import root from "config/root";
import SuspenseFallback from "containers/SuspenseFallback";
import LazyApp from "./LazyApp";
import "./main.css";

root?.render(
  <StrictMode>
    <Suspense fallback={<SuspenseFallback />}>
      <LazyApp />
    </Suspense>
  </StrictMode>,
);
