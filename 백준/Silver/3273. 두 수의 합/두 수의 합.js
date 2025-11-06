let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let N = Number(input[0]);
let arr = input[1]
	.split(' ')
	.map(Number)
	.sort((a, b) => a - b);
let X = Number(input[2]);

let answer = 0;
let start = 0;
let end = N - 1;

while (start < end) {
	if (arr[start] + arr[end] === X) {
		answer++;
		end--;
	} else if (arr[start] + arr[end] > X) {
		end--;
	} else start++;
}

console.log(answer);