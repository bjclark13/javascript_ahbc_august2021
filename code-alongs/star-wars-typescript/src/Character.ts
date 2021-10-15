// name
// species
// homeworld
// birth
// good T/F

// ableToFight
// groupAffilation?
// ship?

class Character {
	// properties go at top
	ableToFight: boolean = false; // starts out as false
	groupAffilation?: string; // ? means optional
	ship?: string;

	constructor(
		public name: string, // adding the modified (public) automatically sets this.name = name
		readonly species: string,
		readonly homeworld: string,
		readonly birth: number,
		public good: boolean
	) {}

	printInfo() {
		// Darth Vader is from Tatooine, and his is good | not good
		console.log(
			`${this.name} is from ${this.homeworld}, and is ${
				this.good ? 'good' : 'evil'
			}.`
		); // add not in front of good if good = false
	}
}

export default Character;
