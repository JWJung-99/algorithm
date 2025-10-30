let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let N = Number(input[0]);

let numbers = [];
for (let i = 1; i <= N; i++) {
	numbers.push(input[i].split(' ').map(Number));
}

for (let i = 1; i < N; i++) {
	for (let j = 0; j <= i; j++) {
		if (j === 0) numbers[i][j] += numbers[i - 1][j];
		else if (j === i) numbers[i][j] += numbers[i - 1][j - 1];
		else numbers[i][j] += Math.max(numbers[i - 1][j - 1], numbers[i - 1][j]);
	}
}

console.log(Math.max(...numbers[N - 1]));