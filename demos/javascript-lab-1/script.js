"use strict";
let name = "Mitch Cuckovich";
let age = 25;
let birthday = "January 24";
let pineapplePizza = true;
let lifeEvents = [
	"I was born in Troy, Michigan.",
	"I went to Hope College.",
	"I participated in junior olympics when I was 10 years old.  I placed 14th in the nation in the 800 meter event.",
	"I'm a graduate of a Grand Circus bootcamp.",
];

if (pineapplePizza) {
	console.log(
		`My name is ${name} and I like pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}.`
	);
} else {
	console.log(
		`My name is ${name} and I'm not into pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}.`
	);
}

// detroitGC
// 	? console.log(
// 			`My name is ${name} and I am a student at Grand Circus in Detroit, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`
// 	  )
// 	: console.log(
// 			`My name is ${name} and I am a student at Grand Circus in Grand Rapids, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`
// 	  );

for (let i = 0; i < lifeEvents.length; i++) {
	console.log(lifeEvents[i]);
}

let counter = 0;
while (true) {
	let randomNumber = Math.floor(Math.random() * 10 + 1);
	if (randomNumber !== 5) {
		console.log(`${randomNumber} !== 5`);
		counter++;
	} else {
		counter++;
		console.log(
			`${randomNumber} === 5.  It took ${counter} iterations to randomly generate the number 5`
		);
		break;
	}
}

// Extended challenges

let hours = 50;
let wage = 10;

if (hours <= 40) {
	let paycheck = hours * wage;
	let weeks = Math.ceil(1000000 / paycheck);
	console.log(
		`It would take ${weeks} weeks to earn $1,000,000 if each paycheck was $${paycheck}`
	);
} else {
	let overtime = (hours - 40) * (wage * 1.5);
	let paycheck = 40 * wage + overtime;
	let weeks = Math.ceil(1000000 / paycheck);
	console.log(
		`It would take ${weeks} weeks to earn $1,000,000 if each paycheck was $${paycheck}`
	);
}
