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
		includesHitch: false,
	},
	{
		make: 'Toyota',
		model: 'Prius',
		year: 2006,
	},
];

// using a regular for loop, display the full name of each car
// `year make model (electric)?`
for (let i = 0; i < cars.length; i++) {
	const car = cars[i];
	const year = car.year;
	const make = car.make;
	const model = car.model;
	const electric = car.electric;
	const electricMessage = electric ? '(electric)' : '';
	console.log(`${year} ${make} ${model} ${electricMessage}`);
}

console.log('---------------------------');

for (let car of cars) {
	for (let key in car) {
		const value = car[key];
		console.log(`${key}: ${value}`);
	}
}

console.log('---------------------------');

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
for (let i = mustang.speed; i <= 60; i += 5) {
	mustang.speed = i;
	// console.log(mustang.speed);
}

// do the same thing, with a different kind of loop
mustang.speed = 0;
while (mustang.speed < 6) {
	mustang.speed++;
	console.log(mustang.speed);
}

console.log("---------------");

let distanceFromDestination = 100;

while (distanceFromDestination > 0) {
	// descrease distanceFromDestination by 1
	distanceFromDestination -= mustang.speed;

	const isRedLight = Math.random() < 0.5; // returns true or false randomly

	// if we hit a red light
	// then stop the car
	if (isRedLight === true) {
		mustang.speed = 0;
	} else {
		// otherwise
		// if the speed is 0
		if (mustang.speed === 0) {
			mustang.speed = 6;
		}
		// increase the speed to 60
	}

	console.log(distanceFromDestination);
	// if we reached our destination
	// exit the loop
}
