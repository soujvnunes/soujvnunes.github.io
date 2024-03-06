import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "config/i18n";
import App from "./App";
import "./main.css";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
