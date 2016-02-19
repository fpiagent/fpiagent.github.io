/**
 * Main AngularJS Web Application
 */
var app = angular.module('tutorialWebApp', [ 'ngRoute' ]);

/**
 * Configure the Routes
 */
app.config([ '$routeProvider', function($routeProvider) {
	$routeProvider
	// Home
	.when("/", {
		templateUrl : "partials/home.html",
		controller : "PageCtrl"
	})
	.when("/main", {
		templateUrl : "partials/main.html",
		controller : "MainCtrl"
	})
	// else 404
	.otherwise("/404", {
		templateUrl : "partials/404.html",
		controller : "PageCtrl"
	});
} ]);

/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function($scope, $http) {
	console.log("Page Controller reporting for duty.");
});

app.controller('MainCtrl', function($scope, $http) {
	console.log("Main Controller reporting for duty.");
	
	window.scrollTo(0,0);
	$('.bio').hide();
	$('.bio-button').unbind('click');
	
	$('.bio-button').click(function() {
		$('.bio').slideToggle(500);
		$('.bio-button').slideToggle(200, function() {
			if($('.bio-button span').html() === 'Bio') {
				$('.bio-button span').html('Hide');
			} else {
				$('.bio-button span').html('Bio');
			}
			$('.bio-button').slideToggle(200);
		});
	});
});