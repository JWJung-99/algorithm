function solution(num, m) {
	let answer = 0;

	let start = 0;
	let end = 0;
	let sum = 0;

	while (true) {
		if (sum >= m) {
			if (sum === m) answer++;
			sum -= num[start++];
		} else {
			if (end === num.length) break;
			sum += num[end++];
		}
	}

	return answer;
}

// console.log(solution());
console.log(solution([1, 2, 2, 3, 5], 5));
