// Lưu trữ các phần tử của trang Signup
import { Page, Locator } from '@playwright/test';

export class SignupElements {
  readonly SIGNUP_NAME: Locator;
  readonly SIGNUP_EMAIL: Locator;
  readonly SIGNUP_BTN: Locator;
  readonly NEW_USER_SIGNUP_TXT: Locator;
  readonly ENTER_ACCOUNT_INFORMATION_TXT: Locator;
  readonly MALE_RADIO_BTN: Locator;
  readonly FEMALE_RADIO_BTN: Locator;
  readonly NAME_TXTFIELD: Locator;
  readonly EMAIL_TXTFIELD: Locator;
  readonly PWD_TXTFIELD: Locator;
  readonly DAY_DROPDOWN: Locator;
  readonly MONTH_DROPDOWN: Locator;
  readonly YEAR_DROPDOWN: Locator;
  readonly NEWSLETTER_CHECKBOX: Locator;
  readonly OFFERS_CHECKBOX: Locator;
  readonly FIRSTNAME_TXTFIELD: Locator;
  readonly LASTNAME_TXTFIELD: Locator;
  readonly COMPANY_TXTFIELD: Locator;
  readonly ADDRESS1_TXTFIELD: Locator;
  readonly ADDRESS2_TXTFIELD: Locator;
  readonly COUNTRY_DROPDOWN: Locator
  readonly STATE_TXTFIELD: Locator;
  readonly CITY_TXTFIELD: Locator;
  readonly ZIPCODE_TXTFIELD: Locator;
  readonly MOBILE_NUMBER_TXTFIELD: Locator;
  readonly CREATE_ACCOUNT_BTN: Locator;

  constructor(page: Page) {
    this.SIGNUP_NAME = page.locator('input[data-qa="signup-name"]');
    this.SIGNUP_EMAIL = page.locator('input[data-qa="signup-email"]');
    this.SIGNUP_BTN = page.locator('button[data-qa="signup-button"]');
    this.NEW_USER_SIGNUP_TXT = page.locator('h2:has-text("New User Signup!")');
    this.ENTER_ACCOUNT_INFORMATION_TXT = page.locator('h2:has-text("Enter Account Information")');
    this.MALE_RADIO_BTN = page.locator('#id_gender1');
    this.FEMALE_RADIO_BTN = page.locator('#id_gender2');
    this.NAME_TXTFIELD = page.locator('#name');
    this.EMAIL_TXTFIELD = page.locator('#email');
    this.PWD_TXTFIELD = page.locator('#password');
    this.DAY_DROPDOWN = page.locator('#days');
    this.MONTH_DROPDOWN = page.locator('#months');
    this.YEAR_DROPDOWN = page.locator('#years');
    this.NEWSLETTER_CHECKBOX = page.locator('#newsletter');
    this.OFFERS_CHECKBOX = page.locator('#optin');
    this.FIRSTNAME_TXTFIELD = page.locator('#first_name');
    this.LASTNAME_TXTFIELD = page.locator('#last_name');;
    this.COMPANY_TXTFIELD = page.locator('#company');
    this.ADDRESS1_TXTFIELD = page.locator('#address1');
    this.ADDRESS2_TXTFIELD = page.locator('#address2');
    this.COUNTRY_DROPDOWN = page.locator('#country');
    this.STATE_TXTFIELD = page.locator('#state');
    this.CITY_TXTFIELD = page.locator('#city');
    this.ZIPCODE_TXTFIELD = page.locator('#zipcode');
    this.MOBILE_NUMBER_TXTFIELD = page.locator('#mobile_number');
    this.CREATE_ACCOUNT_BTN = page.locator('[data-qa="create-account"]');
  }
}