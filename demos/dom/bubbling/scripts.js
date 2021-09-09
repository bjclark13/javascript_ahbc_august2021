'use strict';
{
	const ps = document.querySelectorAll('p');
	const article = document.querySelector('article');
	for (let p of ps) {
		p.addEventListener('click', event => {
			// const newP = document.createElement('p');
			// newP.innerHTML = 'New paragraph!';
			// article.append(newP);
			console.log('CLICKED');
			// event.stopPropagation(); // prevent event from bubbling up
		});
	}

	article.addEventListener('click', e => {
		console.log(e.target.tagName);
		if (e.target.tagName === 'P') {
			const newP = document.createElement('p');
			newP.innerHTML = 'New paragraph!';
			article.append(newP);
		}
	});
}
