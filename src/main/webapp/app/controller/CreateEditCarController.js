Ext.define('CarApp.controller.CreateEditCarController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.createEditCar',

    onSave: function () {
        var model = this.getViewModel().data.model;

        var store = Ext.StoreManager.lookup(this.getStoreId());

        //Check if the record is new
        if (model.phantom != true) {
            store.add(model);
        }

        store.sync();
        store.commitChanges();
        this.getView().close();
    },

    onClose: function () {
        var store = Ext.StoreManager.lookup(this.getStoreId());

        if (store.getUpdatedRecords().length > 0) {
            store.rejectChanges();
        }

        this.getView().close();
    },

    getStoreId: function () {
        return 'Cars';
    }
});