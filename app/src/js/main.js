import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './_config/app.config';
import footer from './Directives/Footer'
import header from './Directives/Header'
import home from './Features/Home';
import books from './Features/Books';
import articles from './Features/Articles';

let app = angular.module('app',
    [
        uirouter,
        header,
        footer,
        home,
        books,
        articles
    ]);

app.config(routing);