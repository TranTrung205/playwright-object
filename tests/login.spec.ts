import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

test('Login thất bại với sai password', async ({ page }) => {
  const errorMSG:  string  = "Epic sadface: Username and password do not match any user in this service";
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('standard_user', 'wrong_password');
  await expect(loginPage.getErrorMessage()).toHaveText(errorMSG); // verify lỗi
});

test('Login thành công với standard_user', async ({ page }) => {
  const loginPage = new LoginPage(page);  // khởi tạo Page Object
  await loginPage.goto();                  // mở trang login
  await loginPage.login('standard_user', 'secret_sauce');  // nhập thông tin và click login
   await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');       // verify URL
});


