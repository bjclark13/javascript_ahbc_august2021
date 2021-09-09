'use strict';
{
	//Select all of the h2 elements and turn them red.

	const h2s = document.querySelectorAll('h2');
	for (let h2 of h2s) {
		h2.style.color = 'red';
	}

	// Get the first element with a class of important and turn it green.
	document.querySelector('.important').style.color = 'green';

	//Double the font size of this paragraph every time it is clicked.
	// Once it has been clicked twice, remove the click event.

	let pSize = 16;
	let clicked = 0;
	const doubleSize = () => {
		pSize *= 2;
		document.querySelector('#font-size').style.fontSize = pSize + 'px';
		clicked++;
		if (clicked >= 2) {
			document
				.querySelector('#font-size')
				.removeEventListener('click', doubleSize);
		}
	};
	document.querySelector('#font-size').addEventListener('click', doubleSize);

	const lis = document.querySelectorAll('li');
	for (let li of lis) {
		li.addEventListener('click', e => {
			e.target.classList.add('clicked');
			alert(e.target.innerText);
		});
	}

	const extraLis = document.querySelectorAll('ul#modifying-elements>li');
	for (let li of extraLis) {
		console.log(li.innerText);
	}

	document.querySelector('form').addEventListener('submit', e => {
		console.log('clicked');
		const data = new FormData(e.target);

		const name = data.get('first-name');
		document.querySelector('#first-name').innerText = `${name}'s `;
		e.preventDefault();
	});
}
