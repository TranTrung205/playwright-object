// Fixture là function chạy trước test để chuẩn bị context hoặc dữ liệu cần thiết cho test
//Fixtures are used to prepare test preconditions and shared contexts, such as authentication or logged-in state,
// so that tests are clean, reusable, and easier to maintain
import { test as base, expect, Page } from '@playwright/test';

type UiFixtures = {
  loggedInPage: Page;
};

export const test = base.extend<UiFixtures>({
  loggedInPage: async ({ browser }, use) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('http://automationexercise.com');

    await context.close();
  }
});

export { expect };
