Ext.define('CarApp.model.Car', {
    extend: 'Ext.data.Model',

    identifier: 'uuid',

    idProperty: 'id',
    fields: [
        {name: 'id', type: 'string'},
        {name: 'number', type: 'string'},
        {name: 'colour', type: 'string'},
        {name: 'year', type: 'int'},
        {name: 'brand', type: 'string'},
        {name: 'model', type: 'string'}
    ]
});