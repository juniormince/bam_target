console.log('js czeck');

var app = angular.module('MyRetailApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/catalog.html',
            controller: 'ProductController as vm'
        })
        .when('/:id', {
            templateUrl: 'views/details.html',
            controller: 'DetailsController as vm'
        })
        .otherwise({
            template: '<h1 class="error">SORRY 404: page does not exist.</h1>'
        });
}]);