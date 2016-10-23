import angular from 'angular';
import uirouter from 'angular-ui-router';
import booksHttp from './../../Services/books.http/booksHTTP';
import routing from './Routes/Books';
import BooksCtrl from './Controllers/BooksCtrl';
//import ff from './../Book'

export default angular.module('app.books',
    [
        uirouter,
        booksHttp
    ])
    .config(routing)
    .controller('BooksCtrl', BooksCtrl)
    .name;