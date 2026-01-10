/*Base Page được dùng để tập trung các hành vi chung của trang như điều hướng, 
chờ tải trang và các thao tác cơ bản, để các Page Object cụ thể chỉ tập trung vào logic nghiệp vụ*/

//Base Page is used to centralize common page behaviors such as navigation, waiting, and basic interactions, 
//so that individual page objects focus only on business logic
import { Page, Locator, expect } from '@playwright/test';

export class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  // Điều hướng đến một đường dẫn cụ thể
  async goto(path: string) {
    await this.page.goto(path, {
      waitUntil: 'domcontentloaded',
      timeout: 60000,
    });
    await this.page.waitForTimeout(2000);
  }
  //  Chờ trang tải xong
  async waitForPageLoad() {
    await this.page.waitForLoadState('networkidle');
  }
  //  Lấy tiêu đề trang
  async getTitle() {
    return this.page.title();
  }
  //  Lấy URL hiện tại của trang
  async getUrl() {
    return this.page.url();
  }
  //  Xác minh URL chứa một đoạn văn bản cụ thể
  async verifyUrlContains(text: string) {
    await expect(this.page).toHaveURL(new RegExp(text));
  }
  //  Nhấp vào một phần tử với xác minh hiển thị trước khi nhấp
  async click(locator: Locator, name?: string) {
    await expect(
      locator,
      `${name ?? 'Element'} is not visible`
    ).toBeVisible();

    await locator.click();
  }
  //  Điền giá trị vào một trường nhập với xác minh hiển thị trước khi điền
  async fill(locator: Locator, value: string, name?: string) {
    await expect(
      locator,
      `${name ?? 'Input'} is not visible`
    ).toBeVisible();

    await locator.fill(value);
  }
  //  Xác minh một phần tử hiển thị
  async expectVisible(locator: Locator, name?: string) {
    await expect(locator, `${name} should be visible`).toBeVisible();
  }

  // Nhấp vào một phần tử được chọn ngẫu nhiên từ một mảng các phần tử
  async clickRandom(locators: Locator[]) {
    const random = locators[Math.floor(Math.random() * locators.length)];
    await random.click();
  }

  //  Chọn một tùy chọn từ dropdown
  async selectOption(
    locator: Locator,
    value: string,
    elementName?: string
  ) {
    await expect(locator, `${elementName} should be visible`).toBeVisible();
    await locator.selectOption(value);
  }

}
