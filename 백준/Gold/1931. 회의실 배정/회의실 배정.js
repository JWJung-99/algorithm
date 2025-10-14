let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let N = Number(input[0]);
let meetings = [];

for (let i = 1; i <= N; i++) {
	meetings.push(input[i].split(' ').map(Number));
}
meetings.sort((a, b) => {
	if (a[1] === b[1]) return a[0] - b[0];
	else return a[1] - b[1];
});

let answer = 0;
let prevEnd = 0;

for (let [start, end] of meetings) {
	if (start >= prevEnd) {
		answer++;
		prevEnd = end;
	}
}

console.log(answer);