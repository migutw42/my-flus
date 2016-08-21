class Store {
	constructor (state, reducers) {
		this.state = state;
		this.reducers = reducers;
	}
	dispatcher (action) {
		reducers[action.type](action, this.state);
	}
}

function createStore (state, reducers) {
	return new Store(state, reducers);
}