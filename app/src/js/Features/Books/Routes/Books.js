routes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routes($stateProvider) {
    $stateProvider
        .state('books', {
            url: '/books',
            template: require('./../Templates/Books.html'),
            controller: 'BooksCtrl',
            controllerAs: 'books'
        });
}