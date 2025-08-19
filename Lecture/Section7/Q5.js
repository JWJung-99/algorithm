import fs from 'fs';
let input = fs.readFileSync('../../input.txt').toString().trim().split('\n');
let testCase = Number(input[0]);

/**
 * @param {number} S
 * @param {number[]} numbers
 * @returns {string}
 */
function solution(S, tasks) {
	let cache = Array.from({ length: S }).fill(0);

	for (let task of tasks) {
		// Cache Hit인 경우
		if (cache.includes(task)) {
			const index = cache.indexOf(task);

			// 한 칸씩 이동
			for (let i = index - 1; i >= 0; i--) {
				cache[i + 1] = cache[i];
			}
		}
		// Cache Miss인 경우
		else {
			// 가장 오래된 작업 제거
			cache[cache.length - 1] = 0;

			// 나머지 작업들 한 칸씩 이동
			for (let i = cache.length - 2; i >= 0; i--) {
				cache[i + 1] = cache[i];
			}
		}

		// 최근 작업에 추가
		cache[0] = task;
	}

	return cache.join(' ');
}

let index = 1;
while (testCase > 0) {
	const [S, N] = input[index].split(' ').map(Number);
	const tasks = input[index + 1].split(' ').map(Number);
	console.log(solution(S, tasks));

	testCase--;
	index += 2;
}
