// {
// Slides 1
// echo/print escape make
console.log(escape.make);
console.log(escape['a- -a -a -']); // spaces or dashes, use [''];

// && and
// echo true if escape is a ford and it's electric
if (escape.make === 'Ford' && escape.electric === true) {
	console.log('&& TRUE');
} else {
	console.log('&& FALSE'); // here
}

// || or
// echo true if escape is a ford or it''s electric
if (escape.make === 'Ford' || escape.electric === true) {
	console.log('|| TRUE');
} else {
	console.log('|| FALSE'); // here
}

// echo f150 model
console.log(f150.model);
// > < >= <=
// if year is greater than 2019, 
// echo "Fuel economy rules apply"
if (f150.year > 2019) {
    console.log("Fuel economy rules apply");
}

// if (f150.make) {
//     console.log("MAKE") 
// } else {
//     console.log("NOT TRUE")
// }
// vs
// if (f150.make === true) {
//     console.log("MAKE") 
// } else {
//     console.log("NOT TRUE")
// }

// echo camry full name:
// year + make + model //  (isElectric)
console.log(camry.year + ' ' + camry.make + ' ' + camry.model);
console.log(`${camry.year} ${camry.make} ${camry.model}`); // preferred

// Numbers vs String
// console.log(1 + 1);
// console.log('1' + '1');
// console.log(1 + '1'); // 11


// console.log(1 == '1');
// console.log(1 === '1');
// }

// Loops 
