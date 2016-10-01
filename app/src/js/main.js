import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './_config/app.config';
import home from './Features/Home';
import footer from './Directives/Footer'
import header from './Directives/Header'

let app = angular.module('app',
    [
        uirouter,
        header,
        footer,
        home
    ]);

app.config(routing);