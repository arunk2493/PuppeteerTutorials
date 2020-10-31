import BasePage from "./base-page";

export class ProfilePage extends BasePage {
    labelUserName: string = 'a[data-ga-click="Header, go to profile, text:Signed in as"] strong';
    constructor() {
        super();
    }
}
