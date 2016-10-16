import angular from 'angular';

class booksHttp {

    constructor($http) {
        this.$http = $http;
    }

    getBooks(url, calback, i) {
        return this.$http({method: 'GET', url: url})
            .then((response) => {
                calback(response.data, i);
            });
    }

    getBook(calback, i, a) {
        return this.$http({method: 'GET', url: '/books/'})
            .then((response) => {
                calback(response.data, i);
            });
    }

    addBook(url, data, callback) {
        return this.$http({
            method: 'POST',
            url: '/books/',
            data: data
        })
            .then((response) => {
                callback();
            });
    }
}

booksHttp.$inject = ['$http', '$window'];
export default angular.module('services.books-http', [])
    .service('booksHttp', booksHttp, '$window')
    .name;