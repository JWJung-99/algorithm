import fs from 'fs';
let input = fs.readFileSync('../../input.txt').toString().trim().split('\n');
let testCase = Number(input[0]);

function solution(arr) {
	let answer = '';

	let graph = Array.from({ length: 8 }, () => []);
	for (let [from, to] of arr) {
		graph[from].push(to);
	}

	let visited = Array(8).fill(false);
	let queue = [1];
	visited[1] = true;

	while (queue.length > 0) {
		let cur = queue.shift();
		answer += cur + ' ';

		for (let i = 0; i < graph[cur].length; i++) {
			let next = graph[cur][i];
			if (visited[next]) continue;

			visited[next] = true;
			queue.push(next);
		}
	}

	return answer;
}

let index = 1;
while (testCase > 0) {
	let arr = [];
	for (let i = index; i < index + 6; i++) {
		arr.push(input[i].split(' ').map(Number));
	}
	console.log(solution(arr));

	testCase--;
	index += 1;
}
