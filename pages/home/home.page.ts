import { BasePage } from "../base.page";
import { Page } from '@playwright/test';
import { HomeElements } from "./home.elements";
export class HomePage extends BasePage {
    private elements: HomeElements;
    constructor(page: Page) {
        super(page);
        this.elements = new HomeElements(page);
    }

    async open(path: string = '/') {
        await this.goto(path);
    }

    async waitForHomePageLoaded() {
        await this.expectVisible(this.elements.HOME_LOGO);
    }

    async clickOnLoginOrSignupBtn() {
        await this.expectVisible(this.elements.LOGIN_SIGNUP_BTN);
        await this.click(this.elements.LOGIN_SIGNUP_BTN);
    }
    async verifyLoggedInAsUsernameVisible() {
        await this.expectVisible(this.elements.LOGIN_AS_USERNAME_TXT);
    }
    async clickDeleteAccountButton() {
        await this.expectVisible(this.elements.DELETE_ACCOUNT_BTN, 'Delete Account button');
        await this.click(this.elements.DELETE_ACCOUNT_BTN);
    }
}