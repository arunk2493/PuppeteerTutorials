import { Page} from "puppeteer";
import {ProfilePage} from "../pages/profile-page";
import {HomePage} from "../pages/home-page";
var expect = require('chai').expect;


describe( "Sample Form", async ()=>{
    let page: Page;
    const profilePage = new ProfilePage();
    const homePage = new HomePage();

    before(async ()=>{
        page = await profilePage.open();
        await page.goto('https://github.com/login');
        await profilePage.loginUser();
        console.log('Started');
    })

    it("Google Search",async () => {
        await profilePage.clickElement(homePage.iconUserProfile);
        await profilePage.takeScreenShot(page);
        await expect(await profilePage.getInnerText(profilePage.labelUserName)).to.equal('arunk2493');
    });
    afterEach(async ()=>{
        await page.close();
        await profilePage.browser.close();
    })
});

