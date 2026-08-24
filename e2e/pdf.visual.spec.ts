import { expect, test } from "@playwright/test";

test("pdf route smoke and visual", async ({ page }) => {
  const pageErrors: string[] = [];
  page.on("pageerror", (error) => pageErrors.push(error.message));
  await page.goto("/pdf");
  await expect(page.locator("main")).toBeVisible();
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/);
  await expect(page.locator("main section > h2")).toHaveText([
    "Career",
    "Tech Stack",
    "Open Source Contributions",
    "Awards & Activities",
    "Education",
    "Certifications",
    "Side Projects",
  ]);
  const careerSection = page.locator("main section").filter({
    has: page.getByRole("heading", { name: "Career", exact: true }),
  });
  await expect(careerSection).toContainText("2025.08 ~ 현재");
  await expect(careerSection).toContainText("S3에 동기 업로드한 뒤에만 개인정보를 익명화");

  const techPage = page.getByTestId("pdf-tech-page");
  await expect(techPage).toBeVisible();
  expect(pageErrors).toEqual([]);
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
