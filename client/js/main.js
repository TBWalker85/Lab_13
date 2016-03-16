var app = angular.module('myApp', ['myApp.controllers', 'ngRoute']);
app.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/', {
        templateURL: 'views/welcome.html',
        controller: 'Login'
    });
    // .when ('/tweets', {
    //     templateURL: 'views/index.html',
    //     controller: 'MakeTweet'
    // })
    // .otherwise ({
    // redirectTo: '/'
    // });
}]);
