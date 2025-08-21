import fs from 'fs';
let input = fs.readFileSync('../../input.txt').toString().trim().split('\n');
let testCase = Number(input[0]);

/**
 * @param {number} n
 * @returns {string}
 */
function solution(n) {
	function DFS(depth) {
		if (depth === 0) return;
		else {
			DFS(depth - 1);
			console.log(depth);
		}
	}

	DFS(n);
}

let index = 1;
while (testCase > 0) {
	const N = Number(input[index]);
	solution(N);

	testCase--;
	index += 1;
}
