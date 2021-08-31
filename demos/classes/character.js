const createCharacter = (name, initialPockets) => {
	return {
		name: name,
		location: {
			x: 0,
			y: 0,
		},
		pockets: initialPockets,
		maxPocketSize: 5,
		getItem(itemName) {
			const index = this.pockets.findIndex(item => {
				item.name === itemName;
			});

			return this.pockets.splice(index, 1);
		},
		addToPockets(item) {
			if (this.pockets.length < maxPocketSize) {
				this.pockets.push(item);
			} else {
				console.log(`${character.name} has no more room in their pockets!`);
			}
		},
	};
};

const character = createCharacter('BJ', []);
const sideCharacter = createCharacter('Nick', []);

class Character {
	constructor(name, pockets) {
		this.name = name;
		this.pockets = pockets;

		this.location = {
			x: 0,
			y: 0,
		};

        this.maxPocketSize = 5;
	}

	getItem(itemName) {
		const index = this.pockets.findIndex(item => {
			item.name === itemName;
		});

		return this.pockets.splice(index, 1);
	}

	addToPockets(item) {
		if (this.pockets.length < maxPocketSize) {
			this.pockets.push(item);
		} else {
			console.log(`${character.name} has no more room in their pockets!`);
		}
	}
}

class Car {
	// gets called automatically when you use the new keyword
	constructor(make, model, year, hybrid = false) {
		this.make = make;
		this.model = model;
		this.year = year;
		this.hybrid = hybrid;
	}

	vroom() {
		this.speed++;
	}
}

const dealership = [
	new Car('Toyota', 'Prius', 2020, true), // speed = 1
	new Car('Toyota', 'Prius', 2020, true), // speed = 0
	new Car('Toyota', 'Camry', 2020),
	new Car('Ford', 'F-150', 2020, true),
	new Car('Toyota', 'Prius', 2020, true),
];

dealership[0].vroom();
