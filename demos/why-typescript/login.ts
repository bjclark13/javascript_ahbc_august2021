export interface User {
	password: string;
	firstName: string;
	lastName: string;
}

export function login(user: User, password: string, rememberMe?: number) {
	const hello: string = '123';

	if (user.password === password) {
		return {
			firstName: user.firstName,
			lastName: user.lastName,
			lastLoggedIn: new Date(),
			groups: [],
			rememberMe: new Date().setDate(new Date().getDate() + rememberMe),
		};
	}
}

export const sayHello = (hello?: string | undefined) => {
	console.log(hello ?? 'hello!');
};
sayHello(null);

export default login;
