import { Page, Locator } from '@playwright/test';

export class AccountCreatedElements {
    readonly ACCOUNT_CREATED_TXT: Locator;
    readonly CONTINUE_BTN: Locator;

    constructor(page: Page) {
        this.ACCOUNT_CREATED_TXT = page.locator('[data-qa="account-created"]');
        this.CONTINUE_BTN = page.locator('[data-qa="continue-button"]');
    }
}
