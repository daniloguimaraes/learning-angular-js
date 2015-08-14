/**
 * Created by Danilo on 11/08/2015.
 */
angular.module('learningAngularJs').controller('BootstrapController', BootstrapController);

BootstrapController.$inject = ['$scope'];

function BootstrapController($scope) {
    $scope.pessoa = {
        "nome": "danilo", "sobrenome": "lemes", "sexo": "M", "cor" : "green"
    };
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


    $scope.gridOptions = {
        data : 'pessoas',
        columnDefs : [
            {name : 'Nome', field : 'nome', cellTemplate : 'app/components/cell-template.html' },
            {name : 'Sobrenome', field : 'sobrenome'},
            {name : 'Data de nascimento', field : 'nascimento'},
            {name : 'Sexo', field : 'sexo'}
        ],
        rowTemplate : 'app/components/row-template.html'
    };

    $scope.gridItemClick = function () {
        alert('oi')
    };

    $scope.getRowStyle = function(row) {
        console.log(row);

        var rowStyle = {};
        if (angular.isDefined(row.entity.cor)) {
            console.log("is defined!");
            rowStyle.backgroundColor = row.entity.cor;
        }
        return rowStyle;
    };

}