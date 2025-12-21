import { test, expect } from '@playwright/test';

test('Sort sản phẩm theo giá tăng dần', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  await page.selectOption('.product_sort_container', 'lohi');
  const prices = await page.$$eval('.inventory_item_price', els => els.map(e => parseFloat(e.textContent!.replace('$',''))));
  expect(prices).toEqual([...prices].sort((a,b)=>a-b));
});

test('Sort sản phẩm theo tên A → Z', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  await page.selectOption('.product_sort_container', 'az');
  const names = await page.$$eval('.inventory_item_name', els => els.map(e => e.textContent));
  expect(names).toEqual([...names].sort());
});

test('Mở chi tiết Backpack', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  await page.click('text=Sauce Labs Backpack'); 
  await expect(page.locator('.inventory_details_name')).toHaveText('Sauce Labs Backpack');
});
