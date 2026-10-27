import { test, expect } from '@playwright/test';

test('demonstrate modern Playwright locators', async ({ page }) => {
  // Navigate to Playwright's live demo login page
  await page.goto('https://demo.playwright.dev/todomvc/');

  // 1. By Placeholder & Typing
  const newTodoInput = page.getByPlaceholder('What needs to be done?');
  await newTodoInput.fill('Buy groceries');
  await newTodoInput.press('Enter');

  await newTodoInput.fill('Read documentation');
  await newTodoInput.press('Enter');

  // 2. By Text & By Role
  await expect(page.getByText('Buy groceries')).toBeVisible();

  // 3. Chaining & Filtering: Check checkbox inside a specific item
  const todoItem = page.getByRole('listitem').filter({ hasText: 'Buy groceries' });
  await todoItem.getByRole('checkbox').check();

  // 4. Assert element state
  await expect(todoItem).toHaveClass(/completed/);
});