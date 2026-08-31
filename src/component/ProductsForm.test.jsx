import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProductsForm from "./ProductsForm";

const categories = [
  { category_id: 1, name: "Suits" },
  { category_id: 2, name: "Shirts" },
];

describe("ProductsForm", () => {
  let consoleLogSpy;

  beforeEach(() => {
    consoleLogSpy = vi.spyOn(console, "log").mockImplementation(() => {});
  });

  it("renders in create mode with default values", () => {
    render(<ProductsForm categories={categories} closeForm={vi.fn()} />);

    expect(screen.getByText("Create")).toBeInTheDocument();
    expect(screen.getByText("New Creation")).toBeInTheDocument();
    expect(screen.getByLabelText(/Design Title/i)).toHaveValue("");
    // is_visible defaults to true
    expect(
      screen.getByLabelText(/Publish to Products Page/i),
    ).toBeChecked();
    expect(
      screen.getByLabelText(/Featured on Home Page/i),
    ).not.toBeChecked();
  });

  it("prefills fields from editedData in edit mode", () => {
    const editedData = {
      category_id: "2",
      name: "Velvet Blazer",
      description: "A fine blazer",
      fabric_options: "Velvet, Silk",
      is_featured: true,
      is_visible: false,
      display_order: 3,
    };

    render(
      <ProductsForm
        categories={categories}
        closeForm={vi.fn()}
        editedData={editedData}
      />,
    );

    expect(screen.getByText("Edit")).toBeInTheDocument();
    expect(screen.getByText("Editing Entry")).toBeInTheDocument();
    expect(screen.getByLabelText(/Design Title/i)).toHaveValue(
      "Velvet Blazer",
    );
    expect(screen.getByLabelText(/Description/i)).toHaveValue(
      "A fine blazer",
    );
    expect(screen.getByLabelText(/Fabrics/i)).toHaveValue("Velvet, Silk");
    expect(screen.getByLabelText(/Featured on Home Page/i)).toBeChecked();
    expect(
      screen.getByLabelText(/Publish to Products Page/i),
    ).not.toBeChecked();
    expect(screen.getByLabelText(/Display Rank/i)).toHaveValue(3);
  });

  it("requires a title before the form can be submitted", async () => {
    const user = userEvent.setup();
    const closeForm = vi.fn();
    render(<ProductsForm categories={categories} closeForm={closeForm} />);

    const titleInput = screen.getByLabelText(/Design Title/i);
    expect(titleInput).toBeRequired();

    await user.click(screen.getByRole("button", { name: /Create Design/i }));

    // Native required-field validation blocks submission — closeForm never runs.
    expect(closeForm).not.toHaveBeenCalled();
  });

  it("splits comma-separated fabrics into a trimmed array on submit", async () => {
    const user = userEvent.setup();
    const closeForm = vi.fn();
    render(<ProductsForm categories={categories} closeForm={closeForm} />);

    await user.type(screen.getByLabelText(/Design Title/i), "Royal Tux");
    await user.type(
      screen.getByLabelText(/Fabrics/i),
      "Velvet,  Silk ,Brocade",
    );
    await user.click(screen.getByRole("button", { name: /Create Design/i }));

    await waitFor(() => expect(closeForm).toHaveBeenCalledTimes(1));

    const [, payload] = consoleLogSpy.mock.calls.find(
      ([label]) => label === "Product Payload:",
    );
    expect(payload.fabric_options).toEqual(["Velvet", "Silk", "Brocade"]);
    expect(payload.title).toBe("Royal Tux");
  });

  it("calls closeForm when Cancel is clicked", async () => {
    const user = userEvent.setup();
    const closeForm = vi.fn();
    render(<ProductsForm categories={categories} closeForm={closeForm} />);

    await user.click(screen.getByRole("button", { name: /Cancel/i }));

    expect(closeForm).toHaveBeenCalledTimes(1);
  });

  it("updates category_id as a number when the select changes", async () => {
    const user = userEvent.setup();
    render(<ProductsForm categories={categories} closeForm={vi.fn()} />);

    const select = screen.getByLabelText(/Collection Category/i);
    await user.selectOptions(select, "2");

    expect(select).toHaveValue("2");
  });
});
