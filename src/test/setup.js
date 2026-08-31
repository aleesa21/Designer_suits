import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

// Auto-unmount React trees after each test so state doesn't leak between them.
afterEach(() => {
  cleanup();
});
