function solution(answers) {
	let giveUps = [
		[1, 2, 3, 4, 5],
		[2, 1, 2, 3, 2, 4, 2, 5],
		[3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
	];

	let result = [];
	let maxScore = 0;

	giveUps.forEach((giveUp, index) => {
		let score = 0;
		for (let i = 0; i < answers.length; i++) {
			if (answers[i] === giveUp[i % giveUp.length]) score++;
		}

		if (score > maxScore) {
			result = [index + 1];
			maxScore = score;
		} else if (score === maxScore) {
			result.push(index + 1);
		}
	});

	return result;
}

console.log(solution([1, 3, 2, 4, 2]));
