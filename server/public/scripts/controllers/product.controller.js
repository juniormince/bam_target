app.controller('ProductController', ['CatalogService', function (CatalogService) {
    console.log('ProductController LOADED');

    var self = this;

    self.productList = CatalogService.productList;
    self.productListApi = CatalogService.productListApi;

    self.getProductDetails = function (id) {
        CatalogService.getProductDetails(id);
    }

}]);