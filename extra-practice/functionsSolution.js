// // // 1
// // function getFullName(first, last) {
// // 	return `${first} ${last}`;
// // }

// 2
function readingInEnglish(arrayOfWords) {
	// keep track of
	// if you're at the end and need to add and
	let i = 0;

	let inEnglish = '';

	for (let word of arrayOfWords) {
		i++; // increase i by 1
		if (i < words.length) {
			// not at the end
			inEnglish += `${word}, `;
		} else {
			// at the end
			inEnglish += `and ${word}.`;
		}
	}
}
readInEnglish(['This', 'that', 'those']);

// // //
// // function readingInEnglish2(...words) {
// // 	// keep track of
// // 	// if you're at the end and need to add and
// // 	let i = 0;

// // 	let inEnglish = '';

// // 	for (let word of words) {
// // 		i++; // increase i by 1
// // 		if (i < words.length) {
// // 			// not at the end
// // 			inEnglish += `${word}, `;
// // 		} else {
// // 			// at the end
// // 			inEnglish += `and ${word}.`;
// // 		}
// // 	}
// // }
// // readInEnglish('This', 'that', 'those', 'that', 'the');

// // const reverseString = str => {
// // 	let newString = '';

// // 	for (let i = str.length - 1; i >= 0; i--) {
// // 		newString += str[i];
// // 	}

// // 	return newString;
// // };

// // const iNeedIceCream = () => {
// // 	console.log('I need ice cream');
// // };

// let car = {
// 	make: 'Ford',
// 	model: 'Escape',
// 	year: 2014,
// 	key: 'Keyless entry',
// 	speed: 0,
// 	vroom() {
// 		this.speed++;
// 	},
// 	ceo: {
// 		firstName: 'BJ',
// 		lastName: 'Clark',
// 		wife: {
// 			firstname: 'Rachel',
// 			dog: {
// 				firstName: 'Sadie',
// 				flea: {
// 					firstName: 'Steve',
// 				},
// 			},
// 		},
// 	},
// };

// car.vroom();
// console.log(car.speed);
// let car2 = car;
// car = {
// 	speed: 100,
// };
// car2.vroom();

// console.log(car.speed, car2.speed);

// console.log(car);
// console.log(car.year);
// // console.log(car.ceo.wife.dog.flea.firstName);

// function getCarDetails(key) {
// 	return car[key];
// }
// console.log('********');

// console.log(car.ceo); // ceo's first name
// console.log(car.ceo.firstName); // ceo's first name

// console.log(getCarDetails('make')); // Ford
// console.log(getCarDetails('year')); // 2014
