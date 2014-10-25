/**
 * Created by mdantas on 10/24/14.
 */
(function() {

    var ListController = function($scope) {

        $scope.desejadas = [];
        $scope.aprendidas = [];

        $scope.desejadaName = "";
        $scope.aprendidaName = "";

        $scope.addDesejada = function(name) {

            $scope.desejadas.push(name);

        };

        $scope.removeDesejada = function(index) {

            $scope.desejadas.splice(index, 1);
        };

        $scope.addAprendida = function(name) {

            $scope.aprendidas.push(name);
        };

        $scope.removeAprendida = function(index) {

            $scope.aprendidas.splice(index, 1);
        };

        $scope.moveDesejadaToAprendida = function(index) {

            $desejadaName = $scope.desejadas[index];
            $scope.removeDesejada(index);
            $scope.addAprendida($desejadaName);
        };
    };
    var siApp = angular.module('siApp', []);
    ListController.$inject = ['$scope'];
    siApp.controller('ListController', ListController);
}());
