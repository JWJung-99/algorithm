import fs from 'fs';
let input = fs.readFileSync('../../input.txt').toString().trim().split('\n');
let testCase = Number(input[0]);

/**
 *
 * @param {string} str
 * @returns {string}
 */
function solution(str) {
	str = str + ' ';
	let answer = '';
	let cnt = 1;

	for (let i = 0; i < str.length - 1; i++) {
		if (str[i] === str[i + 1]) {
			cnt++;
		} else {
			answer += str[i];
			if (cnt > 1) answer += cnt;
			cnt = 1;
		}
	}

	return answer;
}

for (let i = 1; i <= testCase; i++) {
	const str = input[i];
	console.log(solution(str));
}
