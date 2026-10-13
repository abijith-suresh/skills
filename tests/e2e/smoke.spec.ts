import { expect, test } from "@playwright/test";

test("home page renders title and heading", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle("skills.abijith.sh");
  await expect(page.getByRole("heading", { level: 1, name: /skills/ })).toBeVisible();
});
