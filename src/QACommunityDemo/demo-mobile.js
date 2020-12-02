const puppeteer = require('puppeteer');
const iPhone = puppeteer.devices['iPhone 6'];

puppeteer.launch({headless:false,slowMo:100}).then(async browser => {
    const page = await browser.newPage();
    await page.setUserAgent("Mozilla/5.0 (Windows Phone 10.0; Android 6.0.1; Microsoft; RM-1152) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Mobile Safari/537.36 Edge/15.15254");
    await page.setViewport({ width: 374, height: 800 });
    //await page.emulate(iPhone);
    await page.goto('https://www.google.com');
    await page.screenshot({path: '/Users/arunkumaraswamy/Documents/projects/Study/Puppeteer/PuppeteerTutorials/screenshots/demo-mobile.png'});
    await browser.close();
});
