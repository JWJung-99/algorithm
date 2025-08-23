import fs from 'fs';
let input = fs.readFileSync('../../input.txt').toString().trim().split('\n');
let testCase = Number(input[0]);

/**
 *
 * @param {number} k
 * @param {number[]} numbers
 * @param {number} m
 * @returns {number}
 */
function solution(k, numbers, m) {
	let answer = 0;

	function DFS(depth, s, sum) {
		if (depth === k) {
			if (sum % m === 0) answer++;
			return;
		} else {
			for (let i = s; i < numbers.length; i++) {
				DFS(depth + 1, i + 1, sum + numbers[i]);
			}
		}
	}

	DFS(0, 0, 0);

	return answer;
}

let index = 1;
while (testCase > 0) {
	const [N, K] = input[index].split(' ').map(Number);
	const numbers = input[index + 1].split(' ').map(Number);
	const M = Number(input[index + 2]);
	console.log(solution(K, numbers, M));

	testCase--;
	index += 3;
}
