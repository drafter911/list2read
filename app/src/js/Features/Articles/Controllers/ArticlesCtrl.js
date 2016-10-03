import angular from 'angular';
export default class ArticlesCtrl {

    constructor(articlesHttp) {
        articlesHttp.getArticles(this.getArticles, this);

    }

    getArticles(data, context) {
        context.articles = data;
    }
}

ArticlesCtrl.$inject = ['articlesHttp', '$scope'];