import { test, expect } from '@playwright/test';

test.describe('SauceDemo Cart Workflow', () => {

  test('Add to cart and verify badge count', async ({ page }) => {
    // 1. Login page ku poga
    await page.goto('https://www.saucedemo.com/');

    // 2. Login details fill panna
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

    // 3. Products page load aagi URL confirm aaguradhukku wait panna
    await expect(page).toHaveURL(/.*inventory.html/);
    await expect(page.locator('.title')).toHaveText('Products');

    // 4. Item-ah cart-la add panna
    await page.locator('#add-to-cart-sauce-labs-backpack').click();

    // 5. Cart badge count '1' nu check panna
    const cartBadge = page.locator('.shopping_cart_badge');
    await expect(cartBadge).toHaveText('1');

    // 6. Cart icon click panni, cart URL open aana pinbu element check panna
    await page.locator('.shopping_cart_link').click();
    await expect(page).toHaveURL(/.*cart.html/);

    // FIX: Cart item name exact-ah verify panna
    const cartItem = page.locator('.cart_item .inventory_item_name');
    await expect(cartItem).toHaveText('Sauce Labs Backpack');
  });

});