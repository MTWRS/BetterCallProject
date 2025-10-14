import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PaginaWeb } from "./screens/PaginaWeb";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <PaginaWeb />
  </StrictMode>,
);
