function solution(x, y, n) {
	let answer = -1;

	let queue = [];
	queue.push([x, 0]);

	while (queue.length) {
		let [cur, cnt] = queue.shift();

		if (cur === y) {
			answer = cnt;
			break;
		}

		for (let i = 0; i < 3; i++) {
			let next;

			if (i === 0) next = cur + n;
			else if (i === 1) next = cur * 2;
			else next = cur * 3;

			if (next <= y) {
				queue.push([next, cnt + 1]);
			}
		}
	}

	return answer;
}

console.log(solution(10, 40, 5));
console.log(solution(10, 40, 30));
console.log(solution(2, 5, 4));
