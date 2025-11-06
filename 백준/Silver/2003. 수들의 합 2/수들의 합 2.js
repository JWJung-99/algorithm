let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [N, M] = input[0].split(' ').map(Number);
let arr = input[1].split(' ').map(Number);

let answer = 0;
let start = 0;
let end = 0;
let value = arr[end];

while (start < N) {
	if (end >= N) break;

	if (value === M) {
		answer += 1;
		end += 1;
		value += arr[end];
	} else if (value < M) {
		end += 1;
		value += arr[end];
	} else {
		value -= arr[start];
		start += 1;
	}
}

console.log(answer);