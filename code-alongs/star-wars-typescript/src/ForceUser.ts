// favorite power
// midicholorians
// forceStrength
// lightsaber color
// rank

import Character from './Character';

class ForceUser extends Character {
	protected favoritePower?: string;
	forceStrength?: number;
	lightSaberColor?: string;
	rank?: string;

	constructor(
		public name: string, // adding the modified (public) automatically sets this.name = name
		readonly species: string,
		readonly homeworld: string,
		readonly birth: number,
		public good: boolean,
		public midichlorians: number
	) {
		super(name, species, homeworld, birth, good);
	}

	battle(opponent: ForceUser) {
		console.log(`${this.name} has begun to battle ${opponent.name}`);
	}
}

export default ForceUser;
