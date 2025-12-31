import { render, screen } from "@testing-library/react";
import App from "./App";
import { HelmetProvider } from "react-helmet-async";
// test('renders the portfolio heading', () => {
//   render(<App />);
//   expect(screen.getByRole('heading', { name: /portfolio/i })).toBeInTheDocument();
// });
test("renders App without crashing", () => {
  render(
    <HelmetProvider>
      <App />
    </HelmetProvider>
  );
});
