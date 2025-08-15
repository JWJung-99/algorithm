import fs from 'fs';
let input = fs.readFileSync('../../input.txt').toString().trim().split('\n');
let testCase = Number(input[0]);

/**
 * @description 방법 1
 * @param {Array<number>} arr1
 * @param {Array<number>} arr2
 * @returns {Array<number>}
 */
function solution1(arr1, arr2) {
	let answer = [];

	let n1 = arr1.length;
	let n2 = arr2.length;

	for (let i = 0; i < n1; i++) {
		if (arr2.includes(arr1[i])) answer.push(arr1[i]);
	}

	return answer.sort((a, b) => a - b).join(' ');
}

/**
 *
 * @param {Array<number>} arr1
 * @param {Array<number>} arr2
 * @returns {Array<number>}
 */
function solution2(arr1, arr2) {
	let answer = [];

	arr1.sort((a, b) => a - b);
	arr2.sort((a, b) => a - b);

	let n1 = arr1.length;
	let n2 = arr2.length;
	let p1 = 0;
	let p2 = 0;

	while (p1 < n1 && p2 < n2) {
		if (arr1[p1] === arr2[p2]) {
			answer.push(arr1[p1]);
			p1++;
			p2++;
		}

		if (arr1[p1] < arr2[p2]) {
			p1++;
		}

		if (arr2[p2] < arr1[p1]) {
			p2++;
		}
	}

	return answer.join(' ');
}

while (testCase > 0) {
	let index = 1;

	const N = Number(input[index]);
	const arr1 = input[index + 1].split(' ').map(Number);
	const M = Number(input[index + 2]);
	const arr2 = input[index + 3].split(' ').map(Number);

	console.log(solution2(arr1, arr2));

	testCase--;
}
