// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
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

const array123 = [1,1,1,1,1,1,1,1,1];
// const first = array123[0];
// const seconds = array123[1]
// const third = array123[2];
const [firstN,second, third] = array123
console.log(firstN);

// rest
const array1 = [10, 20, 30];
const array2 = [...array1]; // creates a copy, but not the same
const array3 = array1;
const array4 = [0, ...array1]; // creates a copy, but not the same

array1.pop(); // remove from end
console.log(array1); // [10, 20]
console.log(array2); // [10, 20, 30]
console.log(array3); // [10, 20]
console.log(array4); // [0,10, 20, 30]

const newPerson = { ...person, first: 'Bradley' }; // creates a copy, with changes
console.log(newPerson);

function hello(thisThing, thatThing, ...thoseThings) {
	console.log('this>> ', thisThing);
	console.log('that>> ', thatThing);
	console.log('those>> ', thoseThings);
}
hello(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
