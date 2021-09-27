'use strict';

// ● Use the provided code as a starting point for this assessment. You will not need to modify the index.html file.
// ● Assign an id of "it" to a random element with the class of "cell". This must be done using JavaScript.

// ○ Hints: 16 elements have a class of “cell”. Think of a way to return a NodeList of all 16 elements. Perhaps you’d like to store that data in a variable?
const cells = document.querySelectorAll('.cell');

// ○ How do we generate a random integer from 0 through 15?
const index = Math.floor(Math.random() * 16);

// ○ How can we access a certain index of the NodeList?
const it = cells[index];

// ○ How do we assign an id to one instance of a NodeList using the random
// number?
it.setAttribute('id', 'it');

function turnGreen(e) {
	// e.target.style.backgroundColor = 'green';
	setBackgroundColor(e.target, 'green');
}

function setBackgroundColor(element, color) {
	element.style.backgroundColor = color;
}

// ● When any element with the class of "cell" is clicked, the background color of the cell
// turns green.
for (let cell of cells) {
	cell.addEventListener('click', turnGreen);
}

function clickIt(event) {
	// ● When the cell with the id of “it” is clicked, the element should have its background color
	// changed to red and its text changed to "IT". Also, set the background of the page body
	// to black.
	event.target.innerText = "IT";

	// document.body.style.backgroundColor = 'black';
	// event.target.style.backgroundColor = 'red';
	setBackgroundColor(event.target, 'red');
	setBackgroundColor(document.body, 'black');

	// ● Once the element with the id of “it” has been clicked, remove all click event listeners.
	for (let cell of cells) {
		cell.removeEventListener('click', turnGreen);
	}
}
it.addEventListener('click', clickIt);
