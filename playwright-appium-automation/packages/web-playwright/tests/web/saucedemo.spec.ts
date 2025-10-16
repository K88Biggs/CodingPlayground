import { test, expect } from '@playwright/test';

test.describe('SauceDemo - Login & Add to Cart', () => {
  test('login and add first item to cart', async ({ page }) => {
    await page.goto('/');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.locator('.inventory_list')).toBeVisible();

    // Add first item
    const firstAddBtn = page.locator('button:has-text("Add to cart")').first();
    await firstAddBtn.click();
    // Go to cart and assert
    await page.locator('.shopping_cart_link').click();
    await expect(page.locator('.cart_item')).toHaveCount(1);
  });
});