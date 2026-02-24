import { expect, test } from "@playwright/test";

test("pdf route smoke and visual", async ({ page }) => {
  await page.goto("/pdf");
  await expect(page.locator("main")).toBeVisible();
  await expect(page.locator("div.break-before.pt-12").first()).toBeVisible();
  await expect(page).toHaveScreenshot("pdf-route.png", { fullPage: true });
});

test("pdf projects section visual", async ({ page }) => {
  await page.goto("/pdf");
  const projectsSection = page
    .locator("section")
    .filter({ has: page.getByRole("heading", { name: "Projects" }) })
    .first();
  await expect(projectsSection).toBeVisible();
  await expect(projectsSection).toHaveScreenshot("pdf-projects-section.png");
});

test("pdf open source section visual", async ({ page }) => {
  await page.goto("/pdf");
  const openSourceSection = page
    .locator("section")
    .filter({ has: page.getByRole("heading", { name: "Open Source Contributions" }) })
    .first();
  await expect(openSourceSection).toBeVisible();
  await expect(openSourceSection).toHaveScreenshot("pdf-open-source-section.png");
});
