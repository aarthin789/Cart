# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart_test.spec.ts >> SauceDemo Cart Workflow >> Add to cart and verify badge count
- Location: tests\cart_test.spec.ts:5:7

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: locator('.inventory_item_name')
Expected: "Sauce Labs Backpack"
Error: strict mode violation: locator('.inventory_item_name') resolved to 6 elements:
    1) <div class="inventory_item_name " data-test="inventory-item-name">Sauce Labs Backpack</div> aka locator('[data-test="item-4-title-link"]')
    2) <div class="inventory_item_name " data-test="inventory-item-name">Sauce Labs Bike Light</div> aka locator('[data-test="item-0-title-link"]')
    3) <div class="inventory_item_name " data-test="inventory-item-name">Sauce Labs Bolt T-Shirt</div> aka locator('[data-test="item-1-title-link"]')
    4) <div class="inventory_item_name " data-test="inventory-item-name">Sauce Labs Fleece Jacket</div> aka locator('[data-test="item-5-title-link"]')
    5) <div class="inventory_item_name " data-test="inventory-item-name">Sauce Labs Onesie</div> aka locator('[data-test="item-2-title-link"]')
    6) <div class="inventory_item_name " data-test="inventory-item-name">Test.allTheThings() T-Shirt (Red)</div> aka locator('[data-test="item-3-title-link"]')

Call log:
  - Expect "toHaveText" locator('.inventory_item_name') with timeout 5000ms
  - waiting for locator('.inventory_item_name')

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - banner [ref=e5]:
      - generic [ref=e6]:
        - generic:
          - generic:
            - generic [ref=e7]:
              - button "Open Menu" [ref=e8] [cursor=pointer]
              - img "Open Menu" [ref=e9]
            - generic [aria-hidden] [ref=e10]:
              - navigation [ref=e12]:
                - button [ref=e13] [cursor=pointer]: All Items
                - button [ref=e14] [cursor=pointer]: Dynamic Catalog
                - link [ref=e16] [cursor=pointer]:
                  - /url: https://saucelabs.com/
                  - text: About
                - button [ref=e17] [cursor=pointer]: Logout
                - button [ref=e18] [cursor=pointer]: Reset App State
              - button [ref=e20] [cursor=pointer]: Close Menu
        - generic [ref=e22]: Swag Labs
        - button "Cart, 1 items" [ref=e25]:
          - generic [ref=e26]: "1"
      - generic [ref=e27]: Your Cart
    - main [ref=e29]:
      - generic [ref=e30]:
        - generic [ref=e31]:
          - generic [ref=e32]: QTY
          - generic [ref=e33]: Description
          - generic [ref=e34]:
            - generic [ref=e35]: "1"
            - generic [ref=e36]:
              - button "View details for Sauce Labs Backpack" [ref=e37]:
                - generic [ref=e38]: Sauce Labs Backpack
              - generic [ref=e39]: carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.
              - generic [ref=e40]:
                - generic [ref=e41]: $29.99
                - button "Remove" [ref=e42] [cursor=pointer]
        - generic [ref=e43]:
          - button "Continue Shopping" [ref=e44] [cursor=pointer]
          - button "Checkout" [ref=e45] [cursor=pointer]
  - contentinfo [ref=e46]:
    - list [ref=e47]:
      - listitem [ref=e48]:
        - link "X" [ref=e49]:
          - /url: https://x.com/saucelabs
      - listitem [ref=e50]:
        - link "Facebook" [ref=e51]:
          - /url: https://www.facebook.com/saucelabs
      - listitem [ref=e52]:
        - link "LinkedIn" [ref=e53]:
          - /url: https://www.linkedin.com/company/sauce-labs/
    - generic [ref=e54]: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('SauceDemo Cart Workflow', () => {
  4  | 
  5  |   test('Add to cart and verify badge count', async ({ page }) => {
  6  |     // 1. Login page ku poga
  7  |     await page.goto('https://www.saucedemo.com/');
  8  | 
  9  |     // 2. Login details fill panna
  10 |     await page.locator('#user-name').fill('standard_user');
  11 |     await page.locator('#password').fill('secret_sauce');
  12 |     await page.locator('#login-button').click();
  13 | 
  14 |     // 3. Products page load aagithannu verify panna
  15 |     await expect(page).toHaveURL(/.*inventory.html/);
  16 | 
  17 |     // 4. Item-ah cart-la add panna
  18 |     await page.locator('#add-to-cart-sauce-labs-backpack').click();
  19 | 
  20 |     // 5. Cart badge count '1' nu check panna
  21 |     const cartBadge = page.locator('.shopping_cart_badge');
  22 |     await expect(cartBadge).toHaveText('1');
  23 | 
  24 |     // 6. Cart icon click panni navigation check panna
  25 |     await page.locator('.shopping_cart_link').click();
  26 |     await expect(page).toHaveURL(/.*cart.html/);
> 27 |     await expect(page.locator('.inventory_item_name')).toHaveText('Sauce Labs Backpack');
     |                                                        ^ Error: expect(locator).toHaveText(expected) failed
  28 |   });
  29 | 
  30 | });
```