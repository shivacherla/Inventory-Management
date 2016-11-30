<div class="container">

    <navigation class="row"></navigation>

    <div class="row">
        <h2 class="text-center">Orders Log</h2>
        <div class="col-xs-12">
            <table class="table">
                <thead>
                <tr>
                    <th>User ID</th>
                    <th>User Name</th>
                    <th>Product ID</th>
                    <th>Product Name</th>
                    <th>Product Specifications</th>
                    <th>Product Category</th>
                    <th>Order status</th>
                </tr>
                </thead>

                <tbody>
                <tr ng-repeat="order in vm.orders" ng-if="order.status > 0" >
                    <td>{{order.userid}}</td>
                    <td>{{order.username}}</td>
                    <td>{{order.productid}}</td>
                    <td>{{order.name}}</td>
                    <td>{{order.specifications}}</td>
                    <td>{{order.category}}</td>
                    <td ng-if="order.status==1"><i class="fa fa-check-circle" aria-hidden="true" style="font-size: x-large"></i></td>
                    <td ng-if="order.status==2"><i class="fa fa-times" aria-hidden="true" style="font-size: x-large"></i></td>
                </tr>
                </tbody>

            </table>
        </div>
    </div>
</div>
