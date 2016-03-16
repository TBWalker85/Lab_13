var controllers = angular.module('myApp.controllers', []);
//     controllers.controller('myCtrl', ['$scope', '$http', function($scope, $http) {
    // $http.get("/messages")
    // .then(function(response) {
    //     $scope.myWelcome = response.data;
    // }])
controllers.controller('Login', ['$scope', function($scope){
        $scope.user = '';
}]);
    
// controllers.controller('MakeTweet', ['$scope', function($scope){
//         $scope.tweets = [{text:'someText', user: $scope.LoginController.user}]
// 	}]);