const person = {
	first: 'BJ',
	last: 'Clark',
};

const { first, last } = person;
console.log(first); // BJ

const [a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(rest); // 30, 40, 50
console.log(a); // 10
console.log(b); // 20

// rest
const array1 = [10, 20, 30];
const array2 = [...array1]; // creates a copy, but not the same
const array3 = array1;
const array4 = [0, ...array1]; // creates a copy, but not the same

array1.pop(); // remove from end
console.log(array1); // [10, 20]
console.log(array2); // [10, 20, 30]
console.log(array3); // [10, 20]
console.log(array2); // [0,10, 20, 30]
