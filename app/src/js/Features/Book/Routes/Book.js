import angular from 'angular';
routes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routes($stateProvider) {
    $stateProvider
        .state('book', {
            url: '/:_id',
            template: require('./../Templates/Book.html'),
            controller: 'BookCtrl',
            controllerAs: 'book'
        });
}