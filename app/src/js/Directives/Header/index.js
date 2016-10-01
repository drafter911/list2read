import angular from 'angular';

function Header () {
    return {
        restrict: 'E',
        scope: {
            name: '='
        },
        template: require('./Header.html')
    }
}

export default angular.module('directives.header', [])
    .directive('header', Header)
    .name;