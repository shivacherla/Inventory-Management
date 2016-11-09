angular.module('app', ['ngRoute'])
    .factory('productService', productService)
    .factory('loginService', loginService)
    .component('productForm', {
        templateUrl: 'app/product-form/product-form.tpl',
        controller: ProductFormController,
        controllerAs: 'vm',

        require: {
            productsController: '^products'
        },

        bindings: {
            data: '<',
            onSubmit: '<',
            onReset: '<'
        }
    })
    .component('product', {
        templateUrl: 'app/product/product.tpl',
        controller: ProductController,
        controllerAs: 'vm',

        require: {
            productsController: '^products'
        },

        bindings: {
            data: '<'
        }
    })
    .component('products', {
        templateUrl: 'app/products/products.tpl',
        controller: ProductsController,
        controllerAs: 'vm'
    })
    .component('navigation', { "templateUrl": 'app/navigation/navigation.tpl'})
    .component('info', {
        templateUrl: 'app/info/info.tpl',
        controller: InfoController,
        controllerAs: 'vm'
    })
    .component('home', {"templateUrl": 'app/home/home.tpl'})
    .component('login', {
        templateUrl: 'app/login/login.tpl',
        controller: LoginController,
        controllerAs: 'vm'
    })
    .config(appConfig);