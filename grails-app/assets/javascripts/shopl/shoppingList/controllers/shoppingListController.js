//= wrapped

angular
    .module("shopl.shoppingList")
    .controller("ShoppingListController", ShoppingListController);

function ShoppingListController(ShoppingList, ShoppingListEntry) {
    var vm = this;
    vm.shoppingLists = ShoppingList.list();
    vm.newShoppingList = new ShoppingList();

    vm.save = function() {
        vm.errors = undefined;
        vm.newShoppingList.$save({}, function() {
            vm.shoppingLists.push(angular.copy(vm.newShoppingList));
            vm.newShoppingList = new ShoppingList();
        }, function(response) {
            var data = response.data;
            if (data.hasOwnProperty('message')) {
                vm.errors = [data];
            } else {
                vm.errors = data._embedded.errors;
            }
        });
    };

    vm.delete = function(shoppingList) {
        shoppingList.$delete({}, function() {
            var idx = vm.shoppingLists.indexOf(shoppingList);
            vm.shoppingLists.splice(idx, 1);
        });
    };
}
