import fs from 'fs';
let input = fs.readFileSync('../../input.txt').toString().trim().split('\n');
let testCase = Number(input[0]);

function solution(N, F) {
	let answer = [];
	// 이항계수 구하기
	let dp = Array.from(Array(N + 1), () => Array(N + 1).fill(0));

	function combination(n, r) {
		if (dp[n][r] > 0) return dp[n][r];
		if (r === 0 || n === r) return 1;
		else return (dp[n][r] = combination(n - 1, r - 1) + combination(n - 1, r));
	}

	let coeffs = [];

	for (let i = 0; i < N; i++) {
		coeffs.push(combination(N - 1, i));
	}

	// 값 * coeff의 합이 F가 되는 조합 구하기
	let visited = Array.from({ length: N + 1 }).fill(false);
	let selected = [];
	let isFinished = false;

	function DFS(depth, sum) {
		if (isFinished) return;

		if (depth === N && sum === F) {
			answer.push(...selected);
			isFinished = true;
		} else {
			for (let i = 1; i <= N; i++) {
				if (visited[i]) continue;

				visited[i] = true;
				selected.push(i);
				DFS(depth + 1, sum + coeffs[depth] * i);
				selected.pop();
				visited[i] = false;
			}
		}
	}

	DFS(0, 0);

	return answer;
}

let index = 1;
while (testCase > 0) {
	const [N, F] = input[index].split(' ').map(Number);
	console.log(solution(N, F));

	testCase--;
	index += 1;
}
