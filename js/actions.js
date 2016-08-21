var actions = {
	setName : function (firstName, lastName) {
		return {
			type: 'SET_NAME',
			firstName: firstName,
			lastName: lastName
		}
	}
};