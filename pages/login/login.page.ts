import { Page, Locator } from '@playwright/test';
import { BasePage } from '../base.page';
import { LoginElements } from './login.elements';

export class LoginPage extends BasePage {
  private elements: LoginElements;

  // Initialize page elements 
  constructor(page: Page) {
    // Gọi constructor của lớp cha (BasePage)
    super(page);
    // Khởi tạo các phần tử trang sử dụng LoginElements
    this.elements = new LoginElements(page);
  }
  async goto() {
    await this.page.goto('/login');
  }

  async login(username: string, password: string) {

  }
}
