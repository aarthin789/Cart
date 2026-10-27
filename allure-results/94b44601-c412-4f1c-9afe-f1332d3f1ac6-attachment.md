# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: locators.spec.ts >> demonstrate modern Playwright locators
- Location: tests\locators.spec.ts:3:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByLabel('Username or Email')

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - heading "Example Domain" [level=1] [ref=e3]
  - paragraph [ref=e4]: This domain is for use in documentation examples without needing permission. Avoid use in operations.
  - paragraph [ref=e5]:
    - link "Learn more" [ref=e6] [cursor=pointer]:
      - /url: https://iana.org/domains/example
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('demonstrate modern Playwright locators', async ({ page }) => {
  4  |   await page.goto('https://example.com/login');
  5  | 
  6  |   // 1. Recommended User-Facing Locators (Best Practice)
  7  |   
  8  |   // By Role (accessible role: button, link, heading, textbox, checkbox, etc.)
  9  |   const submitButton = page.getByRole('button', { name: 'Sign In' });
  10 |   const termsCheckbox = page.getByRole('checkbox', { name: 'Agree to terms' });
  11 |   
  12 |   // By Label (connects <label for="id"> with an <input>)
  13 |   const usernameInput = page.getByLabel('Username or Email');
  14 |   
  15 |   // By Placeholder
  16 |   const passwordInput = page.getByPlaceholder('Enter your password');
  17 |   
  18 |   // By Visible Text
  19 |   const helpLink = page.getByText('Forgot your password?');
  20 |   
  21 |   // By Alt Text (images, icons)
  22 |   const companyLogo = page.getByAltText('Company Logo');
  23 |   
  24 |   // By Title (HTML title attribute or SVG title element)
  25 |   const closeIcon = page.getByTitle('Close modal');
  26 | 
  27 |   // By Test ID (data-testid attribute)
  28 |   const notificationBanner = page.getByTestId('login-error-banner');
  29 | 
  30 |   // ---------------------------------------------------------------------------
  31 | 
  32 |   // 2. Chaining and Filtering Locators
  33 | 
  34 |   // Filter by child text: Find a product card containing "Premium"
  35 |   const premiumCard = page
  36 |     .locator('div.product-card')
  37 |     .filter({ hasText: 'Premium' });
  38 | 
  39 |   // Filter by child locator: Find a row that contains a delete button
  40 |   const userRowWithDelete = page
  41 |     .locator('tr.user-row')
  42 |     .filter({ has: page.getByRole('button', { name: 'Delete' }) });
  43 | 
  44 |   // Scoped chaining: Search for an element strictly inside another container
  45 |   const navbarSettings = page
  46 |     .locator('header#top-nav')
  47 |     .getByRole('link', { name: 'Settings' });
  48 | 
  49 |   // ---------------------------------------------------------------------------
  50 | 
  51 |   // 3. Fallback: CSS and XPath Locators
  52 | 
  53 |   // CSS Selector
  54 |   const submitByCss = page.locator('button.btn-primary[type="submit"]');
  55 | 
  56 |   // XPath Selector
  57 |   const itemByXpath = page.locator('//ul[@id="item-list"]/li[1]');
  58 | 
  59 |   // ---------------------------------------------------------------------------
  60 | 
  61 |   // 4. Interacting and Asserting
  62 | 
> 63 |   await usernameInput.fill('test_user');
     |                       ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  64 |   await passwordInput.fill('SecretPassword123!');
  65 |   await termsCheckbox.check();
  66 |   await submitButton.click();
  67 | 
  68 |   // Web-first assertions automatically wait for locators to be ready
  69 |   await expect(submitButton).toBeDisabled();
  70 |   await expect(notificationBanner).not.toBeVisible();
  71 | });
```