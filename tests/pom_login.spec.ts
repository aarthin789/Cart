import { test, expect } from '@playwright/test';
import { LoginPage } from './Pages/login.spec';

test.describe('SauceDemo POM Suite', () => {

  test('Valid login scenario', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  });

  test('Invalid login scenario', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login('locked_out_user', 'secret_sauce');

    await loginPage.verifyErrorMessage('Epic sadface: Sorry, this user has been locked out.');
  });

});