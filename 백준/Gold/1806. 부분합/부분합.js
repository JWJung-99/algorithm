let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [N, S] = input[0].split(' ').map(Number);
let arr = input[1].split(' ').map(Number);

let start = 0;
let end = 0;
let sum = arr[end];
let answer = 1e9;

while (start < N) {
	while (end < N - 1 && sum < S) {
		end += 1;
		sum += arr[end];
	}

	if (sum >= S) {
		answer = Math.min(answer, end - start + 1);
	}

	sum -= arr[start];
	start += 1;
}

if (answer === 1e9) console.log(0);
else console.log(answer);