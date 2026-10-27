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
      - generic [ref=e27]:
        - generic [ref=e28]: Products
        - generic [ref=e30] [cursor=pointer]:
          - generic [ref=e31]: Name (A to Z)
          - combobox "Sort products" [ref=e32]:
            - option "Name (A to Z)" [selected]
            - option "Name (Z to A)"
            - option "Price (low to high)"
            - option "Price (high to low)"
    - main [ref=e33]:
      - generic [ref=e36]:
        - generic [ref=e37]:
          - button "View details for Sauce Labs Backpack" [ref=e39]:
            - img "Sauce Labs Backpack" [ref=e40]
          - generic [ref=e41]:
            - generic [ref=e42]:
              - button "View details for Sauce Labs Backpack" [ref=e43]:
                - generic [ref=e44]: Sauce Labs Backpack
              - generic [ref=e45]: carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.
            - generic [ref=e46]:
              - generic [ref=e47]: $29.99
              - button "Remove" [ref=e48] [cursor=pointer]
        - generic [ref=e49]:
          - button "View details for Sauce Labs Bike Light" [ref=e51]:
            - img "Sauce Labs Bike Light" [ref=e52]
          - generic [ref=e53]:
            - generic [ref=e54]:
              - button "View details for Sauce Labs Bike Light" [ref=e55]:
                - generic [ref=e56]: Sauce Labs Bike Light
              - generic [ref=e57]: A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.
            - generic [ref=e58]:
              - generic [ref=e59]: $9.99
              - button "Add to cart" [ref=e60] [cursor=pointer]
        - generic [ref=e61]:
          - button "View details for Sauce Labs Bolt T-Shirt" [ref=e63]:
            - img "Sauce Labs Bolt T-Shirt" [ref=e64]
          - generic [ref=e65]:
            - generic [ref=e66]:
              - button "View details for Sauce Labs Bolt T-Shirt" [ref=e67]:
                - generic [ref=e68]: Sauce Labs Bolt T-Shirt
              - generic [ref=e69]: Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.
            - generic [ref=e70]:
              - generic [ref=e71]: $15.99
              - button "Add to cart" [ref=e72] [cursor=pointer]
        - generic [ref=e73]:
          - button "View details for Sauce Labs Fleece Jacket" [ref=e75]:
            - img "Sauce Labs Fleece Jacket" [ref=e76]
          - generic [ref=e77]:
            - generic [ref=e78]:
              - button "View details for Sauce Labs Fleece Jacket" [ref=e79]:
                - generic [ref=e80]: Sauce Labs Fleece Jacket
              - generic [ref=e81]: It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.
            - generic [ref=e82]:
              - generic [ref=e83]: $49.99
              - button "Add to cart" [ref=e84] [cursor=pointer]
        - generic [ref=e85]:
          - button "View details for Sauce Labs Onesie" [ref=e87]:
            - img "Sauce Labs Onesie" [ref=e88]
          - generic [ref=e89]:
            - generic [ref=e90]:
              - button "View details for Sauce Labs Onesie" [ref=e91]:
                - generic [ref=e92]: Sauce Labs Onesie
              - generic [ref=e93]: Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.
            - generic [ref=e94]:
              - generic [ref=e95]: $7.99
              - button "Add to cart" [ref=e96] [cursor=pointer]
        - generic [ref=e97]:
          - button "View details for Test.allTheThings() T-Shirt (Red)" [ref=e99]:
            - img "Test.allTheThings() T-Shirt (Red)" [ref=e100]
          - generic [ref=e101]:
            - generic [ref=e102]:
              - button "View details for Test.allTheThings() T-Shirt (Red)" [ref=e103]:
                - generic [ref=e104]: Test.allTheThings() T-Shirt (Red)
              - generic [ref=e105]: This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.
            - generic [ref=e106]:
              - generic [ref=e107]: $15.99
              - button "Add to cart" [ref=e108] [cursor=pointer]
  - contentinfo [ref=e109]:
    - list [ref=e110]:
      - listitem [ref=e111]:
        - link "X" [ref=e112]:
          - /url: https://x.com/saucelabs
      - listitem [ref=e113]:
        - link "Facebook" [ref=e114]:
          - /url: https://www.facebook.com/saucelabs
      - listitem [ref=e115]:
        - link "LinkedIn" [ref=e116]:
          - /url: https://www.linkedin.com/company/sauce-labs/
    - generic [ref=e117]: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
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