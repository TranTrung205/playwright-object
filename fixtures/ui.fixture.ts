// Fixture là function chạy trước test để chuẩn bị context hoặc dữ liệu cần thiết cho test
//Fixtures are used to prepare test preconditions and shared contexts, such as authentication or logged-in state,
// so that tests are clean, reusable, and easier to maintain
import { test as base, expect, Page } from '@playwright/test';
import { HomePage } from '../pages/home/home.page';
import { LoginPage } from '../pages/login/login.page';

type UiFixtures = {
  loggedInPage: Page;
};

// MỞ RỘNG BASE TEST VỚI UI FIXTURES
export const test = base.extend<UiFixtures>({
  loggedInPage: async ({ browser }, use) => {
    // setup TRƯỚC khi test chạy
    const context = await browser.newContext();
    //  TẠO PAGE MỚI TRONG CONTEXT VỪA TẠO
    const page = await context.newPage();
    //  TẠO LOGIN PAGE OBJECT 
    const loginPage = new LoginPage(page);
    //  THỰC HIỆN ĐĂNG NHẬP
    await loginPage.goto();
    await loginPage.login('abc@123abc.org', '1234567');
    // TRẢ PAGE CHO TEST
    await use(page);

    // teardown SAU khi test xong
    await context.close();
  },
});
// EXPORT EXPECT ĐỂ SỬ DỤNG TRONG TEST FILES
export { expect };  