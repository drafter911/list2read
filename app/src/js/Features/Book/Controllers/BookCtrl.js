import angular from 'angular';
export default class BookCtrl {

    constructor(booksHttp, $stateParams) {
        $stateParams._id;
        booksHttp.getBook(this.getBook, this, $stateParams._id);

    }

    getBook(data, context) {
        context.books = data;
    }
}

BookCtrl.$inject = ['booksHttp', '$scope'];