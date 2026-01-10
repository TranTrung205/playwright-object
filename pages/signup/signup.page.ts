// Lưu trữ các hành động của trang Signup
// Import BasePage nếu cần sử dụng các hành vi chung
import { BasePage } from '../base.page';
// Sử dụng các phần tử từ lớp SignupElements
import { Page } from '@playwright/test';
// Import các phần tử từ lớp SignupElements
import { SignupElements } from './signup.elements';
// Import Country constants nếu cần
import { Country } from '../../constants/country.constains';

export class SignupPage extends BasePage {
  private elements: SignupElements;
  // Khởi tạo các phần tử trang trong hàm khởi tạo
  constructor(page: any) {
    super(page);
    this.elements = new SignupElements(page);
  }
  //  Mở trang Signup
  async signup(name: string, email: string) {
    await this.fill(this.elements.SIGNUP_NAME, name, 'Name Input');
    await this.fill(this.elements.SIGNUP_EMAIL, email, 'Email Input');
    await this.click(this.elements.SIGNUP_BTN, 'Signup Button');
  }
  //  Xác minh các phần tử hiển thị đúng
  async verifyNewUserSignupVisible() {
    await this.expectVisible(this.elements.NEW_USER_SIGNUP_TXT, 'New User Signup Header');
  }
  //  Xác minh các phần tử hiển thị đúng
  async verifyEnterAccountInformationVisible() {
    await this.expectVisible(this.elements.ENTER_ACCOUNT_INFORMATION_TXT, 'Enter Account Information');
  }
  //  Điền thông tin tài khoản
  async selectGender() {
    await this.clickRandom([this.elements.MALE_RADIO_BTN, this.elements.FEMALE_RADIO_BTN]);
  }
  async inputName(name: string) {
    await this.fill(this.elements.NAME_TXTFIELD, name, 'Name Textfield');
  }
  async inputEmail(email: string) {
    await this.fill(this.elements.EMAIL_TXTFIELD, email, 'Email Textfield');
  }
  async inputPassword(password: string) {
    await this.fill(this.elements.PWD_TXTFIELD, password, 'Password Textfield');
  }
  //  Chọn ngày tháng năm sinh ngẫu nhiên
  async selectRandomDateOfBirth() {
    const days = Array.from({ length: 28 }, (_, i) => String(i + 1));
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const years = Array.from({ length: 30 }, (_, i) => String(1970 + i));

    const day = days[Math.floor(Math.random() * days.length)];
    const month = months[Math.floor(Math.random() * months.length)];
    const year = years[Math.floor(Math.random() * years.length)];

    await this.selectOption(this.elements.DAY_DROPDOWN, day, 'Day');
    await this.selectOption(this.elements.MONTH_DROPDOWN, month, 'Month');
    await this.selectOption(this.elements.YEAR_DROPDOWN, year, 'Year');
  }
  async checkNewsletter() {
    await this.click(this.elements.NEWSLETTER_CHECKBOX, 'Newsletter Checkbox');
  }
  async checkOffers() {
    await this.click(this.elements.OFFERS_CHECKBOX, 'Offers Checkbox');
  }
  async inputFirstName(firstName: string) {
    await this.fill(this.elements.FIRSTNAME_TXTFIELD, firstName, 'First Name Textfield');
  }
  async inputLastName(lastName: string) {
    await this.fill(this.elements.LASTNAME_TXTFIELD, lastName, 'Last Name Textfield');
  }
  async inputCompany(company: string) {
    await this.fill(this.elements.COMPANY_TXTFIELD, company, 'Company Textfield');
  }
  async inputAddress1(address1: string) {
    await this.fill(this.elements.ADDRESS1_TXTFIELD, address1, 'Address1 Textfield');
  }
  async inputAddress2(address2: string) {
    await this.fill(this.elements.ADDRESS2_TXTFIELD, address2, 'Address2 Textfield');
  }
  async selectCountry(country: Country) {
    await this.selectOption(
      this.elements.COUNTRY_DROPDOWN,
      country,
      'Country Dropdown'
    );
  }
  async inputState(state: string) {
    await this.fill(this.elements.STATE_TXTFIELD, state, 'State Textfield');
  }
  async inputCity(city: string) {
    await this.fill(this.elements.CITY_TXTFIELD, city, 'City Textfield');
  }
  async inputZipcode(zipcode: string) {
    await this.fill(this.elements.ZIPCODE_TXTFIELD, zipcode, 'Zipcode Textfield');
  }
  async inputMobileNumber(mobileNumber: string) {
    await this.fill(this.elements.MOBILE_NUMBER_TXTFIELD, mobileNumber, 'Mobile Number Textfield');
  }
  async clickCreateAccountButton() {
    await this.click(this.elements.CREATE_ACCOUNT_BTN, 'Create Account Button');
  }

}