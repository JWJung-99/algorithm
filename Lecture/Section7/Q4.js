import fs from 'fs';
let input = fs.readFileSync('../../input.txt').toString().trim().split('\n');
let testCase = Number(input[0]);

/**
 * @description 삽입 정렬
 * @param {number[]} numbers
 * @returns {string}
 */
function solution(numbers) {
	for (let i = 1; i < numbers.length; i++) {
		let key = numbers[i];

		// i - 1번째부터 역순으로 조사
		let j;
		for (j = i - 1; j >= 0; j--) {
			// key 값보다 배열의 값이 크면 오른쪽으로(j번째를 j + 1번째로) 이동
			if (numbers[j] > key) numbers[j + 1] = numbers[j];
			// 아니라면 반복문 종료
			else break;
		}
		// 마지막 j 위치의 오른쪽에 key 값 저장
		numbers[j + 1] = key;
	}

	return numbers.join(' ');
}

let index = 1;
while (testCase > 0) {
	const numbers = input[index].split(' ').map(Number);
	console.log(solution(numbers));

	testCase--;
	index += 1;
}
