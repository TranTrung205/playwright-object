// Import BasePage nếu cần sử dụng các hành vi chung
import { BasePage } from '../base.page';

import { Page } from '@playwright/test';
import { AccountDeletedElements } from './accountDeleted.elements';

export class AccountDeletedPage extends BasePage {
    private elements: AccountDeletedElements;
    // Khởi tạo các phần tử trang trong hàm khởi tạo
    constructor(page: any) {
        super(page);
        this.elements = new AccountDeletedElements(page);
    }
    async verifyAccountDeletedTxTVisible() {
        await this.expectVisible(this.elements.ACCOUNT_DELETED_TXT, 'Account Deleted Text');
    }
    async clickContinueButton() {
        await this.click(this.elements.CONTINUE_BTN, 'Continue Button');
    }
}


