console.log ('js czeck');

var app = angular.module('MyRetail', []);

app.controller('ProductController', ['$http', function ($http) {
    console.log('ProductController czeck');

    var self = this;

    self.message = `hey`;


}]);