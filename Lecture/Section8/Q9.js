import fs from 'fs';
let input = fs.readFileSync('../../input.txt').toString().trim().split('\n');
let testCase = Number(input[0]);

/**
 * @description 거슬러 줄 동전의 최소개수를 출력
 * @param {number} limit
 * @param {number[]} arr
 * @returns {number}
 */
function solution(limit, arr) {
	let answer = limit;

	function DFS(depth, sum) {
		if (sum > limit) return;

		if (sum === limit) {
			answer = Math.min(answer, depth);
		} else {
			for (let x of arr) {
				DFS(depth + 1, sum + x);
			}
		}
	}

	DFS(0, 0);

	return answer;
}

let index = 1;
while (testCase > 0) {
	const coins = input[index + 1].split(' ').map(Number);
	const M = Number(input[index + 2]);
	console.log(solution(M, coins));

	testCase--;
	index += 3;
}
