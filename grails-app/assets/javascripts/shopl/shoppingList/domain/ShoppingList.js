//= wrapped
//= require /angular/angular-resource

angular
    .module("shopl.shoppingList")
    .factory("ShoppingList", ShoppingList);

function ShoppingList($resource) {
    var ShoppingList = $resource(
        "shoppingList/:id",
        {"id": "@id"},
        {"update": {method: "PUT"},
         "query": {method: "GET", isArray: true},
         "get": {method: 'GET',
         "change": {method: 'PUT'}}}
    );

    ShoppingList.list = ShoppingList.query;

    ShoppingList.prototype.toString = function() {
        return 'shopl.ShoppingList : ' + (this.id ? this.id : '(unsaved)');
    };

    return ShoppingList;
}