import { test, expect } from '@playwright/test';

test('E-Commerce: Tab Handling + API Mocking & Network Interception', async ({ context, page }) => {

  // =========================================================================
  // MODULE 7 CONCEPT 1: Intercept & Block Images/Ads (Faster Test Execution)
  // =========================================================================
  await page.route('**/*.{png,jpg,jpeg,svg,gif}', (route) => {
    // Page load fast aaga unnecessary images/assets-ai abort panrom
    route.abort();
  });


  // =========================================================================
  // MODULE 7 CONCEPT 2: Mocking API Response (Payment Gateway Simulation)
  // =========================================================================
  await page.route('**/api/v1/payment/process', async (route) => {
    // Real payment gateway call pogama, mock success response anuppurom
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({
        status: 'SUCCESS',
        transactionId: 'TXN_TEST_998877',
        message: 'Payment completed successfully!'
      })
    });
  });

  // Navigate to Checkout Demo Page
  await page.goto('https://demo.playwright.dev/todomvc'); 
  // (Ungloda real project-la checkout page URL kudukalam)


  // =========================================================================
  // MODULE 6 CONCEPT 1: Handling New Tab / Popup via context.waitForEvent('page')
  // =========================================================================
  // 'View Invoice' link click pannumbothu pudhu tab open aagum scenario:
  const [invoiceTab] = await Promise.all([
    context.waitForEvent('page'), // New page/tab trigger aaga wait panradhu
    page.evaluate(() => {
      // Simulating clicking a link with target="_blank"
      window.open('https://example.com', '_blank');
    })
  ]);

  // Pudhu tab full-a load aagura varaikkum wait panrom
  await invoiceTab.waitForLoadState('domcontentloaded');
  console.log('Opened Invoice Tab Title:', await invoiceTab.title());

  // Pudhu tab-la content verify pannittu adha close panrom
  await expect(invoiceTab).toHaveTitle(/Example Domain/);
  await invoiceTab.close();


  // =========================================================================
  // MODULE 7 CONCEPT 3: Monitoring & Waiting for Network Response (waitForResponse)
  // =========================================================================
  // Main page-la payment trigger panni mock response receive panrom:
  const [paymentResponse] = await Promise.all([
    page.waitForResponse((res) => 
      res.url().includes('/api/v1/payment/process') && res.status() === 200
    ),
    page.evaluate(async () => {
      // Button click aana trigger aagura fetch request simulation
      await fetch('/api/v1/payment/process', { method: 'POST' });
    })
  ]);

  // Mock panna API data-va capture panni verify panrom
  const responseData = await paymentResponse.json();
  console.log('Mocked Payment API Response:', responseData);
  expect(responseData.status).toBe('SUCCESS');
  expect(responseData.transactionId).toBe('TXN_TEST_998877');


  // =========================================================================
  // MODULE 6 CONCEPT 2: Browser Navigation (goBack, reload)
  // =========================================================================
  // Page refresh panni session state retain aagudha-nu check panrom
  await page.reload();

  // Or back page poi test panrom
  await page.goBack();
});