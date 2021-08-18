const name1 = 'BJ';
const name2 = 'Nick';
const name3 = 'Nick';

// name 1 > name 2 and name 1  > name 3
// name 1 is longest
if (name1.length > name2.length && name1.length > name3.length) {
	console.log(`${name1} is the longest.`);
}
// name 2 > name 3 and name 2 > name 1
// name 2 is longest
else if (name2.length > name1.length && name2.length > name3.length) {
	console.log(`${name2} is the longest.`);
}
// name 3 > name 1 and name 3 > name 2
// name 3 is longest
else if (name3.length > name2.length && name3.length > name1.length) {
	console.log(`${name3} is the longest.`);
}
// all 3 are equal
else if (name1.length === name2.length && name2.length === name3.length) {
	console.log('all are equal');
}
// name 1 and name 2 are equal
else if (name1.length === name2.length) {
	console.log(`${name1} and ${name2} are equal`);
}
// name 2 and name 3 are equal
else if (name2.length === name3.length) {
	console.log(`${name2} and ${name3} are equal`);
}
// name 3 and name 1 are equal
else if (name3.length === name1.length) {
	console.log(`${name1} and ${name3} are equal`);
}

const tempCelsius = 0;
const targetUnit = 'i';

switch (targetUnit) {
	// cases
	case 'F':
		// convert to F
		console.log(tempCelsius * (9 / 5) + 32);
		break;
	case 'C':
		// leave as is
		console.log(tempCelsius);
		break;
	case 'K':
		// convert to Kelvin
		console.log(tempCelsius + 273.15);
		break;
	default:
		console.log('TargetUnit not valid');
}

for (let i = 0; i <= 10; i++) {
	console.log(i);
}

let i = 0;
while (i < 10) {
	i++;
	console.log(i);
}

i = 0;
do {
	i++;
	console.log(i);
} while (i < 10);

// let userPass = null;
// while (userPass !== null) {
// 	prompt('Password?');
// }

// do {
// 	prompt('Password');
// } while (userPass);

const names = ['BJ', 'Nick', 'Megan'];

// THESE DO THE SAME THING
// WHICH ONE IS BETTER?
// for (let name of names) {
// 	console.log(name);
// }

// for (let i = 0; i < names.length; i++) {
// 	console.log(names[i]);
// }

const bj = {
	firstName: 'BJ',
	lastName: 'Clark',
	title: 'Instructor',
};

for (let property in bj) {
	// key
	console.log(property);

	// value 
	console.log(bj[property]); // bj.firstName 
	// bj['first-name']
}

// const key = "lastName";
// console.log(bj[key]);
// console.log(bj.firstName)
