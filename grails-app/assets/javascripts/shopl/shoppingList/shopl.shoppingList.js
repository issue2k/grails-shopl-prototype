//= wrapped
//= require /angular/angular 
//= require /angular/angular-ui-router
//= require /angular/angular-resource
//= require /shopl/core/shopl.core
//= require_self
//= require_tree services
//= require_tree controllers
//= require_tree directives
//= require_tree domain
//= require_tree templates

angular.module("shopl.shoppingList", ["ui.router", "ngResource", "shopl.core"]).config(config);

function config($stateProvider) {
    $stateProvider
        .state('shoppingList', {
            url: "/shoppingList",
            abstract: true,
            template: "<div ui-view></div>"
        })
        .state('shoppingList.list', {
            url: "/",
            templateUrl: "/shopl/shoppingList/list.html",
            controller: "ShoppingListController as vm"
        })
        .state('shoppingList.show', {
            url: "/show/:id",
            templateUrl: "/shopl/shoppingList/show.html",
            controller: "ShoppingListShowController as vm"
        });
}
