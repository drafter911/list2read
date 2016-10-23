import angular from 'angular';
export default class BookCtrl {

    constructor($stateParams, booksHttp) {
        booksHttp.getBook(this.getBook, this, $stateParams._id);
    }

    getBook(data, context) {
        context.book = data;
    }
}

BookCtrl.$inject = ['$stateParams','booksHttp'];