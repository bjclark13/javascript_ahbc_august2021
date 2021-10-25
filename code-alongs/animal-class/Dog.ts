import Animal from './Animal';

class Dog extends Animal {
	climate: string[] = ['warm'];
	habitat: string[] = ['house'];
	warmBlooded: boolean = true;
    name : string = 'dog'

	sound() {
		return 'Bark';
	}

	eat() {
		return 'Burp';
	}

	sleep() {
		return 'Slept for 17 hours straight';
	}

	poop() {
		return "Only when the human doesn't have a poop bag";
	}
}

export default Dog;
