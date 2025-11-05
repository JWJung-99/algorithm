let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [N, M] = input[0].split(' ').map(Number);
let arrA = input[1].split(' ').map(Number);
let arrB = input[2].split(' ').map(Number);

let indexA = 0;
let indexB = 0;
let answer = [];

while (indexA < N && indexB < M) {
	if (arrA[indexA] <= arrB[indexB]) {
		answer.push(arrA[indexA]);
		indexA++;
	} else {
		answer.push(arrB[indexB]);
		indexB++;
	}
}

if (indexA < N) answer.push(...arrA.slice(indexA));
if (indexB < M) answer.push(...arrB.slice(indexB));

console.log(answer.join(' '));