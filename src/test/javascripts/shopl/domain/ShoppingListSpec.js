describe("shopl module", function() {
    var $httpBackend;

    beforeEach(angular.mock.module("shopl", function() {
    }));

    beforeEach(angular.mock.inject(function(_$httpBackend_) {
        $httpBackend = _$httpBackend_;
    }));

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    describe("ShoppingList domain", function() {

        var ShoppingList;

        beforeEach(angular.mock.inject(function(_ShoppingList_) {
            ShoppingList = _ShoppingList_;
        }));

        it("should be tested", function() {
            expect(true).toEqual(false);
        });

    });

});
