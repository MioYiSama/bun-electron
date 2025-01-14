import { createRoot } from "react-dom/client";
import Layout from "./Layout";
import App from "./App";
import { Link, MemoryRouter, Route, Routes } from "react-router";

window.addEventListener("DOMContentLoaded", () => {
  const root = createRoot(document.getElementById("root")!);

  root.render(
    <Layout>
      <MemoryRouter>
        <nav>
          <Link to="/">App</Link>
          <Link to="/error">Other</Link>
        </nav>
        <Routes>
          <Route path={"/"} element={<App />} />
          <Route path={"/*"} element={<h1>404 Not Found</h1>} />
        </Routes>
      </MemoryRouter>
    </Layout>
  );
});
