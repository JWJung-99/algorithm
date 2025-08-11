import fs from 'fs';
let input = fs.readFileSync('../../input.txt').toString().trim().split('\n');
let testCase = Number(input[0]);

function solution(limit, arr) {
	let answer = 0;

	function DFS(L, sum) {
		if (sum > limit) return;

		if (L === arr.length) {
			answer = Math.max(answer, sum);
		} else {
			// L번째 바둑이를 태운 경우
			DFS(L + 1, sum + arr[L]);

			// L번째 바둑이를 태우지 않은 경우
			DFS(L + 1, sum);
		}
	}

	DFS(0, 0);

	return answer;
}

for (let i = 1; i <= testCase; i++) {
	const [c, n] = input[i].split(' ').map(Number);
	const dogs = [81, 58, 42, 33, 61];
	console.log(solution(c, dogs));
}
