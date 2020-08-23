import {Browser,Page} from "puppeteer";
const puppeteer = require("puppeteer");

export default class BasePage {
    page:Page;
    browser: Browser;


    async open() {
        //let browser: Browser;
        this.browser = await puppeteer.launch({headless: false, slowMo: 10});
        this.page = await this.browser.newPage();
        await this.page.setViewport({width: 1366, height: 768});
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
}
