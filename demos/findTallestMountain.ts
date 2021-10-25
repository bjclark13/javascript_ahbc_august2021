interface Mountain {
	name: string;
	height: number;
}

function findNameOfTallestMountain(mountains: Mountain[]): string {
	// const tallest = mountains.reduce(
	// 	(startWith: Mountain, checking: Mountain) => {
	// 		// startWith  checking
	// 		// determine which one is higher
	// 		// return the highest
	// 		if (startWith.height > checking.height) {
	// 			return startWith;
	// 		} else return checking;
	// 	}
	// );

	// find max
	let tallest: Mountain = mountains[0];

	for (let mountain of mountains) {
		if (tallest.height < mountain.height) {
			tallest = mountain;
		}
	}

	return tallest.name;
}

const mountains = [
	{
		name: 'Mount BJ',
		height: 6,
	},
	{
		name: 'Mount Everest',
		height: 29029,
	},
];

const mike = {
	name: 'Michael',
	jerseryNumber: 23,
};

const bj = {
	name: 'BJ',
	jerseyNumber: 23,
};

const nick = {
	name: 'Nick',
	jersery: 99,
};

class Player {
	protected salary: number = 10000;

	readonly speed = 0;

	constructor(public name: string, public jersey: number) {
		this.salary = 100000;
		console.log(this.speed);
	}

	// SAME THING:
	/*
	public name: string;
	public jersey: number;
	constructor(name: string, jersey: number) {
		this.name = name;
		this.jersey = jersey;

		this.salary = 100000;
		console.log(this.speed);
	}
    */
}

class TeamPlayer extends Player {
	team: string;

	constructor(name: string, jersey: number, team: string) {
		// Player's constructor the intialization of the parent properties
		super(name, jersey);

		// teamplayer specific initialization
		this.team = team;
	}
}

const mike = new TeamPlayer('Michael', 23, 'Wizards'); // Michael wears 23 and plays for Wizards
mike.name; // no error
mike.salary;
//
const bj = new Player('BJ', 23); // BJ wears 23.
const nick = new Player('nick', 23);

class Car {
	private speed: number = 0; // you have change speed on our terms

	go() {
		this.speed++;
	}
}

const car = new Car();
car.go(); // 1
car.go(); // 2

car.speed = 100;
