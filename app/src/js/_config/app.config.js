import angular from 'angular';

routing.$inject = ['$urlRouterProvider', '$locationProvider'];

export default function routing($urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(false);
    //$locationProvider.html5Mode({
    //    enabled: true,
    //    requireBase: false
    //});
    $urlRouterProvider.otherwise('/');
}