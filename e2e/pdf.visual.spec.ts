import { expect, test } from "@playwright/test";

test("pdf route smoke and visual", async ({ page }) => {
  await page.goto("/pdf");
  await expect(page.locator("main")).toBeVisible();
  await expect(page.locator("main section > h2")).toHaveText([
    "Career",
    "Side Projects",
    "Tech Stack",
    "Certifications",
    "Open Source Contributions",
    "Education",
    "Awards & Activities",
  ]);
  const techPage = page.locator("main > div.break-before.pt-12").filter({
    has: page.getByRole("heading", { name: "Tech Stack", exact: true }),
  });
  await expect(techPage).toBeVisible();
  await expect(page).toHaveScreenshot("pdf-route.png");
});

test("pdf projects section visual", async ({ page }) => {
  await page.goto("/pdf");
  const projectsSection = page
    .locator("section")
    .filter({ has: page.getByRole("heading", { name: "Side Projects", exact: true }) })
    .first();
  await expect(projectsSection).toBeVisible();
  const firstProjectCard = projectsSection.locator("div.bg-\\[var\\(--bg-secondary\\)\\]").first();
  await expect(firstProjectCard).toBeVisible();
  const firstProjectPreview = firstProjectCard.locator("div.h-80.relative").first();
  await expect(firstProjectPreview).toBeVisible();
  await expect(firstProjectPreview).toHaveScreenshot("pdf-projects-first-preview.png");
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
