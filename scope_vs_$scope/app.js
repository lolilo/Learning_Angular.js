// https://thinkster.io/egghead/scope-vs-scope/

// The only thing $scope and scope have in common is that they refer to a scope. 
// What’s important is one uses dependency injection, 
// and the other is simply calling a method with the parameters already provided.

var app = angular.module('app', [])

app.controller('MyCtrl', function($scope) {
	console.log($scope);
});

// above is a shortcut for the longhand below
// longhand protects against minification 
// app.controller('MyCtrl', ['$scope', '$http', function(a, b) {
//     console.log(a);
//     console.log(b);
// }]);

app.directive('myDirective', function() {
	return {
        scope: {},
        link: function(scope, element, attrs) { // order matters here for the linking function
            console.log(element);
            console.log(scope);
        }
    };
});
