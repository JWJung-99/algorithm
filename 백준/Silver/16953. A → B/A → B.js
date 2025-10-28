let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 1. 그리디 알고리즘
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

// 2. BFS
let [A2, B2] = input[0].split(' ').map(Number);

let visited = new Set([A2]);
let queue = [[A2, 1]];
let hasFound2 = false;

while (queue.length) {
	let [curNum, curDist] = queue.shift();

	if (curNum === B2) {
		console.log(curDist);
		hasFound2 = true;
		break;
	}

	for (let nextNum of [curNum * 2, curNum * 10 + 1]) {
		if (visited.has(nextNum)) continue;
		if (nextNum > B2) continue;

		visited.add(nextNum);
		queue.push([nextNum, curDist + 1]);
	}
}

if (!hasFound2) console.log(-1);
