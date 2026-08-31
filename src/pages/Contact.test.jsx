import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Contact from "./Contact";

describe("Contact page", () => {
  let alertSpy;
  let consoleLogSpy;

  beforeEach(() => {
    alertSpy = vi.spyOn(window, "alert").mockImplementation(() => {});
    consoleLogSpy = vi.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    alertSpy.mockRestore();
    consoleLogSpy.mockRestore();
  });

  it("renders all required contact fields", () => {
    render(<Contact />);

    expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Last Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email Address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Company Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Service Interested In/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();
  });

  it("defaults the service dropdown to Bespoke Suit", () => {
    render(<Contact />);
    expect(screen.getByLabelText(/Service Interested In/i)).toHaveValue(
      "Bespoke Suit",
    );
  });

  it("does not submit when required fields are empty", async () => {
    const user = userEvent.setup();
    render(<Contact />);

    await user.click(screen.getByRole("button", { name: /Send Message/i }));

    expect(alertSpy).not.toHaveBeenCalled();
    expect(consoleLogSpy).not.toHaveBeenCalled();
  });

  it("rejects a malformed email via native validation", async () => {
    const user = userEvent.setup();
    render(<Contact />);

    const emailInput = screen.getByLabelText(/Email Address/i);
    await user.type(emailInput, "not-an-email");

    expect(emailInput).toBeInvalid();
  });

  it("submits with entered values and shows the confirmation alert", async () => {
    const user = userEvent.setup();
    render(<Contact />);

    await user.type(screen.getByLabelText(/First Name/i), "Ram");
    await user.type(screen.getByLabelText(/Last Name/i), "Dahal");
    await user.type(
      screen.getByLabelText(/Email Address/i),
      "ram@example.com",
    );
    await user.type(screen.getByLabelText(/Company Name/i), "Acme Co");
    await user.selectOptions(
      screen.getByLabelText(/Service Interested In/i),
      "Custom Shirts",
    );
    await user.type(
      screen.getByLabelText(/Message/i),
      "Looking for a fitting next week.",
    );

    await user.click(screen.getByRole("button", { name: /Send Message/i }));

    expect(consoleLogSpy).toHaveBeenCalledWith(
      "Form Submitted:",
      expect.objectContaining({
        firstName: "Ram",
        lastName: "Dahal",
        email: "ram@example.com",
        companyName: "Acme Co",
        serviceInterestedIn: "Custom Shirts",
        message: "Looking for a fitting next week.",
      }),
    );
    expect(alertSpy).toHaveBeenCalledTimes(1);
  });
});
