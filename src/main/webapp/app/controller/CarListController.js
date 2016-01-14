Ext.define('CarApp.controller.CarListController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.carList',

    requires: [
        'CarApp.view.cars.CreateEditCar',
        'CarApp.store.Cars'
    ],

    onCreate: function () {
        this.showEditWindow(null);
    },

    onEdit: function () {
        var grid = this.getView();
        var sm = grid.getSelectionModel().getSelection()[0];
        if (sm != null) {
            this.showEditWindow(sm);
        }
        else {
            Ext.Msg.alert('', 'Please select a record to edit.')
        }
    },

    showEditWindow: function (model) {
        var view = Ext.create('CarApp.view.cars.CreateEditCar');
        view.getViewModel().data.model = model;
        view.show();
    },

    onDelete: function () {
        var store = Ext.StoreManager.lookup('Cars');

        var grid = this.getView();
        var sm = grid.getSelectionModel().getSelection()[0];

        store.remove(sm);
        store.sync();
    },

    onSearch: function () {
        var store = Ext.StoreManager.lookup('Cars');

        var searchFieldValue = this.getView().down('#searchValue').getRawValue();

        store.load({searchString: searchFieldValue});
    }
});