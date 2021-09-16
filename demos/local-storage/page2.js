'use strict';
{
	let person = JSON.parse(localStorage.getItem('person'));

	document.querySelector('#text').innerHTML = `
        <p>
            <strong>First Name</strong> ${person.firstName}
        </p>
    
        <p>
            <strong>Last Name</strong> ${person.lastName}
        </p>
    `;
}
