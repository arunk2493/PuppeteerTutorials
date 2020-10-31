import Mocker from "../stubs/sample";
import {Mockinitializer} from "../endpoints/mockinitializer";
import {BooksHome} from "../stubs/books-home";
import {Page} from "puppeteer";
import MockPage from "../../pages/mock-page";
//var expect = require('chai').expect;

describe( "Sample Mock", async ()=>{
    let page: Page;
    const mocker = new Mocker();
    const mockPage = new MockPage();
    const mocks = new Mockinitializer(page);

    beforeEach(async () => {
        console.log("Started");
        page = await mockPage.openMock();
        BooksHome.createBooksMock(mocks);

    });

    xit("Mocking",async () => {
        console.log('Mockinggg.....');
    });
    xit("Mocking2",async () => {
        console.log('Mockinggg2.....');
        await mocker.mock();

    });
    it("Mocking 3",async () => {
        console.log('Mockinggg.....');
        /*await expect(await mockPage.getInnerText(mockPage.book1)).to.equal('Haben oder haben');*/
        //await page.waitFor(6000);
        await page.click(mockPage.book1);
        BooksHome.createBookDetail(mocks);
    });
    afterEach(async ()=>{
        console.log("Mocked");
        await page.close();
        await mockPage.closeBrowser();
    })
});

