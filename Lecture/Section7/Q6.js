import fs from 'fs';
let input = fs.readFileSync('../../input.txt').toString().trim().split('\n');
let testCase = Number(input[0]);

/**
 * @description 뒤에서부터 짝꿍 찾고, 다시 현수 찾기
 * @param {number[]} heights
 * @returns {string}
 */
function solution1(heights) {
	let partner;
	for (partner = heights.length - 1; partner > 0; partner--) {
		if (heights[partner] < heights[partner - 1]) break;
	}

	let hyunsoo;
	for (hyunsoo = 0; hyunsoo < heights.length; hyunsoo++) {
		const leftOk = heights[hyunsoo] >= heights[partner - 1];
		const rightOk =
			partner + 1 >= heights.length || heights[hyunsoo] <= heights[partner + 1];

		if (leftOk && rightOk) break;
	}

	return `${hyunsoo + 1} ${partner + 1}`;
}

/**
 * @description 배열 정렬 후 비교
 * @param {number[]} heights
 * @returns {string}
 */
function solution2(heights) {
	let answer = [];
	const sortedArr = [...heights];
	sortedArr.sort((a, b) => a - b);

	for (let i = 0; i < heights.length; i++) {
		if (heights[i] !== sortedArr[i]) answer.push(i + 1);
	}

	return answer.join(' ');
}

let index = 1;
while (testCase > 0) {
	const heights = input[index].split(' ').map(Number);
	console.log(solution1(heights));
	console.log(solution2(heights));

	testCase--;
	index += 1;
}
