import BasePage from "./base-page";
import {Browser, Page} from "puppeteer";


export default class MockPage extends BasePage{
    page:Page;
    browser:Browser;
    book1: string = '.preview-title';
    constructor() {
        super();
    }

}
