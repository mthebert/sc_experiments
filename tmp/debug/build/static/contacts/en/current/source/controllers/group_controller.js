// ==========================================================================
// Project:   Contacts.groupController
// Copyright: @2013 My Company, Inc.
// ==========================================================================
/*globals Contacts */

/** @class

  (Document Your Controller Here)

  @extends SC.ObjectController
*/
Contacts.groupController = SC.ObjectController.create(
/** @scope Contacts.groupController.prototype */ {

  contentBinding: 'Contacts.groupsController.selection'

});
; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('contacts');