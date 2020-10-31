const puppeteer = require('puppeteer');
const http = require('http');
const server = http.createServer((_req: any, res: { end: (arg0: string) => any; }) => res.end('Hi'))
    .listen(1337, async () => {
        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();


        try {
            await page.goto('http://localhost:1337');
        } catch (err) {
            console.log(err);
        }

        console.log('Done');
        //browser.close();
        //server.close();
    });
