const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({headless:true});
    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 800 });
    await page.setRequestInterception(true);
    page.on('request', (request) => {
        console.log('>>', request.method(), request.url());
        request.continue();
    });
    page.on('response', async (response) => {
        console.log('<<', response.status(), response.url());
    });
    await page.goto('https://danube-webshop.herokuapp.com/');
    await page.pdf({path: '/Users/arunkumaraswamy/Documents/projects/Study/Puppeteer/PuppeteerTutorials/screenshots/demo-request-2.pdf',format:'A4'});
    await browser.close();
})()
