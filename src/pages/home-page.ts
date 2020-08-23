import BasePage from "./base-page";

export class HomePage extends BasePage {
    txtUserName: string = 'input[name="login"]'; //or input#login_field or #login_field
    txtPassword: string = 'input#password';
    btnSignIn: string = 'input[value="Sign in"]';
    iconUserProfile: string = 'summary[aria-label="View profile and more"]';
    labelUserName: string = 'a[data-ga-click="Header, go to profile, text:Signed in as"] strong';
}
