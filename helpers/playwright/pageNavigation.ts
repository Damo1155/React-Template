import { Page } from "@playwright/test";

export const navigateToPage = async (page: Page, relativeUrl = "") =>
    await page.goto(`http://localhost:4200/${relativeUrl}`, { waitUntil: "domcontentloaded"});
