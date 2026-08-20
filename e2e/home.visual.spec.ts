import { expect, test } from "@playwright/test";

test("home route smoke and visual", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator('button[aria-label="테마 토글"]')).toBeVisible();
  await expect(page.locator("main")).toBeVisible();
  await expect(page.locator("main > section > h2")).toHaveText([
    "Career",
    "Tech Stack",
    "Open Source Contributions",
    "Side Projects",
    "Awards & Activities",
    "Education",
    "Certifications",
  ]);

  const sections = page.locator("main > section");
  for (let index = 0; index < (await sections.count()); index += 1) {
    await sections.nth(index).scrollIntoViewIfNeeded();
  }
  await page.locator("footer").scrollIntoViewIfNeeded();
  await page.evaluate(() => window.scrollTo(0, 0));

  await expect(page).toHaveScreenshot("home-route.png", { fullPage: true });
});

test("home project modal visual", async ({ page }) => {
  await page.goto("/");
  const projectsSection = page.locator("main > section").filter({
    has: page.getByRole("heading", { name: "Side Projects", exact: true }),
  });
  await expect(projectsSection).toBeVisible();
  await projectsSection.locator("div.cursor-pointer.group").first().click();
  const modalCloseButton = page.locator('button[aria-label="Close project details"]');
  await expect(modalCloseButton).toBeVisible();
  const modalCard = page.locator("div.max-w-5xl.w-full").first();
  await expect(modalCard).toHaveScreenshot("home-project-modal.png");
});
