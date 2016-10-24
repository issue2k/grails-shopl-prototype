package shopl

import grails.rest.*

@Resource(uri="/shoppingList", readOnly = false, formats = ['json', 'xml'])
class ShoppingList {

   String name

   static constraints = {
      name(nullable: false, blank:false)
   }

}