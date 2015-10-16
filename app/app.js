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
 
    $routeProvider.when("/explore", {
        controller: "discussionController",
        templateUrl: "/app/views/discussion.html"
    });
    $routeProvider.otherwise({ redirectTo: "/explore" });
 
});