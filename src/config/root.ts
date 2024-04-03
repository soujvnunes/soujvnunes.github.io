import { createRoot } from "react-dom/client";

const container = document.getElementById("root");

export default container ? createRoot(container) : null;
