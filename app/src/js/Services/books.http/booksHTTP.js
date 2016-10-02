import angular from 'angular';

class booksHttp {

    constructor($http) {
        this.$http = $http;
    }

    getBooks(calback, i) {
        return this.$http({method: 'GET', url: '/books'})
            .then((response) => {
                calback(response.data, i);
            });
    }
}

booksHttp.$inject = ['$http'];
export default angular.module('services.books-http', [])
    .service('booksHttp', booksHttp)
    .name;