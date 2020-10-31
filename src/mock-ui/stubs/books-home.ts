import {Mockinitializer} from "../endpoints/mockinitializer";
import {Endpoints} from "../endpoints/endpoints";

export class BooksHome{
     static createBooksMock(mocks: Mockinitializer){
        const homeBooks: object = require('../data/homepage-books-mock.json');
        console.log("Inside stub");
         mocks.initializer(homeBooks,Endpoints.baseApi);

    }
    static createBookDetail(mocks: Mockinitializer){
        const detailBooks: object = require('../data/book-details.json');
        console.log("Inside stub");
        mocks.initializer(detailBooks,Endpoints.bookOne);

    }
}
