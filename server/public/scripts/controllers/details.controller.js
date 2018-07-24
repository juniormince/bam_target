app.controller('DetailsController', ['CatalogService', '$routeParams', function (CatalogService, $routeParams) {
    console.log('DetailsController LOADED');

    var self = this;

    //get id out of URL
    self.id = $routeParams.id;

    //use id to get product info
    self.getProductDetails = CatalogService.getProductDetails($routeParams.id);

    self.details = CatalogService.productDetail;

}]);