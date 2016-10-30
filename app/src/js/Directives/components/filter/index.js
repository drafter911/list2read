import angular from 'angular';
import FilterCtrl from './FilterCtrl';

function filter () {
    return {
        restrict: 'A',
        template: require('./index.html'),
        controller: FilterCtrl
    };
}


export default angular.module('directives.filter', [])
    .directive('filter', filter)
    .controller('FilterCtrl', FilterCtrl)
    .name;
