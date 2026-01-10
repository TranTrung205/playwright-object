import { test } from '@playwright/test';

test('open automationexercise directly', async ({ page }) => {
  await page.goto('https://www.automationexercise.com', {
    waitUntil: 'domcontentloaded',
    timeout: 60000,
  });

  await page.waitForTimeout(5000);
});
