const a1 = ['BJ', 'Nick', 'Jarod'];

const a2 = a1;  // pass by reference  -- chalkboard
const a3 = [...a1] // creating a new array with the same values -- flip sign open/close
a1.shift();
console.log(a2); // this not is affected

const n1 = 1;
const n2 = n1; // pass by value

setThings(prev => [ ...prev, newThing ]);
prev.push(newThing) // no no no 


// remove Nick
const newAr = [...a1]; // copy 
newAr.splice(1, 1); // change
reuturn newAr; // return

const player = {first: "Peyton", last: "Manning"};
// change the first name to eli
const newPlayer = {...player, first: "Eli"};

console.log(newPlayer); // Eli Manning


