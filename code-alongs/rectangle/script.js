// we're creating a function called logRectInfo
// taking in parameters of topLeft
function logRectInfo(topLeft, bottomRight) {
	const x1 = topLeft[0];
	const y1 = topLeft[1];

	const x2 = bottomRight[0];
	const y2 = bottomRight[1];

	const length = y1 - y2;
	const width = x2 - x1;

	const area = length * width;
	console.log('The area is: ', area);
	const perimeter = 2 * (length + width);
	console.log('The perimeter is: ', perimeter);
}

logRectInfo([0, 5], [3, 2]);

// arrow functions
const hello = name => console.log(`Hello, ${name}`);
function hello(name) {
    console.log(`Hello ${name}`);
}

function getAreaOfCircle() {
    // note: no console.log()s in here
   return area;
}

const area = getAreaOfCircle(12);
console.log(area);