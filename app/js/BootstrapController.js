/**
 * Created by Danilo on 11/08/2015.
 */
angular.module('learningAngularJs').controller('BootstrapController', BootstrapController);

BootstrapController.$inject = ['$scope'];

function BootstrapController($scope) {
    $scope.pessoa = {};
    $scope.pessoas = [];

    $scope.salvar = function() {
        $scope.pessoas.push($scope.pessoa);
        $scope.limpar();
    };

    $scope.limpar = function() {
        $scope.pessoa = {};
    };

    $scope.excluir = function() {
        $scope.pessoas.splice($scope.pessoas.indexOf($scope.pessoa, 1));
    };

    $scope.selecionar = function(obj) {
      $scope.pessoa = obj;
    };

}