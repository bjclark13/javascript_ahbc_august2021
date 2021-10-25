import Animal from './Animal';
import Dog from './Dog';
import Corgi from './Corgi';
import Snake from './Snake';

// function called take for walk
// accepts any dog

// bark
// poop
// bark

// returns nothing

function takeForWalk(dog: Dog): void {
	console.log(dog.sound()); // bark
	console.log(dog.poop()); // poop
	console.log(dog.sound()); // bark
}

const sadie = new Dog();
takeForWalk(sadie);
console.log('-----------');
const ein = new Corgi();
takeForWalk(ein);

function seeNSay(animals: Animal[]) {
	// run the spinner
	// get a random animal and say
	// the .. goes ..
	// whole numbers between 0 - 2  // 0 - 1        // 0 - 3
	const animal = animals[Math.floor(Math.random() * animals.length)];

	console.log(`The ${animal.name} goes ${animal.sound()}`);
}
console.log('------------');

seeNSay([sadie, ein, new Snake()]);
