Ext.define('CarApp.view.cars.CarList', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.carlist',
    title: 'Cars',

    requires: [
        'CarApp.controller.CarListController'
    ],

    store: 'Cars',

    controller: 'carList',

    initComponent: function () {
        var me = this;

        me.columns = [
            {text: 'Number', dataIndex: 'number', flex: 1},
            {text: 'Colour', dataIndex: 'colour'},
            {text: 'Year', dataIndex: 'year'},
            {text: 'Brand', dataIndex: 'brand', flex: 1},
            {text: 'Model', dataIndex: 'model', flex: 1}
        ];
        me.callParent(arguments);
    },

    //Edit on double click
    listeners: {
        itemdblclick: 'onEdit'
    },

    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        items: [{
            xtype: 'button',
            text: 'Add',
            listeners: {
                click: 'onCreate'
            }
        }, {
            xtype: 'button',
            text: 'Edit',
            listeners: {
                click: 'onEdit'
            }
        }, {
            xtype: 'button',
            text: 'Delete',
            listeners: {
                click: 'onDelete'
            }
        }, {
            xtype: 'textfield',
            itemId: 'searchValue'
        }, {
            xtype: 'button',
            text: 'Search',
            listeners: {
                click: 'onSearch'
            }
        }]
    }]
});