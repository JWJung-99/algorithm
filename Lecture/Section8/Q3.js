import fs from 'fs';
let input = fs.readFileSync('../../input.txt').toString().trim().split('\n');
let testCase = Number(input[0]);

function solution(v) {
	let answer;

	function DFS(v) {
		// 종료조건
		if (v > 7) return;
		else {
			// 전위 순회
			// console.log(v);
			DFS(v * 2);

			// 중위 순회
			// console.log(v);

			DFS(v * 2 + 1);

			// 후위 순회
			// console.log(v);
		}
	}

	DFS(v);

	return answer;
}

let index = 1;
while (testCase > 0) {
	console.log(solution(1));

	testCase--;
	index += 1;
}
