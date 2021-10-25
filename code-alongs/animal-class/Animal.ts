// what are things that animals do
// what does every animal have in common?

// eats
// sleeps
// poops

// climate
// habitat

// breathe
// sounds

// blood
// skin
// warm blooded
// cold blood
// skin type

abstract class Animal {
	// can't be used by itself
	abstract climate: string[];
	abstract habitat: string[];

	abstract name: string; // species name

	abstract warmBlooded: boolean;
	// skinType: string;

	breathe(oxygen: number) {
		let co2 = oxygen;

		return co2;
	}

	abstract sound(): string;
	abstract eat(): string;
	abstract sleep(): string;
	abstract poop(): string;
}

export default Animal; // exporting the class to be used in other files
