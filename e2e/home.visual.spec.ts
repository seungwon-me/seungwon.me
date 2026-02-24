import { expect, test } from "@playwright/test";

test("home route smoke and visual", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator('button[aria-label="테마 토글"]')).toBeVisible();
  await expect(page.locator("main")).toBeVisible();
  await expect(page).toHaveScreenshot("home-route.png", { fullPage: true });
});
