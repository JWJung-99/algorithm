import fs from 'fs';
let input = fs.readFileSync('../../input.txt').toString().trim().split('\n');
let testCase = Number(input[0]);

/**
 *
 * @param {number} limit
 * @param {Array<number[]>} arr
 * @returns {number}
 */
function solution(limit, arr) {
	let answer = 0;
	const N = arr.length;

	function DFS(depth, sum, time) {
		if (time > limit) return;

		if (depth === N) {
			answer = Math.max(answer, sum);
		} else {
			DFS(depth + 1, sum + arr[depth][0], time + arr[depth][1]);
			DFS(depth + 1, sum, time);
		}
	}

	DFS(0, 0, 0);

	return answer;
}

let index = 1;
while (testCase > 0) {
	const [N, M] = input[index].split(' ').map(Number);
	let questions = [];

	for (let i = index + 1; i <= index + N; i++) {
		questions.push(input[i].split(' ').map(Number));
	}

	console.log(solution(M, questions));

	testCase--;
	index += 2;
}
