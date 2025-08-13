import fs from 'fs';
let input = fs.readFileSync('../../input.txt').toString().trim().split('\n');
let testCase = Number(input[0]);

/**
 *
 * @param {number} n
 * @param {Array} arr
 * @returns {number}
 */
function solution(n, arr) {
	let answer = 0;

	for (let mentor = 1; mentor <= n; mentor++) {
		for (let mentee = 1; mentee <= n; mentee++) {
			if (mentor === mentee) continue;

			let isAble = true;
			for (let i = 0; i < arr.length; i++) {
				let mentorIndex = arr[i].indexOf(mentor);
				let menteeIndex = arr[i].indexOf(mentee);

				if (mentorIndex > menteeIndex) {
					isAble = false;
					break;
				}
			}

			if (isAble) {
				answer++;
			}
		}
	}

	return answer;
}

for (let i = 1; i <= testCase; i++) {
	let [N, M] = input[i].split(' ').map(Number);
	let tests = [];
	for (let j = i + 1; j <= i + M; j++) {
		tests.push(input[j].split(' ').map(Number));
	}
	console.log(solution(N, tests));
}
