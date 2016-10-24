package shopl


import grails.rest.*
import grails.converters.*

class ShoppingListEntryController extends RestfulController {
    static responseFormats = ['json', 'xml']
    ShoppingListEntryController() {
        super(ShoppingListEntry)
    }

    @Override
    def index() {
        def shoppingListId = params.shoppingListId
        respond ShoppingListEntry.where {
            shoppingList.id == shoppingListId
        }.list()
    }
}
