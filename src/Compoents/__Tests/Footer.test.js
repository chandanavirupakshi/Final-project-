import { screen, render } from "@testing-library/react";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Footer from "../Footer";

describe("Footer Component", () => {
  it("checks whether Text is Present", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Footer />} />

        </Routes>
      </BrowserRouter>
    );
    expect(screen.getByText(/© 2023 topjobs, all rights reserved\./i)).toBeInTheDocument();
});
});
