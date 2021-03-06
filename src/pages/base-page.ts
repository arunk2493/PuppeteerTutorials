import {Browser,Page} from "puppeteer";
const puppeteer = require("puppeteer");


export default class BasePage {
    page:Page;
    browser: Browser;
    txtUserName: string = 'input[name="login"]'; //or input#login_field or #login_field
    txtPassword: string = 'input#password';
    btnSignIn: string = 'input[value="Sign in"]';
    constructor() {
    }
    pageloaded(){

    }

    async open() {
        //let browser: Browser;
        this.browser = await puppeteer.launch({headless: false, slowMo: 10,args:[
                '--start-fullscreen' // you can also use '--start-fullscreen'
            ]});
        this.page = await this.browser.newPage();
        await this.page.setViewport({width: 1366, height: 768});
        await this.page.goto('https://github.com/login');
        return this.page
    }
    async closeBrowser(){
        await this.page.close();
    }
    async enterValue(locator:string,input:string){
        await this.page.focus(locator);
        await this.page.keyboard.type(input);
    }
    async clickElement(locator:string){
        const elem = await this.page.$(locator); //replace $x
        await elem.click(); // await elem[0].click
    }
    async clickXpathElement(locator:string){
        const elem = await this.page.$x(locator); //replace $x
        await elem[0].click(); // await elem[0].click
    }
    async getInnerText(locator: string) {
        const name = await this.page.$(locator);
        const value =  await this.page.evaluate(name => name.innerText, name);
        return value;
    }
    async takeScreenShot(page: Page)
    {
        const today = new Date();
        const date = today.getDate() + '_' + (today.getMonth() + 1) + '_' + today.getFullYear() + '_' + today.getHours()+ '_' + today.getMinutes()+ '_' + today.getSeconds()+ '_' ;
        await page.screenshot({ path: 'mochawesome-report/screenshots/'+"TestScreenShots"+date+".png"});
    }

    async loginUser(){
        const userDetails = require('../data/userdata.json');
        await this.enterValue(this.txtUserName,userDetails.username);
        await this.enterValue(this.txtPassword,userDetails.password);
        await this.clickElement(this.btnSignIn);
        await this.page.waitForNavigation();
    }
    async openMock() {
        let browser: Browser;
        browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox','--lang=it-IT,it'], headless: false, slowMo: 0});
        this.page = await browser.newPage();
        this.page.setViewport({ width: 1366, height: 768});
        return this.page
    }
}
