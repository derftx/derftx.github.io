import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, test } from "vitest";
import { Footer } from "../src/components/footer";

describe("footer component", () => {
  test("renders the title", () => {
    render(<Footer />);

    expect(screen.queryByText(/derftx/i)).not.toBeNull();
  });
});
