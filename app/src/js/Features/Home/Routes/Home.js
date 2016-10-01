routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            template: require('./../Templates/Home.html'),
            controller: 'HomeController',
            controllerAs: 'home'
        });
}