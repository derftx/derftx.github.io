import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, test } from "vitest";
import App from "../src/app";

describe("app component", () => {
  test("renders the title", () => {
    render(<App />);

    expect(screen.queryAllByText(/derftx/i)).not.toBeNull();
  });
});
