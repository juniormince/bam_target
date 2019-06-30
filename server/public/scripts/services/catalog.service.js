app.service('CatalogService', ['$http', function ($http) {

    var self = this;


    self.productList = { list: [] };
    self.productListApi = { list: [] };

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
                }
            })
            .catch(function (error) {
                console.log('error in /products/:id', error);
            });
    }

    //GET req for API products
    self.getProductApi = function () {
        $http({
            method: 'GET',
            url: '/products/api'
        })
        .then(function (response) {
            self.productListApi.list = response.data.product.item;
        })
        .catch(function (error) {
            console.log('error in /products/api', error);
        });
    }

    //PUT req to update product price
    // self.updatePrice = function (newPrice) {
    //     console.log(newPrice);
    //     $http({
    //         method: 'PUT',
    //         url: '/update/:id',
    //         data: newPrice
    //     })
    //         .then(function (response) {
    //             console.log('response from put', response);
    //             self.getProductDetails();
    //         })
    //         .catch(function (error) {
    //             console.log('error on update /:id', error);
    //         })
    // }



    //on page load
    self.getProducts();
    self.getProductApi();

}]);
