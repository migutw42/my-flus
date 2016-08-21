
class MyComponent extends Component {
	onGenerate (store, args) {
		this.actions = args.actions;
	}
	changeValue (firstName, lastName) {
		this.store.dispatcher(this.actions.setName(firstName, lastName));		
	}
	render () {
		return `
			<div>
				${this.store.state.name}
			</div>
		`;
	}
}