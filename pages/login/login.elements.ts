import { Page, Locator } from '@playwright/test';
export class LoginElements {
    readonly LOGIN_EMAIL: Locator;
    readonly LOGIN_PWD: Locator;
    readonly LOGIN_BTN: Locator;

    constructor(page: Page) {
        this.LOGIN_EMAIL = page.locator('[data-qa="login-email"]');
        this.LOGIN_PWD = page.locator('[data-qa="login-password"]');
        this.LOGIN_BTN = page.locator('[data-qa="login-button"]');
    }
}