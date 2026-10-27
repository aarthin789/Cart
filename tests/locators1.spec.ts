import { test, expect } from '@playwright/test';

test('Comprehensive Week 2 Form Submission Flow', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Register.html');

  // 1. Text Inputs
  await page.getByPlaceholder('First Name').fill('Naveen');
  await page.getByPlaceholder('Last Name').fill('Kumar');

  // 2. Radio Button & Checkbox Selection
  const maleRadio = page.locator('input[value="Male"]');
  await maleRadio.check();
  await expect(maleRadio).toBeChecked();

  const cricketCheck = page.locator('#checkbox1');
  await cricketCheck.check();
  await expect(cricketCheck).toBeChecked();

  // 3. Dropdown Selection
  await page.locator('#Skills').selectOption('Javascript');
  await expect(page.locator('#Skills')).toHaveValue('Javascript');

  // 4. Verification of Page Title
  await expect(page).toHaveTitle(/Register/);
});