/**
 * Created by Danilo on 10/08/2015.
 */

angular.module('learningAngularJs', ['ui.grid', 'ui.grid.resizeColumns', 'ui.grid.selection', 'ngMaterial', 'ui.router'])
    .controller('HelloWorldController', HelloWorldController)
    .config(routeConfig)
;

HelloWorldController.$inject = ['$scope'];

function HelloWorldController($scope) {
    $scope.myStyle = {};
    $scope.myStyle.width = '100px';
    $scope.myStyle.height = '100px';
    $scope.myClass = '';

    $scope.$watch('nome', function(newValue, oldValue) {
        if (newValue == oldValue) {
            return;
        }

        if (angular.isDefined(newValue) && newValue == 'oobj') {
            $scope.myStyle.backgroundColor = 'green';
            $scope.myClass = 'red';
        } else {
            $scope.myStyle.backgroundColor = 'yellow';
            $scope.myClass = 'blue';
        }
    });
}



