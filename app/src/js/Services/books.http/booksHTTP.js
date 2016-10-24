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
        return this.$http({method: 'GET', url: '/books/'+a})
            .then((response) => {
                calback(response.data[0], i);
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

    deleteBook(url, data, callback) {
        console.log(data);
        return this.$http({
            method: 'DELETE',
            url: '/books/',
            data: {
                _id: data
            },
            headers: {
                'Content-Type': 'application/json'
            }
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