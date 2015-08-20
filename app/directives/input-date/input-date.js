/**
 * Created by Danilo on 19/08/2015.
 */
angular.module('oobj-directives')

    .directive('inputDate', function() {
        return {
            restrict : 'E',
            templateUrl : 'app/directives/input-date/input-select.html',
            scope : {
                ngModel : '=',
                ngDisabled : '=?',
                ngRequired : '=?',
                label : '@',
                colspan : '@'
            },
            link : function($scope, element, attbrs) {
                $scope.classInputText = 'col-sm-3';

                if (angular.isDefined($scope.colspan)) {
                    $scope.classInputText = 'col-sm-' + $scope.colspan;
                }
            }
        };
    });