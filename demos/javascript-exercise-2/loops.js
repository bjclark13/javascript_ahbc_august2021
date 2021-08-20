const word = 'pizza';

let counter = 0;

while (word.length < 10) {
	word = ` ${word}`;
}

for (let i = word.length; i < 10; i++) {
	word = ` ${word}`
}
