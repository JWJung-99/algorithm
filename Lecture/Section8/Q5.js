import fs from 'fs';
let input = fs.readFileSync('../../input.txt').toString().trim().split('\n');
let testCase = Number(input[0]);

function solution(num) {
	let N = num.length;
	let total = num.reduce((acc, cur) => acc + cur, 0);
	let answer = 'NO';
	let isFinished = false;

	function DFS(depth, sum) {
		if (isFinished) return;

		if (depth === N) {
			if (total - sum === sum) {
				answer = 'YES';
				isFinished = true;
			}
		} else {
			DFS(depth + 1, sum + num[depth]);
			DFS(depth + 1, sum);
		}
	}

	DFS(0, 0);

	return answer;
}

let index = 1;
while (testCase > 0) {
	const num = input[index + 1].split(' ').map(Number);
	console.log(solution(num));

	testCase--;
	index += 2;
}
