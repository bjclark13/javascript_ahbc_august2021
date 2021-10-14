import login, { User } from './login';

// how to call login(user, password, rememberMe)?
const user: User = {
	firstName: 'BJ',
	lastName: 'Clark',
	password: '3ekfsasj2',
}; //
// const user = input.user;?
// const input = {
//     user: ""
// };

// hash,
// *********
// some sort of protected data string
const password = '3ekfsasj2'; //

// boolean
// number
const rememberMe = 30; //

// array of objects
// object -- the user
// boolean -- succesful or not
login(user, password, rememberMe);
login(user, password);

// what does login return
