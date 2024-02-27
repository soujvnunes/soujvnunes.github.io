import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./main.css";

const container = document.getElementById("root");
const root = container ? createRoot(container) : null;

root?.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
