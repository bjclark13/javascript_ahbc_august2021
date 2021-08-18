// Run this in the terminal using `node loops.js`

const cars = [
	{
		make: 'Ford',
		model: 'Escape',
		year: 2014,
		electric: false,
	},
	{
		make: 'Ford',
		model: 'F-150 Lightning',
		year: 2022,
		electric: true,
	},
	{
		make: 'Toyota',
		model: 'Camry',
		year: 2006,
	},
];

// using a regular for loop, display the full name of each car
// `year make model (electric)?`

// using a for...in loop inside
// of a for...of loop
// loop through each car
// and console.log() each property one by one

const mustang = {
	make: 'Ford',
	model: 'Mustang',
	year: 1968,
	electric: false,
	speed: 0,
};

// using some sort of loop
// increase the of the mustang until it hits 60 MPH

// do the same thing, with a different kind of loop
mustang.speed = 0;
let distanceFromDestination = 100;

// while (distanceFromDestination > 0) {
// descrease distanceFromDestination by 1

const isRedLight = Math.random() < 0.5; // returns true or false randomly

// if we hit a red light
// then stop the car

// otherwise
// if the speed is 0
// increase the speed to 60

// if we reached our destination
// exit the loop
// }
