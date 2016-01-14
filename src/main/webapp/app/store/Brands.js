Ext.define('CarApp.store.Brands', {
    extend: 'Ext.data.Store',

    storeId: 'brands',
    alias: 'store.brands',

    data: [
        {brand: 'BMW'},
        {brand: 'Mercedes'},
        {brand: 'Honda'},
        {brand: 'Porsche'}
    ]

});