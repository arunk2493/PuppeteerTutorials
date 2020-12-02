const puppeteer = require("puppeteer");
(async () => {
    const browser = await puppeteer.launch({headless: false,args:[
            '--start-fullscreen' // //launch chromium *
        ]});
    const page = await browser.newPage(); //create a new blank page*
    await page.setViewport({width: 1366, height: 768}); // sets the height and width of the window
    await page.goto('https://github.com/login');//* navigate url
    await page.type('input#login_field','arunk2493',{delay:100});
    await page.focus('input#password');
    await page.type('input#password','arunk2493');
    const elem =  await page.$x('//input[@type="submit"]')
    await elem[0].click();
    await page.waitForSelector('button[aria-label="Dismiss this message"]');
    const errorMsg = await page.$('.flash >div');
    const value =  await page.evaluate(n => n.innerText, errorMsg);
    console.log("The Error Message:"+value);
    await page.screenshot({path: '/Users/arunkumaraswamy/Documents/projects/Study/Puppeteer/PuppeteerTutorials/screenshots/demo-file_1.png'});
    await page.pdf({path: '/Users/arunkumaraswamy/Documents/projects/Study/Puppeteer/PuppeteerTutorials/screenshots/demo-file_1.pdf',format:'A4'});
    //Dismiss this message
    await browser.close();
})();
