import fs from 'fs';
let input = fs.readFileSync('../../input.txt').toString().trim().split('\n');
let testCase = Number(input[0]);

/**
 *
 * @param {string} word1
 * @param {string} word2
 * @returns {'YES' | 'NO'}
 */
function solution(word1, word2) {
	let answer = 'YES';

	const dict = {};

	// Object 생성
	for (let char of word1) {
		dict[char] = (dict[char] ?? 0) + 1;
	}

	// Object에서 제거
	for (let char of word2) {
		if (!dict[char] || dict[char] === 0) return 'NO';
		dict[char] -= 1;
	}

	return answer;
}

let index = 1;
while (testCase > 0) {
	const word1 = input[index];
	const word2 = input[index + 1];

	console.log(solution(word1, word2));

	testCase--;
	index += 2;
}
