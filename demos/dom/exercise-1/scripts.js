function main() {
	// Add the "big" class to the "grow-me" paragraph.
	const growMe = document.querySelector('#grow-me');
	growMe.classList.add('big');

	// Remove the "big" class from the "shrink-me" paragraph.
	document.querySelector('#shrink-me').classList.remove('big');

	// Find all the <li>s and log their text content to the console.
	const lis = document.querySelectorAll('li');
	for (let li of lis) {
		console.log(li.innerText); // google it
	}

	// Set the href of the link to "https://www.example.com" and update the text to say "somewhere" instead of "nowhere".
	const link = document.querySelector('.link');
	link.setAttribute('href', 'https://www.example.com');
	link.innerText = 'somewhere';

	// Set the "display" CSS property of the "hide-me" paragraph to "none".
	document.querySelector('#hide-me').style.display = 'none';

	// Set the "display" CSS property of the "show-me" paragraph to "block".
	document.querySelector('#show-me').style.display = 'block';

	// Get the text that the user enters into the "name" input box '
	// get the value from the input
	const input = document.querySelector('#name');
	const name = input.value;

	// get the h1 that we want change
	console.log(name);
	const h1 = document.querySelector('h1');
	// set the inner text of that h1
	h1.innerText = `Welcome, ${name}`;

	// and use it to set a welcome message in the <h1>, e.g., "Welcome Grant!".
}
