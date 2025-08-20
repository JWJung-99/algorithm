import fs from 'fs';
let input = fs.readFileSync('../../input.txt').toString().trim().split('\n');
let testCase = Number(input[0]);

/**
 * @description 배치할 수 있는 말의 개수를 세는 함수
 * @param {number[]} stable
 * @param {number} dist
 * @returns {number}
 */
function count(stable, dist) {
	let cnt = 1;
	let endpoint = stable[0];

	for (let i = 1; i < stable.length; i++) {
		if (stable[i] - endpoint >= dist) {
			cnt++;
			endpoint = stable[i];
		}
	}

	return cnt;
}

/**
 * @param {number} C
 * @param {number[]} stable
 * @returns {number}
 */
function solution(C, stable) {
	let answer = 0;
	// 마구간 좌표 오름차순 정렬
	stable.sort((a, b) => a - b);

	let left = 1;
	let right = Math.max(...stable) - Math.min(...stable);

	while (left <= right) {
		let mid = parseInt((left + right) / 2);

		// 최소 거리가 mid일 때, C마리 이상 배치할 수 있다면 답으로 가능 => 더 효율적인 답을 탐색
		if (count(stable, mid) >= C) {
			answer = mid;
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}

	return answer;
}

let index = 1;
while (testCase > 0) {
	const [N, C] = input[index].split(' ').map(Number);
	const stable = input[index + 1].split(' ').map(Number);
	console.log(solution(C, stable));

	testCase--;
	index += 2;
}
