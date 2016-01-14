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
    modal: true,
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
                bind: '{model.number}',
                ////TODO - create a separate file for validators
                validator: function (v) {
                    if (v === "") {
                        return "Number cannot be empty!";
                    }
                    return true;
                }
            }, {
                fieldLabel: 'Colour',
                name: 'colour',
                bind: '{model.colour}'
            }, {
                fieldLabel: 'Year',
                name: 'year',
                bind: '{model.year}',
                //TODO - create a separate file for validators
                validator: function (v) {
                    if (!isNaN(parseFloat(v)) && isFinite(v)) {
                        if (v < 1900 || v > 2016) return "Year must be between 1900 and 2016";
                        return true;
                    }
                    if (v === "") return "Year cannot be empty!";
                    return "Year must be numeric!";
                }
            },
                {
                    fieldLabel: 'Brand',
                    name: 'brand',
                    bind: '{model.brand}'
                }
                , {
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