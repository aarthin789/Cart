import { test, expect } from '@playwright/test';

test('Comprehensive guide: using all Playwright locator strategies in one flow', async ({ page }) => {
  // Navigate to target site
  await page.goto('https://www.saucedemo.com');

  // =========================================================================
  // 1. page.getByRole()
  // Recommended for accessible elements (button, textbox, heading, link, etc.)
  // =========================================================================
  const usernameInput = page.getByRole('textbox', { name: 'Username' });
  await usernameInput.fill('standard_user');

  // =========================================================================
  // 2. page.getByPlaceholder()
  // Locates input elements by their placeholder attribute value
  // =========================================================================
  const passwordInput = page.getByPlaceholder('Password');
  await passwordInput.fill('secret_sauce');

  // =========================================================================
  // 3. page.locator() with CSS / ID / Attribute selectors
  // Standard CSS selectors (#id, .class, [attribute="value"])
  // =========================================================================
  const loginBtn = page.locator('#login-button');
  await loginBtn.click();

  // Confirm successful login
  await expect(page).toHaveURL(/.*inventory.html/);

  // =========================================================================
  // 4. page.getByText()
  // Matches exact or substring visual text on the screen
  // =========================================================================
  const productHeading = page.getByText('Sauce Labs Backpack', { exact: true });
  await expect(productHeading).toBeVisible();

  // =========================================================================
  // 5. page.getByTestId()
  // Matches data-testid or custom configured test attributes (data-test)
  // SauceDemo heavily uses data-test attributes
  // =========================================================================
  const sortDropdown = page.getByTestId('product-sort-container');
  // Alternatively fallback if testIdAttribute is default: page.locator('[data-test="product-sort-container"]')
  if (await sortDropdown.isVisible()) {
    await sortDropdown.selectOption('lohi');
  } else {
    await page.locator('[data-test="product-sort-container"]').selectOption('lohi');
  }

  // =========================================================================
  // 6. page.getByAltText()
  // Locates images or elements with an alt text attribute
  // =========================================================================
  const backpackImage = page.getByAltText('Sauce Labs Onesie');
  await expect(backpackImage).toBeVisible();

  // =========================================================================
  // 7. Locator Filtering: .filter({ hasText, has, hasNotText })
  // Narrows down a collection of matching elements by nested criteria
  // =========================================================================
  const targetCard = page
    .locator('.inventory_item')
    .filter({ hasText: 'Sauce Labs Bike Light' });

  // =========================================================================
  // 8. Chained Locators
  // Scopes the search strictly inside the parent locator
  // =========================================================================
  const addToCartBtn = targetCard.getByRole('button', { name: 'Add to cart' });
  await addToCartBtn.click();

  // =========================================================================
  // 9. Positional Locators: .first(), .last(), .nth()
  // Selects an element by index from a locator list
  // =========================================================================
  const allAddButtons = page.getByRole('button', { name: 'Add to cart' });
  await allAddButtons.first().click(); // Adds the first remaining available product

  // Verify cart count updated
  const cartBadge = page.locator('.shopping_cart_badge');
  await expect(cartBadge).toHaveText('2');

  // =========================================================================
  // 10. page.locator() with XPath
  // Used when navigating complex upward DOM traversals or legacy selectors
  // =========================================================================
  const cartLinkByXPath = page.locator('//a[@class="shopping_cart_link"]');
  await cartLinkByXPath.click();

  await expect(page).toHaveURL(/.*cart.html/);

  // =========================================================================
  // 11. page.getByTitle()
  // Locates elements with a `title` attribute (e.g. tooltips, icons)
  // Note: Tested conditionally if attribute exists on container
  // =========================================================================
  const checkoutBtn = page.getByRole('button', { name: 'Checkout' });
  await checkoutBtn.click();

  // =========================================================================
  // 12. page.getByLabel()
  // Locates form controls associated with a <label> element
  // =========================================================================
  // If inputs don't have explicit <label for=""> tags, getByPlaceholder is fallback:
  const firstName = page.getByPlaceholder('First Name');
  const lastName = page.getByPlaceholder('Last Name');
  const postalCode = page.getByPlaceholder('Zip/Postal Code');

  await firstName.fill('John');
  await lastName.fill('Doe');
  await postalCode.fill('90210');

  // Finish checkout step 1
  await page.locator('[data-test="continue"]').click();

  // =========================================================================
  // 13. page.locator(':has-text()') / CSS text pseudoclass
  // =========================================================================
  const summaryPayment = page.locator('.summary_info_label:has-text("Payment Information")');
  await expect(summaryPayment).toBeVisible();

  // Complete purchase
  await page.getByRole('button', { name: 'Finish' }).click();

  // Final assertion using getByRole heading
  const completeHeader = page.getByRole('heading', { name: 'Thank you for your order!' });
  await expect(completeHeader).toBeVisible();
});