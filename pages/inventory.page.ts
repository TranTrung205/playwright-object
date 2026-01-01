import { Page, Locator } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly addToCartButton: Locator;
  readonly cartBadge: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addToCartButton = page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');
    this.cartBadge = page.locator('.shopping_cart_badge');
  }

  addToCart() {
    return this.addToCartButton.click();
  }

  getCartBadge() {
    return this.cartBadge;
  }
}
