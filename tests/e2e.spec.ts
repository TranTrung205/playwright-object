import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { InventoryPage } from '../pages/inventory.page';
import { MenuPage } from '../pages/menu.page';

test('E2E: Login → Add to cart → Logout', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const menuPage = new MenuPage(page);
// test CI trigger
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await inventoryPage.addToCart();
  await expect(inventoryPage.getCartBadge()).toHaveText('1');

  await menuPage.logout();
  await expect(page).toHaveURL('https://www.saucedemo.com/');
});
