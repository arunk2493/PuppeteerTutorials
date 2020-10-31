import {Endpoints} from "../endpoints/endpoints";

const puppeteer = require("puppeteer");

export default class Mocker{
    mockResponseObject = require('../data/homepage-books-mock.json');
    async mock() {
        const browser = await puppeteer.launch({headless: false, slowMo: 10,args:[
                '--start-fullscreen' // you can also use '--start-fullscreen'
            ]});
        const page = await browser.newPage();

        await page.setRequestInterception(true);

        page.on('request', (requestInterception: { url: () => string; respond: (arg0: { content: string; body: string; }) => void; continue: () => void; }) => {
            console.log("Intercepted:"+requestInterception.url());
            if (requestInterception.url() === Endpoints.baseApi) {
                requestInterception.respond({
                    content: 'application/json',
                    body: JSON.stringify(this.mockResponseObject)
                })
            } else requestInterception.continue()
        })

        await page.setViewport({ width: 1200, height: 800 })

        await page.goto('https://danube-webshop.herokuapp.com/')

        await page.screenshot({ path: 'screenshot.png' })

        await browser.close()
    }

}





