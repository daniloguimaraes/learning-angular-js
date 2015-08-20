/**
 * Created by Danilo on 17/08/2015.
 */
(function() {
    angular.module('produtosApp')
        .controller('PesquisaPessoaController', PesquisaPessoaController);

    PesquisaPessoaController.$inject = ['$scope', '$rootScope', '$state'];

    function PesquisaPessoaController($scope, $rootScope, $state) {
        //$rootScope.$on('$stateNotFound')

        $state.go("produto.pesquisa");
    };

})();

