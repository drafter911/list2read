import angular from 'angular';

class articlesHttp {

    constructor($http) {
        this.$http = $http;
    }

    getArticles(calback, i) {
        return this.$http({method: 'GET', url: '/articles'})
            .then((response) => {
                calback(response.data, i);
            });
    }
}

articlesHttp.$inject = ['$http'];
export default angular.module('services.articles-http', [])
    .service('articlesHttp', articlesHttp)
    .name;