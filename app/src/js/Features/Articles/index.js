import angular from 'angular';
import uirouter from 'angular-ui-router';
import articlesHttp from './../../Services/articles.http/articlesHTTP';
import routing from './Routes/Articles';
import ArticlesCtrl from './Controllers/ArticlesCtrl';

export default angular.module('app.articles',
    [
        uirouter,
        articlesHttp
    ])
    .config(routing)
    .controller('ArticlesCtrl', ArticlesCtrl)
    .name;