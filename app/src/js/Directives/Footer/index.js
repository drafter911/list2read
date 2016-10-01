import angular from 'angular';

function Footer () {
    return {
        //restrict: 'A',
        restrict: 'E',
        scope: {
            name: '='
        },
        template: require('./Footer.html')
    }
}

export default angular.module('directives.footer', [])
    .directive('footer', Footer)
    .name;