import ReactDOM from "react-dom/client";
import { describe, expect, test, vi } from "vitest";

vi.mock("react-dom/client", () => {
  return {
    default: {
      createRoot: vi.fn(() => {
        return {
          render: vi.fn(),
        };
      }),
    },
  };
});

describe("main component", () => {
  test("creates the root element", async () => {
    const root = document.createElement("div");

    root.id = "app";
    document.body.appendChild(root);

    await import("../src/main");

    expect(ReactDOM.createRoot).toHaveBeenCalledWith(root);
  });
});
