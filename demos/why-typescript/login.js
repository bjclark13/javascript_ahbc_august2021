function login(user, password) {
	if ((user.password = password)) {
		return {
			firstName: user.firstName,
			lastName: user.lastName,
			lastLoggedIn: new Date(),
			groups: [],
		};
	}
}

module.exports = login;
