//= wrapped
//= require /angular/angular-resource

angular
    .module("shopl.shoppingList")
    .factory("ShoppingListEntry", ShoppingListEntry);

function ShoppingListEntry($resource) {
    var ShoppingListEntry = $resource(
        "shoppingList/:shoppingListId/entries/:id",
        {"id": "@id"},
        {"update": {method: "PUT"},
         "query": {method: "GET", isArray: true},
         "get": {method: 'GET'}}
    );

    ShoppingListEntry.list = ShoppingListEntry.query;

    ShoppingListEntry.prototype.toString = function() {
        return 'shopl.ShoppingListEntry : ' + (this.id ? this.id : '(unsaved)');
    };

    return ShoppingListEntry;
}