import fs from 'fs';
let input = fs.readFileSync('../../input.txt').toString().trim().split('\n');
let testCase = Number(input[0]);

/**
 * @description [냅색] 제한시간 M안에 N개의 문제 중 얻을 수 있는 최대 점수
 * @param {[number, number][]} questions
 * @param {number} M
 * @returns {number}
 */
function solution(questions, M) {
	let dp = Array(M + 1).fill(0);

	for (let [score, time] of questions) {
		for (let i = M; i >= time; i--) {
			dp[i] = Math.max(dp[i], dp[i - time] + score);
		}
	}

	return dp[M];
}

let index = 1;
while (testCase > 0) {
	const [N, M] = input[index].split(' ').map(Number);
	let questions = [];
	for (let i = index + 1; i <= index + N; i++) {
		questions.push(input[i].split(' ').map(Number));
	}
	console.log(questions);
	console.log(solution(questions, M));

	testCase--;
	index += N + 1;
}
