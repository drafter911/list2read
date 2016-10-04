import angular from 'angular';
routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider
        .state('book', {
            url: '/books/:_id',
            template: require('./../Templates/Book.html'),
            controller: 'BookCtrl',
            resolve:{
                _id: ['$stateParams', function($stateParams){
                    return $stateParams._id;
                }]},
            controllerAs: 'book'
        });
}