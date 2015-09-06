var app = angular.module('app', ['ngRoute', 'app.main','app.servicos','app.contato']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

    $routeProvider
        .when("/", {

            templateUrl: 'resource/main/main.html',
            controller: 'MainCtrl'

        })
        .when("/home", {

            templateUrl: 'resource/main/main.html',
            controller: 'MainCtrl'
        })

        .when("/servicos",{
            templateUrl: 'resource/servicos/servicos.html',
            controller: 'ServicosCtrl'
        })

        .when("/contato", {
            templateUrl: 'resource/contato/contato.html',
            controller: 'ContatoCtrl'
        })
        .otherwise({

            redirectTo: '/'

        });

    $locationProvider.html5Mode(true);
}]);