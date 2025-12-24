function solution(s) {
	let answer = s.length;

	for (let i = 1; i <= s.length; i++) {
		let cnt = 1;
		let prev = s.slice(0, i);
		let result = '';

		for (let j = i; j < s.length; j += i) {
			let str = s.slice(j, j + i);

			if (str === prev) cnt += 1;
			else {
				result += (cnt > 1 ? cnt : '') + prev;
				prev = str;
				cnt = 1;
			}
		}

		result += (cnt > 1 ? cnt : '') + prev;

		answer = Math.min(answer, result.length);
	}

	return answer;
}