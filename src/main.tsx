import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { installViewportGuard } from "./utils/viewportGuard";
import "./styles.css";

installViewportGuard();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
