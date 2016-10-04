import angular from 'angular';
import uirouter from 'angular-ui-router';
import booksHttp from './../../Services/books.http/booksHTTP';
import routing from './Routes/Book';
import BookCtrl from './Controllers/BookCtrl';

export default angular.module('app.book',
    [
        uirouter,
        booksHttp
    ])
    .config(routing)
    .controller('BookCtrl', BookCtrl)
    .name;