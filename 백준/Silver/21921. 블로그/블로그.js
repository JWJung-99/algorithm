let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [N, X] = input[0].split(' ').map(Number);
let visitors = input[1].split(' ').map(Number);

let sum = 0;
for (let i = 0; i < X; i++) {
	sum += visitors[i];
}

let maxSum = sum;
let maxCnt = 1;

let start = 1;
let end = X;

while (true) {
	if (end > N) break;
	sum = sum + visitors[end] - visitors[start - 1];
	if (maxSum < sum) {
		maxSum = sum;
		maxCnt = 1;
	} else if (maxSum === sum) maxCnt += 1;

	start++;
	end++;
}

if (maxSum) {
	console.log(maxSum);
	console.log(maxCnt);
} else {
	console.log('SAD');
}