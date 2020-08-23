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
        const userDetails = require('../data/userdata.json');
        await page.goto('https://github.com/login');
        console.log('Started');
        await homePage.enterValue(homePage.txtUserName,userDetails.username);
        await homePage.enterValue(homePage.txtPassword,userDetails.password);
        await homePage.clickElement(homePage.btnSignIn);
        await page.waitForNavigation();
        const title1 = await page.title();
        console.log('The title is:'+title1);
        await expect(title1).contains('GitHub');
        await page.waitForSelector(homePage.iconUserProfile);
        await homePage.clickElement(homePage.iconUserProfile);
        await homePage.takeScreenShot(page);
        await expect(await homePage.getInnerText(homePage.labelUserName)).to.equal('arunk2493');
    });
    afterEach(async ()=>{
        await page.close();
    })
});

