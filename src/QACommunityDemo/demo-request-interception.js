const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 800 });
    await page.setRequestInterception(true);
    page.on('request', (request) => {
        if (request.resourceType() === 'image') request.abort();
        else request.continue();
    });
    await page.goto('https://danube-webshop.herokuapp.com/');
    await page.screenshot({path: '/Users/arunkumaraswamy/Documents/projects/Study/Puppeteer/PuppeteerTutorials/screenshots/demo-request-2.png'});
    await browser.close();
})();
