function render (components, rootElement) {
	var renderEngine = function () {
		rootElement.innerHTML = components.map((component) => component.render()).join("\n");	
	};

	var stores = components.map((component) => component.store ).filter((x, i, self) => self.indexOf(x) === i);

	stores.forEach((store) => {
		store.state = new Proxy(store.state, {
			set (target, name, value) {
				target[name] =  value;
				renderEngine();
			}
		});
	});

	renderEngine();
}