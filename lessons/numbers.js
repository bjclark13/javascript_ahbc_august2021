const numbers = [2, 4, 6 , 100000];

let total = 0;
let length = numbers.length;

let i = 0;

while (i < length) {
    const number = numbers[i];
    // console.log(number);

	total = total + number; // 0, 1, 2

	i++;
    // console.log('>>', i);

}

let add = total / length;

console.log(add);
