const students = [
	'Steve',
	'Joe',
	'Billy',
	'Bob',
	{
		name: 'Jorge',
	},
];

// add 'BJ' to the top of the list
students.unshift('BJ');
console.log(students);

// add nick to index 3
students.splice(3, 0, 'Nick');

// add megan to the end of the list
students.push('Megan');
console.log(students);

const removed = students.shift();
console.log(students);
console.log(removed);

students.pop();
console.log(students);

// students.splice(4, 1);
console.log(students);
console.log(students.includes('Steve')); // true
console.log(students.indexOf('Steve')); // 0

// find the first one with 3 letters
const found = students.findIndex(student => {
	// return true or false
	// of whether i found what i was looking for
	if (student.length === 3) {
		return true;
	}
});
console.log(found);

const filter = students.filter(student => {
	if (student.length === 3) {
		return true;
	}
});

console.log(filter);
// for(let student of students ) {
//   // if it's a string
//   // console.log() the string
//   if ( typeof student === 'string') {
//       console.log(student);
//   } else if (typeof student === 'object') {
//       console.log(student.name);
//   }

//   // if it's an object
//   // console.log() the object.name
// }
// console.log(students.length); // 3

// remove billy
// students.pop(); // ['Steve', 'Joe'];
// console.log(students.length); // 2

const initialData = {
	wheels: 4,
	engine: true,
	seatbelts: true,
};

const car = {
	color: 'red',
	horsePower: 1000000,
	...initialData,
};
console.log(car);

const roster = [...students, 'Grant Chirpus'];
console.log(roster);
console.log(students);
