routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider
        .state('articles', {
            url: '/articles',
            template: require('./../Templates/Articles.html'),
            controller: 'ArticlesCtrl',
            controllerAs: 'articles'
        });
}