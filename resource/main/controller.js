var main = angular.module('app.main',[]);

main.controller('MainCtrl',['$scope', function ($scope) {
    $('.parallax').parallax();
    $('#home').addClass('active');
    $('#blog').removeClass('active');
    $('#servicos').removeClass('active');
    $('#contato').removeClass('active');

    $('.tooltipped').tooltip({delay: 50});
}]);