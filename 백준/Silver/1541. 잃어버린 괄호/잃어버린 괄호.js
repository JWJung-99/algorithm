let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const numbers = input[0].split('-');
let answer = 0;

for (let i = 0; i < numbers.length; i++) {
	let cur = numbers[i]
		.split('+')
		.map(Number)
		.reduce((acc, cur) => acc + cur);
	if (i === 0) answer += cur;
	else answer -= cur;
}

console.log(answer);