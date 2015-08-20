/**
 * Created by Danilo on 18/08/2015.
 */
(function() {
    angular.module('oobj-directives')
        .directive('inputText', function() {
            return {
                restrict : 'E',
                templateUrl : 'app/directives/input-text/input-text.html',
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
})();

