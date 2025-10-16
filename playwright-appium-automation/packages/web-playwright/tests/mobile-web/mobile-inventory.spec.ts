import { test, expect } from '@playwright/test';

test.describe('Mobile Web - Inventory smoke @mobile', () => {
  test('open SauceDemo on mobile and view inventory', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.locator('.inventory_list')).toBeVisible();
  });
});