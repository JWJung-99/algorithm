import fs from 'fs';
let input = fs.readFileSync('../../input.txt').toString().trim().split('\n');
let testCase = Number(input[0]);

/**
 *
 * @param {Array<number[]>} graph
 * @returns {Array<number[]>}
 */
function solution(graph) {
	return graph.sort((a, b) => {
		if (a[0] === b[0]) return a[1] - b[1];
		else return a[0] - b[0];
	});
}

let index = 1;
while (testCase > 0) {
	const N = Number(input[index]);
	const graph = [];

	for (let i = index + 1; i <= index + N; i++) {
		graph.push(input[i].split(' ').map(Number));
	}

	console.log(solution(graph));

	testCase--;
	index += N + 1;
}
