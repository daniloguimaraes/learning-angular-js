/**
 * Created by Danilo on 17/08/2015.
 */
(function() {
    angular.module('produtosApp')
        .controller('CadastroPessoaController', CadastroPessoaController);

    CadastroPessoaController.$inject = ['$scope'];

    function CadastroPessoaController($scope) {
        $scope.generos = [
            {
                value: 'M',
                label: 'Masculino'
            },
            {
                value: 'F',
                label: 'Feminino'
            }
        ];

        $scope.salvar = function() {
            alert("salvou");
        };

        $scope.excluir = function() {

        };

        $scope.limpar = function() {

        };
    };
})();


