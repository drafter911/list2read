import angular from 'angular';
export default class BooksCtrl {

    constructor(booksHttp) {
        booksHttp.getBooks(this.getBooks, this);

    }

    getBooks(data, context) {
        context.books = data;
    }
}

BooksCtrl.$inject = ['booksHttp', '$scope'];