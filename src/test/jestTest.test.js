import {beforeAll} from "@jest/globals";
import {Browser, Page} from "puppeteer";
const puppeteer = require("puppeteer");
describe('Google', () => {
    it('should be titled "Google"', async () => {
        const browser = await puppeteer.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',args:[
                '--start-fullscreen','it-IT' // //launch chromium *
            ]});
        const page = await browser.newPage(); //create a new blank page*
        await page.setViewport({width: 1366, height: 768}); // sets the height and width of the window
        await page.goto('https://github.com/login');//* navigate url
        await expect(page.title()).resolves.toMatch('GitHub');
    });
});
