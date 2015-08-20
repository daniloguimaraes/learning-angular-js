/**
 * Created by Danilo on 19/08/2015.
 */
(function() {
    angular.module('oobj-directives')
        .directive('oobjCrud', oobjCrud);

    function oobjCrud() {
        return {
            restrict : 'E',
            templateUrl : 'app/directives/crud/crud.html',
            transclude : true,
            scope : {
                titulo: '@',
                acaoSalvar : '&',
                acaoExcluir : '&',
                acaoLimpar : '&'
            },
            link : function($scope, element, attbrs) {
                $scope.salvar = function() {
                    if (angular.isFunction($scope.acaoSalvar)) {
                        $scope.acaoSalvar();
                    }
                };

                $scope.excluir = function() {
                    if (angular.isFunction($scope.acaoExluir)) {
                        $scope.acaoExcluir();
                    }
                };

                $scope.limpar = function() {
                    if (angular.isFunction($scope.acaoLimpar)) {
                        $scope.acaoLimpar();
                    }
                };
            }
        };
    }
})();