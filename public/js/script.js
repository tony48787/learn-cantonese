
var app = angular.module("learn-cantonese", ["ui.router"]);

app.config(function($stateProvider, $urlRouterProvider){

	$stateProvider.state("main", {
		url: "/",
		templateUrl: "./public/views/main.html",
		contoller: "mainController"
	})

	$urlRouterProvider.otherwise("/");

});

app.controller("mainController", function($scope, $http){
	$http.get("/learn-cantonese")
		.then(function(response){

			console.log(response);

			$scope.tutorials = response.data.status === null ? response.data.result : [];

			console.log($scope.tutorials);

		}, function(error){

			$scope.tutorials = [];

			console.log(error);

		});

});