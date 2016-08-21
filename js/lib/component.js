class Component {
	constructor(store, args) {
		this.store = store;
		this.onGenerate(store, args);
	}
	onGenerate(store, args) {

	}
	toString() {
		return this.render();
	}
	render () {
		return ``;
	}
}

function createComponent(ComponentClass, store, args) {
	return new ComponentClass(store, args);
}