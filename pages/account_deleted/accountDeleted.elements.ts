import { Page, Locator } from '@playwright/test';

export class AccountDeletedElements {
    readonly ACCOUNT_DELETED_TXT: Locator;
    readonly CONTINUE_BTN: Locator;

    constructor(page: Page) {
        this.ACCOUNT_DELETED_TXT = page.locator('[data-qa="account-deleted"]');
        this.CONTINUE_BTN = page.locator('[data-qa="continue-button"]');
    }
}
