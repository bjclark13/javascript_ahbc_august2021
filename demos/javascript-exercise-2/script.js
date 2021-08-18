const name1 = 'BJ';
const name2 = 'Nick';
const name3 = 'Nick';

// name 1 > name 2 and name 1  > name 3
// name 1 is longest
if (name1.length > name2.length && name1.length > name3.length) {
	console.log(`${name1} is the longest.`);
}
// name 2 > name 3 and name 2 > name 1
// name 2 is longest
else if (name2.length > name1.length && name2.length > name3.length) {
	console.log(`${name2} is the longest.`);
}
// name 3 > name 1 and name 3 > name 2
// name 3 is longest
else if (name3.length > name2.length && name3.length > name1.length) {
	console.log(`${name3} is the longest.`);
}
// all 3 are equal
else if (name1.length === name2.length && name2.length === name3.length) {
	console.log('all are equal');
}
// name 1 and name 2 are equal
else if (name1.length === name2.length) {
	console.log(`${name1} and ${name2} are equal`);
}
// name 2 and name 3 are equal
else if (name2.length === name3.length) {
	console.log(`${name2} and ${name3} are equal`);
}
// name 3 and name 1 are equal
else if (name3.length === name1.length) {
	console.log(`${name1} and ${name3} are equal`);
}