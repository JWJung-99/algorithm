import fs from 'fs';
let input = fs.readFileSync('../../input.txt').toString().trim().split('\n');
let testCase = Number(input[0]);

/**
 *
 * @param {number} M
 * @param {number[]} numbers
 * @returns {number}
 */
function solution(M, numbers) {
	// 오름차순 정렬
	numbers.sort((a, b) => a - b);
	console.log(numbers);

	let left = 0;
	let right = numbers.length - 1;

	while (left <= right) {
		let mid = parseInt((left + right) / 2);

		if (numbers[mid] === M) return mid + 1;
		else if (M < numbers[mid]) {
			right = mid - 1;
		} else {
			left = mid + 1;
		}
	}

	return -1;
}

let index = 1;
while (testCase > 0) {
	const M = Number(input[index]);
	const numbers = input[index + 1].split(' ').map(Number);
	console.log(solution(M, numbers));

	testCase--;
	index += 2;
}
