function solution(k, ranges) {
	let graph = [[0, k]];
	let index = 1;
	while (k !== 1) {
		if (k % 2 === 0) {
			k = parseInt(k / 2);
		} else {
			k = k * 3 + 1;
		}
		graph.push([index, k]);
		index++;
	}

	let n = graph.at(-1)[0];

	let answer = [];
	for (let [a, b] of ranges) {
		let start = a;
		let end = n + b;

		let width = 0;
		for (let i = start; i < end; i++) {
			width += 0.5 * (graph[i][1] + graph[i + 1][1]);
		}

		if (start > end) answer.push(-1);
		else answer.push(width);
	}

	return answer;
}