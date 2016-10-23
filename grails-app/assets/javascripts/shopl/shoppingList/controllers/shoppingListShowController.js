//= wrapped

angular
    .module("shopl.shoppingList")
    .controller("ShoppingListShowController", ShoppingListShowController);

function ShoppingListShowController(ShoppingList, ShoppingListEntry, $stateParams, $state) {
    var vm = this;

    vm.newShoppingListEntry = new ShoppingListEntry();

    ShoppingList.get({id: $stateParams.id}, function(data) {
        vm.shoppingList = new ShoppingList(data);
        vm.shoppingListEntries = vm.shoppingList.entries;
        console.log(vm.shoppingListEntries);
    }, function() {
        $state.go('shoppingList.show');
    });

    vm.delete = function() {
        vm.shoppingList.$delete(function() {
            $state.go('shoppingList.list');
        }, function() {
            //on error
        });
    };

    vm.saveEntry = function() {
        vm.errors = undefined;
        vm.newShoppingListEntry.shoppingList = vm.shoppingList.id;
        vm.newShoppingListEntry.$save({}, function() {
            vm.shoppingListEntries.push(angular.copy(vm.newShoppingListEntry));
            vm.newShoppingListEntry = new ShoppingListEntry();
        }, function(response) {
            var data = response.data;
            if (data.hasOwnProperty('message')) {
                vm.errors = [data];
            } else {
                vm.errors = data._embedded.errors;
            }
        });
    };

    vm.deleteEntry = function(shoppingListEntry) {
        shoppingListEntry.$delete({}, function() {
            var idx = vm.shoppingListEntries.indexOf(shoppingListEntry);
            vm.shoppingListEntries.splice(idx, 1);
        });
    };
}
