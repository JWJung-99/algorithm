import fs from 'fs';
let input = fs.readFileSync('../../input.txt').toString().trim().split('\n');
let testCase = Number(input[0]);

/**
 *
 * @param {number} k
 * @param {Array(number)} arr
 * @returns {number}
 */
function solution(K, arr) {
	let answer = [];
	let n = arr.length;

	for (let i = 0; i < n - 2; i++) {
		for (let j = i + 1; j < n - 1; j++) {
			for (let k = j + 1; k < n; k++) {
				answer.push(arr[i] + arr[j] + arr[k]);
			}
		}
	}

	return [...new Set(answer.sort((a, b) => b - a))][K - 1];
}

for (let i = 1; i <= testCase; i++) {
	const [n, k] = input[i].split(' ').map(Number);
	const numbers = input[i + 1].split(' ').map(Number);
	console.log(solution(k, numbers));
}
