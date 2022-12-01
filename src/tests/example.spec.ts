import { test, expect } from "@playwright/test";

// Helpers
import { navigateToPage } from "../../helpers/playwright/pageNavigation";

test("landing page should have correct title", async ({ page }) => {
  await navigateToPage(page);
  await expect(page).toHaveTitle(/APP TEST HEADER/);
});
