package shopl


import grails.rest.*

@Resource(uri="/shoppingListEntry", readOnly = false, formats = ['json', 'xml'])
class ShoppingListEntry {

   String title
   String description
   Boolean done = false

   static belongsTo = [
      shoppingList:ShoppingList
   ]

   static constraints = {
      title(nullable: false, blank:false)
      description(nullable:true)
      done(nullable:false)
   }

   static mapping = {
      description(type: 'text')
   }

}