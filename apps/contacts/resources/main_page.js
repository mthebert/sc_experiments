// ==========================================================================
// Project:   Contacts - mainPage
// Copyright: @2013 My Company, Inc.
// ==========================================================================
/*globals Contacts */

// This page describes the main user interface for your application.
Contacts.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page
  // load.
  mainPane: SC.MainPane.design({
    childViews: ['toolbarView', 'splitView'],

    // the top header of the page
    toolbarView: SC.ToolbarView.design({})

    // flexible container for the lists and details
    splitView: SC.SplitView.design({
      // place this beflow the toolbarview
      layout: { top: 32},
      childViews: ['groupsPanel', 'contactsPanel', 'detailsPanel'],
      // the list of groups and group control buttons
      groupsPanel: SC.View.Design(SC.SplitChild,
      {
        minimumSize: 200,
        size: 250
      }),
      // the list of contacts for the group and contact control buttons
      contactsPanel: SC.View.design(SC.SplitChild, {
        minimumSize: 200,
        size: 250
      }),
      // the details for the selected contact
      detailPanel: SC.View.design(SC.splitChild,{
        autoResizeStyle: SC.RESIZE_AUTOMATIC,
        minimumSize: 400
      })
    })
     
  })

});
