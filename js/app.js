var store = createStore({name: 'Chavdar Kfir'}, reducers)
var components = [MyComponent].map((Component)=> createComponent(Component, store, {actions: actions}));

render(components, document.getElementById('root'));

var myComponent = components[0];
myComponent.changeValue('Einion', ' Pridon');