const choice = 'medium';

if (choice === 'medium') {
	console.log('You have ordered a medium shirt');
} else if (choice == 'small') {
	console.log('You have ordered a small shirt');
} else if (choice == 'large') {
	console.log('You have ordered a large shirt');
} else {
	console.log("I don't know you ordered");
}

switch(choice) {
    case 'small': 
        console.log('You have ordered a small size');
        break;
    case '':
        console.log('');
        break;
    default: 
        console.log('hello');
        break;
}