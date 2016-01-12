Ext.define('CarApp.store.Cars', {
    extend: 'Ext.data.Store',

    storeId: 'Cars',
    alias: 'store.carStore',
    model: 'CarApp.model.Car',

    data: [
        {number: 'AAA-333', colour: 'Black', year: '2000', brand: 'Mercedes', model: '100'},
        {number: 'BBB-333', colour: 'Black', year: '2000', brand: 'BMW', model: '200'},
        {number: 'CCC-111', colour: 'Black', year: '2000', brand: 'Mitsubishi', model: '300'},
        {number: 'DDD-333', colour: 'Black', year: '2000', brand: 'Mercedes', model: '400'}
    ]
});