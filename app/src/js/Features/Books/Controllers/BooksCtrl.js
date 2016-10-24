import angular from 'angular';
export default class BooksCtrl {

    constructor(booksHttp, $scope, $window) {
        this.baseURL = '/books';
        this.booksHttp = booksHttp;
        $scope.addNew = this.addNew;
        $scope.deleteBook = this.deleteBook;
        booksHttp.getBooks(this.baseURL, this.getBooks, this);
    }

    getBooks(data, context) {
        context.books = data;
    }

    addNew (data) {
        this.books.booksHttp.addBook(this.books.baseURL, data, this.books.reload);
    }

    deleteBook (_id) {
        console.log(_id);
        this.books.booksHttp.deleteBook(this.books.baseURL, _id, this.books.reload);
    }

    reload() {
        window.location.reload();
    }
}

BooksCtrl.$inject = ['booksHttp', '$scope', '$rootScope'];