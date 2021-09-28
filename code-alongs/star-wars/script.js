// Goal
//
// Call https://swapi.dev/api/films/
// this will return information about each star wars films
const films = fetch('https://swapi.dev/api/films/'); // the pager
// console.log(films);

// when the data returns
films // this is the promise
	.then(response => {
		// first then
		// then means when the API finishes downloading
		// console.log(response);

		return response.json(); // converts into javascript object with the data requested
	})
	.then(data => {
		// second then, after we get the javascript object
		// console.log(data);

		const results = data.results;

		// See documentation on .sort()
		results.sort((episode1, episode2) => {
			return episode1.episode_id - episode2.episode_id;
		});

		// do something
		for (let result of results) {
			console.log(result);
			// loop through each films
			// create a DOM element
			// and add it to our page

			// <div> <h2> film title </h2></div>
			const div = document.createElement('div');
			const h2 = document.createElement('h2');

			// setting the text of the h2 to the results from the api
			h2.innerText = result.title;
			div.append(h2);

			// adding the opening crawl
			const crawl = document.createElement('p');
			crawl.innerText = result.opening_crawl;
			div.append(crawl);

			document.querySelector('main').append(div); // add div to the end of the main

			console.log(result.title);
		}
	});

// same as previous lines
// async function getFilms() {
// 	const response = await fetch('https://swapi.dev/api/films/'); // the same as .then()
// 	const data = await response.json(); // the same as 2nd .then
// 	console.log(data);

// 	const results = data.results;

// 	for (let result of results) {
// 		console.log(result.title);
// 	}
// }

// getFilms();

// console.log response

// Display each film's opening crawl in the browser

//
