import fs from 'fs';
let input = fs.readFileSync('../../input.txt').toString().trim().split('\n');
let testCase = Number(input[0]);

/**
 *
 * @param {number} n
 * @returns {string}
 */
function solution(n) {
	let answer = [];
	function decToBin(dec) {
		if (dec === 0) {
			return;
		} else {
			decToBin(parseInt(dec / 2));
			answer.push(dec % 2);
		}
	}

	decToBin(n);

	return answer.join('');
}

let index = 1;
while (testCase > 0) {
	const N = Number(input[index]);
	console.log(solution(N));

	testCase--;
	index += 1;
}
