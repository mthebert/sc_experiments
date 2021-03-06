// ==========================================================================
// Project:   Contacts.Contact
// Copyright: @2013 My Company, Inc.
// ==========================================================================
/*globals Contacts */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
Contacts.Contact = SC.Record.extend(
/** @scope Contacts.Contact.prototype */ {

  firstName: SC.Record.attr(String),

  lastName: SC.Record.attr(String),

  telNumber: SC.Record.attr(String),

  imageURI: SC.Record.attr(String),

  description: SC.Record.attr(String),

  group: SC.Record.toOne('Contacts.Group', {
    inverse: 'contacts'
  })

});
; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('contacts');