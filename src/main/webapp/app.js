Ext.application({
    name: 'CarApp',

    views: [
        'cars.CarList'
    ],

    stores: [
        'Cars'
    ],

    launch: function () {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: {xtype: 'carlist'}
        });
    }
});