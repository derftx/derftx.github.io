import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, test } from "vitest";
import { Index } from "../src/components/index";

describe("index component", () => {
  test("renders the title", () => {
    render(<Index />);

    expect(screen.queryByText(/derftx/i)).not.toBeNull();
  });
});
