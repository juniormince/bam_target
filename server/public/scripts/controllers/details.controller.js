app.controller('DetailsController', ['CatalogService', function (CatalogService) {
    console.log('DetailsController LOADED');

    var self = this;

    self.details = CatalogService.productDetail;


}]);