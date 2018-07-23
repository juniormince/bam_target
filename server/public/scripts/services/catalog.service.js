app.service('CatalogService', ['$http', function ($http) {
    console.log('CatalogService LOADED');

    var self = this;

    
    self.productList = { list: [] };
    self.productDetail = { list: [] };

    //GET req for products
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

    //GET req for product details
    self.getProductDetails = function (id) {
        $http({
            method: 'GET',
            url: `/products/${id}`
        })
            .then(function (response) {
                if (response.data[0].id == id) {
                    self.productDetail.list = response.data;
                } else {
                    console.log('error in /products/:id');
                }
            })
    }

    //GET req for API products

    

    //on page load
    self.getProducts();

}]);