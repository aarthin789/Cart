import { test, expect } from '@playwright/test';

test('Google search test', async ({ page }) => {
  // 1. Google site open panrom
  await page.goto('https://www.google.com');

  // 2. Search box la text type panrom
  await page.locator('textarea[name="q"]').fill('Playwright testing');

  // 3. Enter key press panrom
  await page.keyboard.press('Enter');

  // 4. Results page load aana udaney title check panrom
  await expect(page).toHaveTitle(/Playwright testing/);
});