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

    // The top header of the page.
    toolbarView: SC.ToolbarView.design({
      childViews: ['titleView'],

      titleView: SC.LabelView.design({
        controlSize: SC.LARGE_CONTROL_SIZE,
        layout: { centerY: 0, height: 24, left: 10, width: 200 },
        value: "Contacts"
      })
    }),

    // flexible container for the lists and details
    splitView: SC.SplitView.design({
      // place this beflow the toolbarview
      layout: { top: 32},
      childViews: ['groupsPanel', 'contactsPanel', 'detailPanel'],
      
      // the list of groups and group control buttons
      groupsPanel: SC.View.design(SC.SplitChild, {
        minimumSize: 140,
        size: 220,
        childViews: ['list', 'controlBar'],
        
        list: SC.ScrollView.design({
          layout: {bottom: 32},
          contentView: SC.ListView.design({
            // the content for this list is contained in Contacts.groupsController
            contentBinding: 'Contacts.groupsController.arrangedObjects',
            // if the list selection changes, update the selection on the controller
            selectionBinding: 'Contacts.groupsController.selection'
          })
        }),
        
        controlBar: SC.ToolbarView.design({
          anchorLocation: SC.ANCHOR_BOTTOM,
          
          childViews: ['addButton', 'removeButton'],
          addButton: SC.ButtonView.design({
            controlSize: SC.HUGE_CONTROL_SIZE,
            layout: {centerY: 0, left: 10, width: 40, height: 30},
            title: '+'
          }),
          removeButton: SC.ButtonView.design({
            controlSize: SC.HUGE_CONTROL_SIZE,
            layout: {centerY: 0, left: 60, width: 40, height: 30},
            title: 'x'
          })
        })
      }),
      
      // the list of contacts for the group and contact control buttons
      contactsPanel: SC.View.design(SC.SplitChild, {
        minimumSize: 140,
        size: 220,
        childViews: ['list', 'controlBar'],

        list: SC.ScrollView.design({
          layout: {bottom: 32},
          contentView: SC.ListView.design({
            // The content for this list is contained in Contacts.contactsController.
            contentBinding: 'Contacts.contactsController.arrangedObjects',

            // If the list selection changes, update the selection on the controller.
            selectionBinding: 'Contacts.contactsController.selection'
          })
        }),

        controlBar: SC.ToolbarView.design({
          anchorLocation: SC.ANCHOR_BOTTOM,
          childViews: ['addButton', 'removeButton'],
          
          addButton: SC.ButtonView.design({
            controlSize: SC.HUGE_CONTROL_SIZE,
            layout: {centerY: 0, left: 10, width: 40, height: 30},
            title: '+'
          }),
          removeButton: SC.ButtonView.design({
            controlSize: SC.HUGE_CONTROL_SIZE,
            layout: {centerY: 0, left: 60, width: 40, height: 30},
            title: '-'
          })          
        })
      }),
      
      // the details for the selected contact
      detailPanel: SC.View.design(SC.SplitChild, {
        autoResizeStyle: SC.RESIZE_AUTOMATIC,
        minimumSize: 350,

        childViews: ['image', 'fullName', 'telNumber', 'description', 'controlBar'],

        image: SC.ImageView.design({
          layout: {left: 20, top: 20, height: 120, width: 120},
          scale: SC.BEST_FIT,
          value: sc_static('sproutcore-128.png')
        }),
        
        fullName: SC.LabelView.design({
          layout: { left: 160, top: 50, height: 25, width: 150},
          value: "Tyler Keating"
        }),

        telNumber: SC.LabelView.design({
          layout: { left: 160, top: 75, height: 25, width: 100},
          value: "(000) 555-1212"
        }),
        
        description: SC.TextFieldView.design({
          isEditable: false,
          isTextArea: true,
          layout: { left: 20, top: 160, bottom: 52, right: 20},
          value: "Author of the amazing Beginner's Guide to SproutCore book and just a generally an all around nice human being."
        }),

        controlBar: SC.ToolbarView.design({
          anchorLocation: SC.ANCHOR_BOTTOM,
          childViews: ['editButton'],

          editButton: SC.ButtonView.design({
            layout: { centerY: 0, right: 10, width: 80, height: 24},
            title: 'Edit'
          })
        })
      })
    })
  })
});
