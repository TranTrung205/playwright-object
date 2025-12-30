import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.pages';
import { InventoryPage } from '../pages/inventory.pages';

test('Add product to cart thành công', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.goto();
  await loginPage.login('problem_user', 'secret_sauce');

  await inventoryPage.addToCart();

  await expect(inventoryPage.getCartBadge()).toHaveText('1');
});
