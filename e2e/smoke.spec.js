import { test, expect } from "@playwright/test";

test.describe("Site smoke test", () => {
  test("home page loads with the header and hero content", async ({
    page,
  }) => {
    await page.goto("/");

    await expect(page).toHaveTitle(/Designer_suits_Nepal/);
    await expect(
      page.getByRole("banner").getByText("ATELIER"),
    ).toBeVisible();
  });

  test("primary navigation links reach their pages", async ({ page }) => {
    await page.goto("/");
    const nav = page.getByRole("navigation");

    await nav.getByRole("link", { name: "Products" }).click();
    await expect(page).toHaveURL(/\/products$/);

    await nav.getByRole("link", { name: "About" }).click();
    await expect(page).toHaveURL(/\/about$/);

    await nav.getByRole("link", { name: "Contact" }).click();
    await expect(page).toHaveURL(/\/contact$/);
    await expect(
      page.getByRole("heading", { name: /Book Your/i }),
    ).toBeVisible();

    await nav.getByRole("link", { name: "Socials" }).click();
    await expect(page).toHaveURL(/\/socials$/);

    await nav.getByRole("link", { name: "Home", exact: true }).click();
    await expect(page).toHaveURL(/\/$/);
  });

  test("an unknown product id does not crash the app", async ({ page }) => {
    const errors = [];
    page.on("pageerror", (err) => errors.push(err));

    await page.goto("/product/does-not-exist");

    expect(errors).toEqual([]);
  });

  test("contact form can be filled and submitted", async ({ page }) => {
    await page.goto("/contact");

    await page.getByLabel(/First Name/i).fill("Ram");
    await page.getByLabel(/Last Name/i).fill("Dahal");
    await page.getByLabel(/Email Address/i).fill("ram@example.com");
    await page.getByLabel(/Company Name/i).fill("Acme Co");
    await page
      .getByLabel(/Message/i)
      .fill("Looking for a fitting next week.");

    page.once("dialog", (dialog) => dialog.accept());
    await page.getByRole("button", { name: /Send Message/i }).click();
  });
});
