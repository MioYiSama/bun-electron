import { ThemeProvider } from "@/src/components/theme-provider";
import { createRoot } from "react-dom/client";
import { MemoryRouter, Route, Routes } from "react-router";
import App from "./App";

window.addEventListener("DOMContentLoaded", () => {
  const element = document.getElementById("root");

  if (element) {
    const root = createRoot(element);

    root.render(
      <ThemeProvider>
        <MemoryRouter>
          <Routes>
            <Route path={"/"} element={<App />} />
            <Route path={"/*"} element={<h1>404 Not Found</h1>} />
          </Routes>
        </MemoryRouter>
      </ThemeProvider>
    );
  }
});
