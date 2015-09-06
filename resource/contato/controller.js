var contato = angular.module('app.contato',[]);

contato.controller('ContatoCtrl',['$scope',function($scope){
    $('#home').removeClass('active');
    $('#blog').removeClass('active');
    $('#servicos').removeClass('active');
    $('#contato').addClass('active');

}]);