import { test } from '../fixtures/ui.fixture';
import { LoginPage } from '../pages/login/login.page';

test('Login success', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('test@mail.com', '123456');
});