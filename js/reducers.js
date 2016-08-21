var reducers = {
	SET_NAME(data, state) {
		state.name = `${data.firstName} ${data.lastName}`;
	}
};
