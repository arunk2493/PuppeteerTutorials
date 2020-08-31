import {HomePage} from "./home-page";

export class ProfilePage extends HomePage {
    labelUserName: string = 'a[data-ga-click="Header, go to profile, text:Signed in as"] strong';
    constructor() {
        super();
    }
}
