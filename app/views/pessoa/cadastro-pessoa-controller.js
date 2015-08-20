/**
 * Created by Danilo on 17/08/2015.
 */
angular.module('produtosApp')
    .controller('CadastroPessoaController', CadastroPessoaController)
;

CadastroPessoaController.$inject = ['$scope'];

function CadastroPessoaController($scope) {
    $scope.salvar = function() {
        alert("salvou");
    };

    $scope.excluir = function() {

    };

    $scope.limpar = function() {

    };
};
