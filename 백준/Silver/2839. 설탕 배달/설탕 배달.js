let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let N = Number(input[0]);
let answer = 0;
let hasFound = false;

while (N >= 0) {
	if (N % 5 === 0 || N === 0) {
		answer += parseInt(N / 5);
		hasFound = true;
		break;
	}

	N -= 3;
	answer++;
}

if (!hasFound) answer = -1;

console.log(answer);