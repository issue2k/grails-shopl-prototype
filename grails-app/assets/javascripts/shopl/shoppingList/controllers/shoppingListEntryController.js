//= wrapped

angular
    .module("shopl.shoppingList")
    .controller("ShoppingListEntryController", ShoppingListEntryController);

function ShoppingListEntryController(ShoppingListEntry, ShoppingList, $stateParams, $state) {
    var vm = this;

    vm.newShoppingListEntry = new ShoppingListEntry();
    vm.shoppingListId = $stateParams.shoppingListId;
    vm.shoppingListEntries = [];

    ShoppingList.get({id: $stateParams.shoppingListId}, function(data) {
        vm.shoppingList = new ShoppingList(data);
    });

    ShoppingListEntry.query({shoppingListId: $stateParams.shoppingListId}, function(data) {
        for (var i = 0; i < data.length; i++) {
            vm.shoppingListEntries.push(new ShoppingListEntry(data[i]));
        }
    }, function() {
        $state.go('shoppingListEntry.show');
    });

    vm.save = function() {
        vm.errors = undefined;
        vm.newShoppingListEntry.shoppingList = vm.shoppingListId;
        vm.newShoppingListEntry.$save({shoppingListId: $stateParams.shoppingListId}, function() {
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

    vm.delete = function(shoppingListEntry) {
        shoppingListEntry.$delete({shoppingListId: $stateParams.shoppingListId, id:shoppingListEntry.id}, function() {
            var idx = vm.shoppingListEntries.indexOf(shoppingListEntry);
            vm.shoppingListEntries.splice(idx, 1);
        });
    };

    vm.update = function(shoppingListEntry) {
        vm.shoppingListEntry = shoppingListEntry;
        shoppingListEntry.$update({shoppingListId: $stateParams.shoppingListId, id:shoppingListEntry.id}, function() {
        }, function(response) {
            var data = response.data;
            if (data.hasOwnProperty('message')) {
                vm.errors = [data];
            } else {
                vm.errors = data._embedded.errors;
            }
        });
    }
}
