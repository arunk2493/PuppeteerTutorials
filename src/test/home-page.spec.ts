import {HomePage} from "../pages/home-page";
import { Page} from "puppeteer";
var expect = require('chai').expect;


describe( "Sample Form", async ()=>{
    let page: Page;
    const homePage = new HomePage();

    beforeEach(async ()=>{
        page = await homePage.open();

    });

    it("Google Search",async () => {
        console.log('launched');
        await homePage.loginUser();
        const title1 = await page.title();
        console.log('The title is:'+title1);
        await expect(title1).contains('GitHub');
        await homePage.clickElement(homePage.iconUserProfile);

    });
    afterEach(async ()=>{
        await page.close();
        await homePage.browser.close();
    })
});



