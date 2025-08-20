import fs from 'fs';
let input = fs.readFileSync('../../input.txt').toString().trim().split('\n');
let testCase = Number(input[0]);

/**
 *
 * @param {number[]} meetings
 * @returns {number}
 */
function solution(meetings) {
	let answer = 0;
	// 종료시간 기준 오름차순 정렬, 같다면 시작시간 기준 오름차순 정렬
	meetings.sort((a, b) => {
		if (a[1] === b[1]) return a[0] - b[0];
		else return a[1] - b[1];
	});

	let endTime = 0;

	for (let [st, et] of meetings) {
		if (st >= endTime) {
			answer++;
			endTime = et;
		} else {
			continue;
		}
	}

	return answer;
}

let index = 1;
while (testCase > 0) {
	const N = Number(input[index]);
	const meetings = [];

	for (let i = index + 1; i <= index + N; i++) {
		meetings.push(input[i].split(' ').map(Number));
	}

	console.log(solution(meetings));

	testCase--;
	index += N + 1;
}
