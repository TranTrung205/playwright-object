// Import các thư viện cần thiết
import { test, expect } from '@playwright/test';
//  Import SignupPage từ thư mục pages
import { SignupPage } from '../pages/signup/signup.page';
// Import HomePage để sử dụng các hành vi của trang chủ
import { HomePage } from '../pages/home/home.page';
// Import AccountCreatedPage để sử dụng các hành vi của trang Account Created
import { AccountCreatedPage } from '../pages/account_created/accountCreated.page';
// Import AccountDeletedPage để sử dụng các hành vi của trang Account Deleted
import { AccountDeletedPage } from '../pages/account_deleted/accountDeleted.page';

// Test Case 1: Register User
/*---------------------------------------------------------------------------------*/
test('Signup flow', async ({ page }) => {
    const signupPage = new SignupPage(page);
    const homePage = new HomePage(page);
    const accountCreatedPage = new AccountCreatedPage(page);
    const deleteAccountPage = new AccountDeletedPage(page);

    // 1. Launch browser
    // 2. Navigate to url 'https://www.automationexercise.com'
    await homePage.open();
    // 3. Verify that home page is visible successfully
    await homePage.verifyHomePageVisible;
    // 4. Click on 'Signup / Login' button
    await homePage.clickOnLoginOrSignupBtn();
    // 5. Verify 'New User Signup!' is visible
    await signupPage.verifyNewUserSignupVisible();
    // 6. Enter name and email address
    // 7. Click 'Signup' button 
    await signupPage.signup('OLD_QA', `QA90_${Date.now()}@test.com`);
    // 8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
    await signupPage.verifyEnterAccountInformationVisible();
    // 9. Fill details: Title, Name, Email, Password, Date of birth
    await signupPage.selectGender();
    // await signupPage.inputName('OLD_QA');
    // await signupPage.inputEmail('abc123');
    await signupPage.inputPassword('12345678');
    await signupPage.selectRandomDateOfBirth();
    // 10. Select checkbox 'Sign up for our newsletter!'
    await signupPage.checkNewsletter();
    // 11. Select checkbox 'Receive special offers from our partners!' 
    await signupPage.checkOffers();
    // 12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
    await signupPage.inputFirstName('OLD_QA_FIRST NAME');
    await signupPage.inputLastName('OLD_QA_LAST NAME');
    await signupPage.inputCompany('OLD_QA COMPANY');
    await signupPage.inputAddress1('123 OLD_QA STREET');
    await signupPage.inputAddress2('APT 4B');
    await signupPage.selectCountry('Canada');
    await signupPage.inputState('Ontario');
    await signupPage.inputCity('Toronto');
    await signupPage.inputZipcode('M4B1B3');
    await signupPage.inputMobileNumber('+14161234567');
    // 13. Click 'Create Account button'
    await signupPage.clickCreateAccountButton();
    // 14. Verify that 'ACCOUNT CREATED!' is visible
    await accountCreatedPage.verifyAccountCreatedTxTVisible();
    // 15. Click 'Continue' button
    await accountCreatedPage.clickContinueButton();
    // 16. Verify that 'Logged in as username' is visible
    await homePage.verifyLoggedInAsUsernameVisible();
    // 17. Click 'Delete Account' button
    await homePage.clickDeleteAccountButton();
    // 18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
    await deleteAccountPage.verifyAccountDeletedTxTVisible();
    await deleteAccountPage.clickContinueButton();
});











