/**
 * Created by Danilo on 18/08/2015.
 */
(function() {
    angular.module('produtosApp', [])
        .directive('jbHelloWorld', function() {
            return {
                restrict : 'E',
                templateUrl : 'app/directives/hello-world/hello-world.html'
            }
        })
    ;
})();