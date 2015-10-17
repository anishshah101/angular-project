'use strict';

// Declare app level module which depends on views, and components
/*
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]); */

var app = angular.module('myApp', ['ngRoute', 'ngResource', 'ui.bootstrap']);
app.config(function ($routeProvider) {
 
    $routeProvider
    .when("/discussion", {
        controller: "discussionController",
        templateUrl: "/app/views/discussion.html"
    })
    .when("/UseCases", {
        controller: "UseCasesController",
        templateUrl: "/app/views/UseCases.html"
    })
    .when("/Team", {
        controller: "TeamController",
        templateUrl: "/app/views/Team.html"
    })
    .when("/Issues", {
        controller: "IssuesController",
        templateUrl: "/app/views/Issues.html"
    })
    .when("/Timeline", {
        controller: "TimelineController",
        templateUrl: "/app/views/Timeline.html"
    })
    .when("/Wireframes", {
        controller: "WireframesController",
        templateUrl: "/app/views/Wireframes.html"
    })
    .when('/photos/:id', {
      controller: 'PhotoController',
      templateUrl: 'views/photo.html'
    })
    .otherwise({ redirectTo: "/discussion" });
 
});