import { test, expect } from '@playwright/test';

test('open SauceDemo', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await expect(page).toHaveTitle(/Swag Labs/);
});