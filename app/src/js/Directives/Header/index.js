import angular from 'angular';
import HistoryNav from './../components/historyNavigation';

function Header () {
    return {
        restrict: 'E',
        scope: {
            name: '='
        },
        template: require('./Header.html')
    }
}

export default angular.module('directives.header', [HistoryNav])
    .directive('header', Header)
    .name;