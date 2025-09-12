function solution(numbers) {
	let answer = Array(numbers.length).fill(-1);
	let stack = [];

	for (let i = 0; i < numbers.length; i++) {
		while (numbers[i] > numbers[stack.at(-1)]) {
			let index = stack.pop();
			answer[index] = numbers[i];
		}

		stack.push(i);
	}

	return answer;
}

// 첫 번째 시도: 배열 순회 => O(n^2)로 효율성 문제
function solution1(numbers) {
	let answer = [];

	for (let i = 0; i < numbers.length; i++) {
		let bigNum = -1;
		for (let j = i + 1; j < numbers.length; j++) {
			if (numbers[j] > numbers[i]) {
				bigNum = numbers[j];
				break;
			}
		}
		answer.push(bigNum);
	}

	return answer;
}
