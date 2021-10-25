// Snake
// warmBlooded is always false

import Animal from './Animal';

// sound make hisss
// sleep make up whatever you want
// poop() make up whatever you want

// eat() return "Swallows deer whole"

class Snake extends Animal {
	warmBlooded: boolean = false;
	climate: string[] = ['not cold'];
	habitat: string[] = ['not arctic'];

	name: string = 'snake';

	eat() {
		return 'Swallows deer whole';
	}

	sound() {
		return 'Hissssssss';
	}

	poop() {
		return 'How do snakes poop?';
	}

	sleep() {
		return 'Still frightening asleep';
	}
}

export default Snake;
