function readingInEnglish(arrayOfWords) {
	// keep track of
	// if you're at the end and need to add and
	let i = 0;

	let inEnglish = '';

	for (let word of arrayOfWords) {
		i++; // increase i by 1
		if (i < arrayOfWords.length) {
			// not at the end
			inEnglish += `${word}, `;
		} else {
			// at the end
			inEnglish += `and ${word}`;
		}
	}

	return inEnglish;
}

function findLongestName(...names) {
	// pseudocode:

	// create variable for keeping track
	// of length longest name so far
	let longestNameLength = 0;

	// create array of longest names
	// to include
	let longestNames = [];
	for (let name of names) {
		// loop through each name
		// if the name is longer
		// than the longest name
		if (name.length > longestNameLength) {
			// reset longestNameLength
			longestNameLength = name.length;
			// and longest Names
			longestNames = [name];
		} else if (name.length === longestNameLength) {
			// if the name is the same length
			// add to array of longest names
			longestNames.push(name); // add name to the end longest names
		}
	}

	console.log(longestNames);

	// now that we have our longest names
	// if the longestName is only one
	// say ... is the longest
	if (longestNames.length === 1) {
		console.log(`${longestNames[0]} is the longest!`);
	} else if (longestNames.length > 1) {
		// if there are more than one
		// say ... are tied
		// name1, name2, and name3 are tied!
		console.log(readingInEnglish(longestNames) + ' are tied');
	}
}

findLongestName('Jarod', 'Sam', 'Ashley');
findLongestName('BJ', 'Megan', 'Nick');
findLongestName('Sam', 'Nick', 'Ashley', 'Jason', 'Jarod', 'Eugene', 'Batman');

// converting it a function that
// accepts 3 name arguments
// function findLongestName(...names) {
// 	let longestNameLength = 0;

// 	let longestNames = [];

// 	for (let name of names) {
// 		if (name.length > longestNameLength) {
// 			longestNameLength = name.length;
// 			longestNames = [name];
// 		}

// 		if (name.length === longestNameLength) {
// 			longestNames.push(name);
// 		}
// 	}

// 	if (longestNames.legnth === 1) {
// 		console.log(longestNames[0] + ' is the longest.');
// 	} else {
// 		let string = '';
// 		for (let name of longestNames) {
// 			string += `${name}, `;
// 		}

// 		console.log(`${string} is the longest`);
// 	}
// }
// original
//'Jarod', 'Sam', 'Ashley'
// let name1 = 'Jarod';
// let name2 = 'Sam';
// let name3 = 'Ashley';

// // the code goes here
// // name 1 > name 2 and name 1  > name 3
// // name 1 is longest
// if (name1.length > name2.length && name1.length > name3.length) {
// 	console.log(`${name1} is the longest.`);
// }
// // name 2 > name 3 and name 2 > name 1
// // name 2 is longest
// else if (name2.length > name1.length && name2.length > name3.length) {
// 	console.log(`${name2} is the longest.`);
// }
// // name 3 > name 1 and name 3 > name 2
// // name 3 is longest
// else if (name3.length > name2.length && name3.length > name1.length) {
// 	console.log(`${name3} is the longest.`);
// }
// // all 3 are equal
// else if (name1.length === name2.length && name2.length === name3.length) {
// 	console.log('all are equal');
// }
// // name 1 and name 2 are equal
// else if (name1.length === name2.length) {
// 	console.log(`${name1} and ${name2} are equal`);
// }
// // name 2 and name 3 are equal
// else if (name2.length === name3.length) {
// 	console.log(`${name2} and ${name3} are equal`);
// }
// // name 3 and name 1 are equal
// else if (name3.length === name1.length) {
// 	console.log(`${name1} and ${name3} are equal`);
// }
