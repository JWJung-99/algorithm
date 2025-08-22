import fs from 'fs';
let input = fs.readFileSync('../../input.txt').toString().trim().split('\n');
let testCase = Number(input[0]);

/**
 * @description 재귀를 활용한 팩토리얼 구하기
 * @param {number} n
 * @returns {number}
 */
function solution(n) {
	function DFS(depth) {
		if (depth === 1) return 1;
		else return depth * DFS(depth - 1);
	}

	return DFS(n);
}

let index = 1;
while (testCase > 0) {
	const N = Number(input[index]);
	console.log(solution(N));

	testCase--;
	index += 1;
}
