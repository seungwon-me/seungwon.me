import { expect, test } from "@playwright/test";

test("pdf route smoke and visual", async ({ page }) => {
  await page.goto("/pdf");
  await expect(page.locator("main")).toBeVisible();
  await expect(page.locator("div.break-before.pt-12").first()).toBeVisible();
  await expect(page).toHaveScreenshot("pdf-route.png", { fullPage: true });
});
