import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, test } from "vitest";
import { Header } from "../src/components/header";

describe("header component", () => {
  test("renders the navbar", () => {
    render(<Header />);

    expect(screen.queryByText(/github/i)).not.toBeNull();
  });
});
