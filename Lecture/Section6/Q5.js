import fs from 'fs';
let input = fs.readFileSync('../../input.txt').toString().trim().split('\n');
let testCase = Number(input[0]);

/**
 *
 * @param {string[]} arr
 * @returns {number}
 */
function solution(arr) {
	let answer = 0;
	let stack = [];

	arr.forEach((item, index) => {
		if (item === ')') {
			// 레이저('()')인 경우
			if (arr[index - 1] === '(') {
				stack.pop();
				answer += stack.length;
			}
			// 쇠막대기의 끝점인 경우
			else {
				stack.pop();
				answer++;
			}
		} else {
			stack.push(item);
		}
	});

	return answer;
}

let index = 1;
while (testCase > 0) {
	const arr = input[index].split('');
	console.log(solution(arr));

	testCase--;
	index += 1;
}
