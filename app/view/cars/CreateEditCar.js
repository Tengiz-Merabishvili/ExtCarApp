Ext.define('CarApp.view.cars.CreateEditCar', {
    extend: 'Ext.window.Window',

    requires: [
        'CarApp.controller.CreateEditCarController',
        'CarApp.view.cars.EditCarModel'
    ],

    viewModel: {
        type: 'editCarModel'
    },

    xtype: 'editCar',
    title: 'Create / Edit Car',

    layout: 'fit',
    plain: true,

    width: 400,
    controller: 'createEditCar',


    items: [
        {
            xtype: 'form',

            defaultType: 'textfield',
            fieldDefaults: {
                labelWidth: 80
            },

            layout: {
                type: 'vbox',
                align: 'stretch'
            },

            bodyPadding: 5,
            border: false,

            items: [{
                fieldLabel: 'Number',
                name: 'number',
                bind: '{model.number}'
            }, {
                fieldLabel: 'Colour',
                name: 'colour',
                bind: '{model.colour}'
            }, {
                fieldLabel: 'Year',
                name: 'year',
                bind: '{model.year}'
            }, {
                fieldLabel: 'Brand',
                name: 'brand',
                bind: '{model.brand}'
            }, {
                fieldLabel: 'Model',
                name: 'model',
                bind: '{model.model}'
            }]
        }],

    buttons: [{
        text: 'Save',
        listeners: {
            click: 'onSave'
        }
    }, {
        text: 'Cancel',
        listeners: {
            click: 'onClose'
        }
    }]
});