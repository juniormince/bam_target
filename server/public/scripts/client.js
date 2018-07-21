console.log('js czeck');

var app = angular.module('MyRetail', []);

app.controller('ProductController', ['$http', function ($http) {
    console.log('ProductController czeck');

    var self = this;

    self.productList = [];
    self.productDetail = [];

    self.getProducts = function () {
        $http({
            method: 'GET',
            url: '/products'
        })
            .then(function (response) {
                self.productList = response.data;
            })
            .catch(function (error) {
                console.log('error on /products', error);
            });
    }

    self.getProductDetails = function (id) {
        $http({
            method: 'GET',
            url: `/products/${id}`
        })
            .then(function (response) {
                console.log('response', response.data);
                if (response.data[0].id == id) {
                    self.productDetail = response.data;
                } else {
                    console.log('error in /products/:id');
                }
            })
    }


    //run on page load
    self.getProducts();


}]);