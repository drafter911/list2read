import angular from 'angular';
import serializeObject from './../../../Services/SerializeDataToJSON';

function addItem() {
    return {
        restrict: 'EA',
        template: require('./index.html'),
        replace: true,

        link: function (scope, elem, attrs) {
            elem.bind('submit', function(e) {
                e.preventDefault();
                scope.$apply(function() {
                    scope.addNew(elem.serializeObject());
                });
            });
        }
    };
}

export default angular.module('directives.add-item', [])
    .directive('addItem', addItem, '$scope')
    .name;