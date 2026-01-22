import { render, screen } from "@testing-library/react";
import App from "./App";
import { ThemeProvider } from "./contexts/ThemeContext";
import { HelmetProvider } from "react-helmet-async";

test("renders App without crashing", () => {
  render(
    <ThemeProvider>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </ThemeProvider>,
  );
});
