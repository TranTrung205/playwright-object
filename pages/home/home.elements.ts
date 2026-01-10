import { Page, Locator } from '@playwright/test';

export class HomeElements {
    readonly LOGIN_SIGNUP_BTN: Locator;
    readonly HOME_LOGO: Locator;  
    readonly LOGIN_AS_USERNAME_TXT: Locator;
    readonly DELETE_ACCOUNT_BTN: Locator;   
    constructor(page: Page) {
        this.LOGIN_SIGNUP_BTN = page.locator('a[href="/login"]');
        this.HOME_LOGO = page.locator('img[alt="Website for automation practice"]');
        this.LOGIN_AS_USERNAME_TXT = page.locator( "//a[contains(normalize-space(.), 'Logged in as')]");
        this.DELETE_ACCOUNT_BTN = page.locator('a[href="/delete_account"]');    
    }
}
