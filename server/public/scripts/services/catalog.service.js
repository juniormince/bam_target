app.service('CatalogService', ['$http', function ($http) {
    console.log('CatalogService LOADED');

    var self = this;

    self.productList = { list: [] };
    // self.productDetail = [];

    self.getProducts = function () {
        $http({
            method: 'GET',
            url: '/products'
        })
            .then(function (response) {
                self.productList.list = response.data;
            })
            .catch(function (error) {
                console.log('error on /products', error);
            });
    }

    // self.getProductDetails = function (id) {
    //     $http({
    //         method: 'GET',
    //         url: `/products/${id}`
    //     })
    //         .then(function (response) {
    //             console.log('response', response.data);
    //             if (response.data[0].id == id) {
    //                 self.productDetail = response.data;
    //             } else {
    //                 console.log('error in /products/:id');
    //             }
    //         })
    // }

    //on page load
    self.getProducts();
}]);