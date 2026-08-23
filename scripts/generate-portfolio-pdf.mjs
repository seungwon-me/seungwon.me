import { chromium } from "@playwright/test";

const baseUrl = process.env.PORTFOLIO_BASE_URL ?? "http://127.0.0.1:3000";
const browser = await chromium.launch({ headless: true });

try {
  const page = await browser.newPage({ colorScheme: "light" });
  const pageErrors = [];
  page.on("pageerror", (error) => pageErrors.push(error.message));

  const response = await page.goto(`${baseUrl}/pdf`, { waitUntil: "networkidle" });
  if (!response?.ok()) {
    throw new Error(`Failed to load ${baseUrl}/pdf: HTTP ${response?.status() ?? "unknown"}`);
  }
  if (pageErrors.length > 0) {
    throw new Error(`The PDF route raised page errors:\n${pageErrors.join("\n")}`);
  }

  await page.evaluate(async () => {
    await document.fonts.ready;
    await Promise.all(
      Array.from(document.images)
        .filter((image) => image.complete)
        .map((image) => image.decode().catch(() => undefined)),
    );
  });
  await page.emulateMedia({ media: "print", colorScheme: "light" });
  await page.pdf({
    path: "public/portfolio.pdf",
    format: "A4",
    printBackground: true,
    preferCSSPageSize: true,
    tagged: true,
    outline: true,
  });
} finally {
  await browser.close();
}
