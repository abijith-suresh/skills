import { expect, test } from "@playwright/test";

test("home page renders title and heading", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle("skills.abijith.sh");
  await expect(page.getByRole("heading", { level: 1, name: /skills/ })).toBeVisible();
});

test("catalog opens a new workflow and provides its install command", async ({ page }) => {
  await page.goto("/all/");
  await page.getByRole("link", { name: /^prove-it\b/ }).click();

  await expect(page).toHaveURL(/\/prove-it\/$/);
  await expect(page.getByRole("heading", { level: 1, name: /prove-it/ })).toBeVisible();
  await expect(
    page.getByText("npx skills@latest add abijith-suresh/skills --skill prove-it")
  ).toBeVisible();
  await expect(page.getByRole("heading", { name: "Exercise the real boundary" })).toBeVisible();
});

test("review workflow exposes its canonical host reference", async ({ page, request }) => {
  await page.goto("/open-pr/");
  const reference = page.getByRole("link", { name: "Host examples" });
  const href = await reference.getAttribute("href");
  expect(href).toBeTruthy();
  const response = await request.get(new URL(href ?? "", page.url()).href);

  expect(response.ok()).toBe(true);
  expect(response.headers()["content-type"]).toContain("text/markdown");
  expect(await response.text()).toContain("## GitLab, including self-hosted instances");
});

for (const [previous, replacement] of [
  ["commit-work", "commit"],
  ["open-mr", "open-pr"],
  ["unslop", "writing"],
]) {
  test(`retired ${previous} URL reaches ${replacement}`, async ({ page }) => {
    await page.goto(`/${previous}/`);

    await expect(page).toHaveURL(new RegExp(`/${replacement}/$`));
    await expect(page.getByRole("heading", { level: 1, name: replacement })).toBeVisible();
  });
}
