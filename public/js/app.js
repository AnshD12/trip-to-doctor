/**
* app Module
*
* Description
*/
var app = angular.module('app', ['ui.router',"ngSanitize",
			"com.2fdevs.videogular",
			"com.2fdevs.videogular.plugins.controls",
			"com.2fdevs.videogular.plugins.overlayplay",
			"com.2fdevs.videogular.plugins.poster"]);

app.config(['$stateProvider', '$urlRouterProvider','$locationProvider', function($stateProvider, $urlRouterProvider,$locationProvider) {

	$urlRouterProvider.otherwise('/home');

	$stateProvider
	.state('home', {
		url:'/',
		templateUrl: 'home/views/home.html',
		controller : 'homeController'
	})
	.state('doctors-list', {
		url:'/doctors-list',
		templateUrl: 'doctorsList/views/doctorsList.html',
		// controller : 'homeController'
	})

	$locationProvider.html5Mode(true);
}])

.run(['$anchorScroll', function($anchorScroll) {
  $anchorScroll.yOffset = 50;   // always scroll by 50 extra pixels
}])

.controller('videoCtrl',
		["$sce", function ($sce) {
			this.config = {
				sources: [
					{src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.mp4"), type: "video/mp4"},
					{src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.webm"), type: "video/webm"},
					{src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.ogg"), type: "video/ogg"}
				],
				tracks: [
					{
						src: "http://www.videogular.com/assets/subs/pale-blue-dot.vtt",
						kind: "subtitles",
						srclang: "en",
						label: "English",
						default: ""
					}
				],
				theme: "libs/videogular-themes-default/videogular.css",
				plugins: {
					poster: "http://www.videogular.com/assets/images/videogular.png"
				}
			};
		}]
	);