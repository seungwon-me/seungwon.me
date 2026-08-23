import { expect, test } from "@playwright/test";

test("home route smoke and visual", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator('button[aria-label="테마 토글"]')).toBeVisible();
  await expect(page.locator("main")).toBeVisible();
  await expect(page.getByRole("link", { name: "portfolio.pdf" })).toHaveAttribute(
    "href",
    "/portfolio.pdf",
  );
  await expect(page.locator("main > section > h2")).toHaveText([
    "Career",
    "Tech Stack",
    "Open Source Contributions",
    "Side Projects",
    "Awards & Activities",
    "Education",
    "Certifications",
  ]);
  const careerSection = page.locator("main > section").filter({
    has: page.getByRole("heading", { name: "Career", exact: true }),
  });
  await expect(careerSection).toContainText("2025.08 ~ 현재");
  await expect(careerSection).toContainText("바우처 원장 신규 개발과 기존 예치금 결제 연계");
  await expect(careerSection).toContainText("S3에 동기 업로드한 뒤에만 개인정보를 익명화");
  await expect(careerSection).not.toContainText("broker 인계");

  const openSourceSection = page.locator("main > section").filter({
    has: page.getByRole("heading", { name: "Open Source Contributions", exact: true }),
  });
  await expect(openSourceSection).toContainText("#3423");
  await expect(openSourceSection.getByRole("link", { name: "redis/lettuce logo" })).toHaveAttribute(
    "href",
    "https://github.com/redis/lettuce",
  );

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
