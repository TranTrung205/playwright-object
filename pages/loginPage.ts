//Đây là file đại diện cho trang login, tất cả selector + action liên quan login sẽ đặt ở đây
import { Locator, Page } from '@playwright/test';

export class LoginPage {
    //Selector → nơi lưu tất cả ID/locator của các element
  readonly page: Page;
  readonly username = '#user-name';
  readonly password = '#password';
  readonly loginBtn = '#login-button';
  readonly errorMsg = 'h3[data-test="error"]';
    //Constructor → kết nối page Playwright với class 
    //constructor = khởi tạo đối tượng LoginPage với trang web cụ thể  
  constructor(page: Page) {
    this.page = page;
  }
 //Action → các chức năng bạn muốn test:
  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(username: string, password: string) {
    await this.page.fill(this.username, username);
    await this.page.fill(this.password, password);
    await this.page.click(this.loginBtn);
  }

 getErrorMessage() :Locator {
    return this.page.locator(this.errorMsg);
  }
}