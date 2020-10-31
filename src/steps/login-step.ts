import {HomePage} from "../pages/home-page";
import {ProfilePage} from "../pages/profile-page";

const { Given,Then } = require('cucumber');
var expect = require('chai').expect;

var {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(60 * 1000);
const homePage = new HomePage();
const profilePage = new ProfilePage();

Given(/^the puppeteer settings are configured$/, async () => {
    await homePage.open();
});
Then(/^I launch the URL$/,async ()=>{
    await homePage.page.goto('https://github.com/login');
});
Then(/^I give the valid username and password$/,async ()=>{
    const userDetails = require('../data/userdata.json');
    await homePage.enterValue(homePage.txtUserName,userDetails.username);
    await homePage.enterValue(homePage.txtPassword,userDetails.password);
    await homePage.loginUser();
});
Then(/^I click on the signin button$/,async ()=>{
    await homePage.clickElement(homePage.btnSignIn);
    await homePage.page.waitForNavigation();
    const title1 = await homePage.page.title();
    console.log('The title is:'+title1);
    await expect(title1).contains('GitHub');
});
Then(/^I validate the user profile$/,async ()=>{
    await homePage.page.waitForSelector(homePage.iconUserProfile);
    await homePage.clickElement(homePage.iconUserProfile);
    await homePage.takeScreenShot(homePage.page);
    await expect(await homePage.getInnerText(profilePage.labelUserName)).to.equal('arunk2493');
});
Then(/^I close the browser$/,async ()=>{
    await homePage.page.close();
    await homePage.browser.close();
});
