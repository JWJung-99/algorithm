import fs from 'fs';
let input = fs.readFileSync('../../input.txt').toString().trim().split('\n');
let testCase = Number(input[0]);

/**
 *
 * @param {number} limit
 * @param {number[]} arr
 * @returns {number}
 */
function solution(limit, arr) {
	let answer = 0;
	let N = arr.length;

	function DFS(depth, sum) {
		// sum이 무게 제한을 넘기면 탐색 종료
		if (sum > limit) return;

		if (depth === N) {
			answer = Math.max(answer, sum);
		} else {
			// i번째 바둑이를 태우거나
			DFS(depth + 1, sum + arr[depth]);

			// 안 태우거나
			DFS(depth + 1, sum);
		}
	}

	DFS(0, 0);

	return answer;
}

let index = 1;
while (testCase > 0) {
	const [C, N] = input[index].split(' ').map(Number);
	let weights = [];
	for (let i = index + 1; i <= index + N; i++) {
		weights.push(Number(input[i]));
	}
	console.log(solution(C, weights));

	testCase--;
	index += 2;
}
