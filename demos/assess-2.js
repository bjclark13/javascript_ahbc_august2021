// declare a variable called batman
let batman;

// declare and initialize a variable called robin using let
let robin = 'Robin';

// what is the difference between let / cost
// aka when you would you use one over the other?
// answer: const means you can't reassign it
const iceCream = 'delicious';
iceCream = 'melted'; // won't work

const groceries = ['ice cream', 'batman'];
groceries.push('robin'); // fine
groceries = ['ice cream', 'batman', 'robin']; // won't work

// objects and arrays are usually created with const
// you can change what is in them, but you can't set the variable
// to a new object

// give me an example of a function expression
// hello
// takes in name 
// returns hello, name

// function expression is a function that is set
// as a variable
// follows the same rules of scope
const hello = function (name) {
	return `hello, ${name}`;
};

// function declaration
// scope: global
function hello(name) {
	return `hello, ${name}`;
}

// arrow function
// special kind of function expression
const hello = name => {
	return `hello, ${name}`;
};

// one parameter, you can remove the parans
// one line in the curly braces you can
// remove the return and the curly braces
const hello = name => `hello, ${name}`;

const test = function (params) { // parameters: input placeholders
    // logic goes here
    return `hello, ${params}`; // output, can set it as a variable
}

const data = test('hello'); // 'hello' is the argument
// data is what is returned, 
// we can set it as a varible
// or pass it in directly
console.log(test('hello')); // prints: hello, hello
console.log(test('everyone')); // prints: hello, everyone

let input = 15;

// if input is greater than 100
// console.log('passed')
// otherwise console.log('failed');
    // conditional
if ( input > 100 ) {
    console.log('passed');
} else {
    console.log('failed');
}

// ternary    // conditional  // if true   // if false
const message = input > 100 ? 'passed' : 'failed';
console.log(message); // 'failed'

// write a for loop
// that counts up to 100
// by 5 each time

// for (  initialization   ;  conditional   ;  reassign   )
// for ( let number = 0; number < 100; number = number + 5  )
// keep running as long as number is less than 100
for ( let number = 0; number <= 100; number += 5 ) {
    console.log(number);
}

// create an object 
// called person
// firstName = '<yourname>'
// last-name = '<yourlast>'
const person = {
    firstName: 'BJ',
    'last-name': 'Clark'  // dashes or spaces on the left side 
                          //need to be wrapped in quotes
}
console.log(person.firstName);
console.log(person['last-name']); // square brackets when dashes or spaces

// change last name to
// bezos
person['last-name'] = "bezos"; // not illegal

// can't reassign
person = {
    firstName: 'Jeff',
    'last-name': 'Bezos'
} // illegal
// with objects and arrays, you can change
// the properties inside of them
// but you can't set them equal to something 
// else

const students = [
    // put person inside of array
    person
]
// or 
const students = [];
students.push(person); // add to end of the array

// put nick in the front of the array
students.unshift('Nick');

// replace something in array
    // index, deleteCount, replacement
students.splice(1, 1, 'BJ');

// use .filter() 
// return an array containing
// students with "i" in their name
const newArray = students.filter( (student) => {
    // return true if you want keep
    // false if you want to get rid of it
    // hint: google string.includes()
    if (student.includes('i')) {// has i
        return true;
    } else {
        return false;
    }
});

// or 
function doesIncludeI(word) {
    if (word.includes('i')) {// has i
        return true;
    } else {
        return false;
    }
}
const newArray = students.filter( doesIncludeI );

// newArray is the filtered results

