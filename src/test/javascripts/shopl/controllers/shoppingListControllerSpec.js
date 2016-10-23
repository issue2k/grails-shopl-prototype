describe("shopl module", function() {
    var scope;

    beforeEach(angular.mock.module("shopl", function() {
    }));

    beforeEach(angular.mock.inject(function($rootScope) {
        scope = $rootScope.$new();
    }));

    describe("ShoppingListController", function() {

        var ctrl;

        beforeEach(angular.mock.inject(function($controller) {
            ctrl = $controller("ShoppingListController", {});
        }));

        it("should be tested", function() {
            expect(true).toEqual(false);
        });

    });

});
