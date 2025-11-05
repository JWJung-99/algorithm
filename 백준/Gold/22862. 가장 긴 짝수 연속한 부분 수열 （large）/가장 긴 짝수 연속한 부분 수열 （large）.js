let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [N, K] = input[0].split(' ').map(Number);
let numbers = input[1].split(' ').map(Number);

let answer = 0;
let erased = 0;

for (let start = 0, end = 0; start < N; start++) {
	while (end < N) {
		if (numbers[end] % 2 === 1) {
			if (erased === K) break;
			erased++;
		}
		end++;
	}

	answer = Math.max(answer, end - start - erased);
	if (numbers[start] % 2 === 1) erased--;
}

console.log(answer);