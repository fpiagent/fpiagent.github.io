/**
 * AngularJS Tutorial 1
 * @author Nick Kaye <nick.c.kaye@gmail.com>
 */

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

function createPentagon() {
	var el = document.getElementById('pentagon');
	var c2 = el.getContext('2d');
	c2.beginPath();
	
	//Drawing the line
	var midH = $(el).width() / 2;
	var midV = $(el).height() / 2;
	c2.moveTo(midH, 0);
	c2.lineTo(midH + 100, midV - 110);
	c2.lineTo(midH + 50, midV);
	c2.lineTo(midH - 50, midV);
	c2.lineTo(midH - 100, midV - 110);
	c2.closePath();
	
	//Coloring
	c2.lineWidth = 2;
	c2.strokeStyle = '#000';
	c2.stroke();
}

function locateVideos() {

//	$('#vid1').css({ top: '155px' });
//	$('#vid1').css({ left: '674px' });
//	
//	$('#vid2').css({ top: '280px' });
//	$('#vid2').css({ right: '406px' });
//	
//	$('#vid3').css({ top: '280px' });
//	$('#vid3').css({ left: '430px' });
//	
//	$('#vid4').css({ top: '400px' });
//	$('#vid4').css({ left: '581px' });
//	
//	$('#vid5').css({ top: '400px' });
//	$('#vid5').css({ right: '549px' });
}


/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function($scope, $http) {
	console.log("Page Controller reporting for duty.");
});

app.controller('MainCtrl', function($scope, $http) {
	console.log("Main Controller reporting for duty.");
	
	window.scrollTo(0,0);
	
//	createPentagon();
//	locateVideos();
});