function InfoController(manageService, $log) {

    var vm = this;

    vm.$onInit = $onInit;
    vm.onSubmit=submittedorder;
    vm.refreshProducts = refreshProducts;
    vm.hasProducts = hasProducts;
    vm.addFilter = addFilter;
    vm.hasFilter = hasFilter;
    vm.listCategory = listCategory;
    vm.alert = alert;

    function hasFilter() {
        return vm.filter.length > 0;
    }

    function $onInit() {
        vm.products = [];
        vm.filter = "";
        vm.refreshProducts();
        vm.listCategory();
    }
    function onUserDidSubmit(name, category, specifications) {
        return manageService.create(name, category, specifications)
            .then(vm.productsController.refreshProducts)
            .then(onUserDidReset)
            .catch(vm.showError);
    }

   function submittedorder(product){
       return manageService.order(product)
           .then(vm.alert);

   }


    function addFilter(filter) {
        vm.filter = filter;
        $log.debug(vm);
        vm.refreshProducts();
    }

    function refreshProducts() {
        var promise = manageService.list();

        if (vm.hasFilter()) {
            promise = manageService.filter(vm.filter);
        }

        return promise .then(function refreshedProducts(response) {
            vm.products = response.data;
            //console.log(vm.products);
            $log.debug(vm);
        });
    }

    function hasProducts() {
        return vm.products.length > 0;
    }

    function listCategory(){
        return manageService.listCategories()
            .then(function listCat(response){
                vm.Cat = response.data;
                console.log(vm.Cat)
        });

    }

    function alert(){
        window.alert("Order Placed")
    }
    
}
