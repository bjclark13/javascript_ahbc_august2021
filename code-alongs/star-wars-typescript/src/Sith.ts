// sith are always bad
// rank / position has to be
// lord, master, apprentices
// exJedi: boolean
// younglingBodyCount
// apprentices: Sith[]
import ForceUser from './ForceUser';
import Jedi from './Jedi';

class Sith extends ForceUser {
	readonly possibleRanks: string[] = ['lord', 'master', 'apprentice'];

	public exJedi?: boolean;
	public younglingBodyCount: number = 0;

	apprentices?: Sith[];

	// every sith inherits what every force user has, and more
	constructor(
		public name: string, // adding the modified (public) automatically sets this.name = name
		readonly species: string,
		readonly homeworld: string,
		readonly birth: number,
		public midichlorians: number
	) {
		super(name, species, homeworld, birth, false, midichlorians);
	}

	battle(opponent: Sith | Jedi) {
		console.log(`${this.name} has begun to battle ${opponent.name}`);
	}
}

export default Sith;
