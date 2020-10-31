import {Browser, Page} from "puppeteer";
const puppeteer = require("puppeteer");
export class Mockinitializer {
    page: Page;
    browser: Browser;

    constructor(page: Page) {
        this.page = page;
    }
    async initializer(mockData: object, baseApi: string){
        console.log("Intercepting...");
        this.browser = await puppeteer.launch({headless: false, slowMo: 10});
        this.page = await this.browser.newPage();
        await this.page.setRequestInterception(true);
        this.page.on('request', (request) => {
            console.log("Intercepted:"+request.url());
            if (request.url() === baseApi) {
                request.respond({
                    contentType: 'application/json',
                    body: JSON.stringify(mockData)
                })
            } else request.continue()
        })
        await this.page.setViewport({width: 1366, height: 768});
        await this.page.goto('https://danube-webshop.herokuapp.com/');
        //return this.page;
    }

}
