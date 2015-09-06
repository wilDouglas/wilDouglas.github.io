var servicos = angular.module('app.servicos',[]);

servicos.controller('ServicosCtrl',['$scope',function($scope){
    $('#home').removeClass('active');
    $('#blog').removeClass('active');
    $('#servicos').addClass('active');
    $('#contato').removeClass('active');
    $('.parallax').parallax();
}]);