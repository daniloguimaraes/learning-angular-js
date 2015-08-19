/**
 * Created by Danilo on 17/08/2015.
 */

angular.module('produtosApp', ['ui.router', 'oc.lazyLoad', 'oobj-directives'])
    .config(routeConfig)
    .directive('jbHelloWorld', function() {
        return {
            restrict : 'E',
            templateUrl : 'app/directives/hello-world/hello-world.html'
        }
    })
;

routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

function routeConfig($stateProvider, $urlRouterProvider) {
    var home = {
        url: '/',
        templateUrl : 'app/views/home.html'
    };

    var produto = {
        url: '/produto/:id',
        templateUrl : 'app/views/produto/cadastro-produto.html',
        resolve: {
            depes : function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    files : [
                        'app/views/produto/cadastro-produto-controller.js'
                    ]
                })
            }

        }
    };

    var produtoPesquisa = {
        url: '/pesquisa',
        templateUrl : 'app/views/produto/pesquisa-produto.html',
        resolve: {
            depes : function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    files : [
                        'app/views/produto/pesquisa-produto-controller.js'
                    ]
                })
            }

        }
    };

    var pessoa = {
        abstract : true,
        url : '/pessoa',
        template : '<ui-view/>'

    };

    var cadastroPessoa = {
        url: '/cadastro',
        templateUrl : 'app/views/pessoa/cadastro-pessoa.html',
        resolve: {
            depes : function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    files : [
                        'app/views/pessoa/cadastro-pessoa-controller.js'
                    ]
                })
            }

        }
    };

    var pesquisaPessoa = {
        url: '/pesquisa',
        templateUrl : 'app/views/pessoa/pesquisa-pessoa.html',
        resolve: {
            depes : function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    files : [
                        'app/views/pessoa/pesquisa-pessoa-controller.js'
                    ]
                })
            }
        }
    };

    $stateProvider
        .state('home', home)
        .state('produto', produto)
        .state('produto.pesquisa', produtoPesquisa)
        .state('pessoa', pessoa)
        .state('pessoa.cadastro', cadastroPessoa)
        .state('pessoa.pesquisa', pesquisaPessoa);

    $urlRouterProvider.otherwise("/home");
}