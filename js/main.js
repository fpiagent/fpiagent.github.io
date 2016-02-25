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
	}).when("/capitulo1", {
		templateUrl : "partials/capitulo1.html",
		controller : "MainCtrl"
	}).when("/agradecimientos", {
		templateUrl : "partials/agradecimientos.html",
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
	// DO nothing for now, placeholder
});

app.controller('MainCtrl', function($scope, $http) {
	window.scrollTo(0, 0);
	$('.bio').hide();
	$('.bio-button').unbind('click');
	$('.contact').hide();
	$('.contact-button').unbind('click');
	
	$('.bio-button').click(function() {
		$('.bio').slideToggle(500);
		$('.bio-button').slideToggle(200, function() {
			$('.bio-button').slideToggle(200);
		});
	});
	
	$('.contact-button').click(function() {
		$('.contact').slideToggle(200, function() {
			window.scrollTo(0,document.body.scrollHeight);
		});
	});
	
	startVideoEvents();
});

function startVideoEvents() {
	$('#vid1').click(function() {
		loadPlayer('jGHcz_TOvrI');
	});
	$('#vid2').click(function() {
		loadPlayer('oWkA_XJa8D8');
	});
	$('#vid3').click(function() {
		loadPlayer('q-M6coiGBsk');
	});
	$('#vid4').click(function() {
		loadPlayer('BeWUT-8_phU');
	});
	$('#vid5').click(function() {
		loadPlayer('4FdlamhTVlo');
	});
	$('.close-player').click(function() {
		$('.close-player').hide();
		$('.player').animate({
		    height: '0',
		    width: '0',
		    top: '50%',
		    left: '50%'
		}, {
		    duration: 2000  // 2 seconds
		}, function() {
			$('.player').attr('src', '');
			$('.player').hide();
		});
		
	});
}

function loadPlayer(path) {
	$('.player').attr('src', 'https://www.youtube.com/embed/' + path);
	$('.player').show();
	$('.player').animate({
	    height: '100%',
	    width: '100%',
	    top: '0',
	    left: '0'
	}, {
	    duration: 2000  // 2 seconds
	});
	$('.close-player').show();
}

