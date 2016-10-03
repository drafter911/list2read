import angular from 'angular';

function BackButton () {
    return {
        //restrict: 'A',
        restrict: 'E',
        template: require('./index.html'),
        scope: {
            name: '=',
            back: '@back',
            forward: '@forward',
            icons: '@icons'
        },

        link: (scope, element, attrs) => {

            let buttons = element[0].children;

            buttons[0].addEventListener('click', () => {
                history.back();
                scope.$apply();
            });

            buttons[1].addEventListener('click', () => {
                history.forward();
                scope.$apply();
            });
        }
    }
}

export default angular.module('directives.history-nav', [])
    .directive('historyNav', BackButton)
    .name;