console.log ('js czeck');

var app = angular.module('MyRetail', []);

app.controller('ProductController', ['$http', function ($http) {
    console.log('ProductController czeck');

    var self = this;

    self.productList = [];

    self.getProducts = function () {
        $http({
            method: 'GET',
            url: '/products'
        })
            .then(function (response) {
                self.productList = response.data;
            })
            .catch(function (error) {
                console.log('error on /products GET', error);
            });
    }


    self.getProducts();


}]);