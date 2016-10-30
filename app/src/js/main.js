import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './_config/app.config';
import footer from './Directives/Footer'
import header from './Directives/Header'
import home from './Features/Home';
import books from './Features/Books';
import book from './Features/Book';
import articles from './Features/Articles';
import addItem from './Directives/components/addItem';
import filter from './Directives/components/filter';

let app = angular.module('app',
    [
        uirouter,
        header,
        footer,
        home,
        books,
        book,
        articles,
        addItem,
        filter
    ]);

app.config(routing);