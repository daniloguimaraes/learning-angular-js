/**
 * Created by Danilo on 19/08/2015.
 */
(function() {
    angular.module('oobj-directives')
        .directive('inputSelect', function() {
            return {
                restrict : 'E',
                templateUrl : 'app/directives/input-select/input-select.html',
                scope : {
                    ngModel : '=',
                    provider : '=',
                    label : '@',
                    colspan : '@',
                },
                link : function($scope, element, attbrs) {
                    $scope.classInputText = 'col-sm-3';

                    if (angular.isDefined($scope.colspan)) {
                        $scope.classInputText = 'col-sm-' + $scope.colspan;
                    }
                }
            };
        });
})();