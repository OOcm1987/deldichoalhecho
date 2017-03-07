var app = angular.module('webApp', ['ngSanitize'], function($interpolateProvider) {
  $interpolateProvider.startSymbol('[[');
  $interpolateProvider.endSymbol(']]');
});

app.controller('cumplimientoController', function($scope,$http,$location,$anchorScroll){
  $scope.analisis = [];
  $scope.hash = '';
  $http.get('https://docs.google.com/spreadsheets/d/18RTvtQh3Ytzc-wQkyNR6LnHzDNFDcpLDFWlAAqrWZs0/pubhtml')
      .success(function (data) {
        $scope.analisis = data;
        $scope.hash = window.location.hash.slice(2);
        $location.hash($scope.hash);
        $anchorScroll();
      })
      .error(function (){
        $scope.messages = { response: false, message: 'no org loaded' }
      });
});