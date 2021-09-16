'use strict';
{
	document.querySelector('form').addEventListener('submit', e => {
        console.log("submit");
		e.preventDefault();
		const data = new FormData(e.target);

		let person = {
			firstName: data.get('first-name'),
			lastName: data.get('last-name'),
		};

		window.localStorage.setItem('person', JSON.stringify(person));
	});
}
