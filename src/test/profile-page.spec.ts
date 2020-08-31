import { Page} from "puppeteer";
import {ProfilePage} from "../pages/profile-page";
var expect = require('chai').expect;


describe( "Sample Form", async ()=>{
    let page: Page;
    const profilePage = new ProfilePage();

    before(async ()=>{
        page = await profilePage.open();
        await page.goto('https://github.com/login');
        await profilePage.loginUser();
        console.log('Started');
    })

    it("Google Search",async () => {
        await profilePage.clickElement(profilePage.iconUserProfile);
        await profilePage.takeScreenShot(page);
        await expect(await profilePage.getInnerText(profilePage.labelUserName)).to.equal('arunk2493');
    });
    afterEach(async ()=>{
        await page.close();
        await profilePage.browser.close();
    })
});

