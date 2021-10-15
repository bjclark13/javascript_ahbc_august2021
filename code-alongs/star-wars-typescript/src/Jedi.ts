// beardLength
// rank / position has to be
// grandMaster, master, padawan
// jedi are always good

import ForceUser from './ForceUser';
import Sith from './Sith';

// padawans Jedi[]
class Jedi extends ForceUser {
	beardLength?: number;

	readonly possibleRanks: string[] = ['grand-master', 'master', 'padawan'];

	constructor(
		public name: string, // adding the modified (public) automatically sets this.name = name
		readonly species: string,
		readonly homeworld: string,
		readonly birth: number,
		public midichlorians: number
	) {
		super(name, species, homeworld, birth, true, midichlorians);
	}

	// jedi can only battle sith
	battle(opponent: Sith) {
		console.log(`${this.name} has begun to battle ${opponent.name}`);
	}
}

export default Jedi;
