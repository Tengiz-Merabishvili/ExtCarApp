Ext.define('CarApp.model.Car', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'number', type: 'string'},
        {name: 'colour', type: 'string'},
        {name: 'year', type: 'string'},
        {name: 'brand', type: 'string'},
        {name: 'model', type: 'string', flex: 1},
    ]
});