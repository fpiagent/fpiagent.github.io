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
		templateUrl : "partials/introduccion.html",
		controller : "PageCtrl"
	})
	.when("/capitulo1", {
		templateUrl : "partials/capitulo1.html",
		controller : "MainCtrl"
	})
	.when("/agradecimientos", {
		templateUrl : "partials/agradecimientos.html",
		controller : "PageCtrl"
	})
	.when("/contacto", {
		templateUrl : "partials/contacto.html",
		controller : "PageCtrl"
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
	//DO nothing for now, placeholder
});

app.controller('MainCtrl', function($scope, $http) {
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