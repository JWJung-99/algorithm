const numbers = [9, 1, 5, 3, 6, 2];

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

console.log(solution1(numbers));
