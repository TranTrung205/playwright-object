import { test, expect } from '@playwright/test';

test('Thêm Backpack vào giỏ', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  await page.click('#add-to-cart-sauce-labs-backpack');
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
});

test('Thêm 2 sản phẩm vào giỏ', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  await page.click('#add-to-cart-sauce-labs-backpack');
  await page.click('#add-to-cart-sauce-labs-bike-light');
  await expect(page.locator('.shopping_cart_badge')).toHaveText('2');
});

test('Xóa sản phẩm khỏi giỏ', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  await page.click('#add-to-cart-sauce-labs-backpack');
  await page.click('#remove-sauce-labs-backpack');
  await expect(page.locator('.shopping_cart_badge')).toHaveCount(0);
});

test('Thêm sản phẩm và mở giỏ', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  await page.click('#add-to-cart-sauce-labs-backpack');
  await page.click('.shopping_cart_link');
  await expect(page.locator('.cart_item')).toHaveCount(1);
  await expect(page.locator('.inventory_item_name')).toHaveText('Sauce Labs Backpack');
});
