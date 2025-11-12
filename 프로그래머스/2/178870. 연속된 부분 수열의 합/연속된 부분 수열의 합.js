function solution(sequence, k) {
	let answer = [];

	let N = sequence.length;
	let start = 0;
	let end = 0;
	let sum = sequence[end];

	while (start <= end) {
		if (end >= N) break;

		if (sum === k) {
			answer.push([start, end]);
			sum -= sequence[start];
			start += 1;
		} else if (sum < k) {
			end += 1;
			sum += sequence[end];
		} else {
			sum -= sequence[start];
			start += 1;
		}
	}

	answer.sort((a, b) => {
		let lengthA = a[1] - a[0];
		let lengthB = b[1] - b[0];

		return lengthA - lengthB;
	});

	return answer[0];
}