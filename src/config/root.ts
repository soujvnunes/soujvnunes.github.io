import { createRoot } from "react-dom/client";

export const container = document.getElementById("root");

export default container ? createRoot(container) : null;
