function login(user, password, rememberMe) {
	if ((user.password = password)) {
		return {
			firstName: user.firstName,
			lastName: user.lastName,
			lastLoggedIn: new Date(),
			groups: [],
			rememberMe: new Date().setDate(new Date().getDate() + rememberMe),
		};
	}
}

module.exports = login;
