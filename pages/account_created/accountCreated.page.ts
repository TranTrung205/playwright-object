// Import BasePage nếu cần sử dụng các hành vi chung
import { BasePage } from '../base.page';

import { Page } from '@playwright/test';
import { AccountCreatedElements } from './accountCreated.elements';

export class AccountCreatedPage extends BasePage {
    private elements: AccountCreatedElements;
    // Khởi tạo các phần tử trang trong hàm khởi tạo
    constructor(page: any) {
        super(page);
        this.elements = new AccountCreatedElements(page);
    }
    async verifyAccountCreatedTxTVisible() {
        await this.expectVisible(this.elements.ACCOUNT_CREATED_TXT, 'Account Created Text');
    }
    async clickContinueButton() {
        await this.click(this.elements.CONTINUE_BTN, 'Continue Button');
    }
}


