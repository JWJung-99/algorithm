let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [A, B] = input[0].split(' ').map(Number);
let answer = 1;
let hasFound = false;

while (B >= A) {
	if (B === A) {
		hasFound = true;
		break;
	}

	if (B % 10 === 1) {
		B = parseInt((B - 1) / 10);
	} else if (B % 2 === 0) {
		B = parseInt(B / 2);
	} else break;

	answer++;
}

if (!hasFound) answer = -1;

console.log(answer);