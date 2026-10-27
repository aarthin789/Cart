import { test, expect } from '@playwright/test';

test('SauceDemo login test', async ({ page }) => {
  // 1. Demo shopping site open panrom
  await page.goto('https://www.saucedemo.com/');

  // 2. Username type panrom
  await page.locator('#user-name').fill('standard_user');

  // 3. Password type panrom
  await page.locator('#password').fill('secret_sauce');

  // 4. Login button click panrom
  await page.locator('#login-button').click();

  // 5. Login aagi products page reach aachannu URL and Title check panrom
  await expect(page).toHaveURL(/inventory.html/);
  await expect(page.locator('.title')).toHaveText('Products');
});