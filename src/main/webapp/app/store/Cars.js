Ext.define('CarApp.store.Cars', {
    extend: 'Ext.data.Store',


    storeId: 'Cars',
    alias: 'store.carStore',
    model: 'CarApp.model.Car',

    autoLoad: true,
    //autoSync: true,

    proxy: {
        pageParam: undefined,
        startParam: undefined,
        limitParam: undefined,
        type: 'rest',
        url: 'http://localhost:8080/cars',
        reader: {
            type: 'json'
        },
        writer: {
            type: 'json',
            writeAllFields: true
        },
        actionMethods: {create: "POST", read: "GET", update: "PUT", destroy: "DELETE"},
    }
});