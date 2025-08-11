import fs from 'fs';
let input = fs.readFileSync('../../input.txt').toString().trim().split('\n');
let testCase = Number(input[0]);

function solution(s, e) {
	let answer = 0;
	let visited = Array.from({ length: 10001 }, () => false);
	let graph = Array.from({ length: 10001 }, () => 0);
	let queue = [];
	visited[s] = true;
	queue.push(s);

	while (queue.length) {
		let x = queue.shift();

		for (let nx of [x + 1, x - 1, x + 5]) {
			if (nx === e) return graph[x] + 1;
			if (nx > 0 && nx <= 10000 && !visited[nx]) {
				visited[nx] = true;
				queue.push(nx);
				graph[nx] = graph[x] + 1;
			}
		}
	}

	return answer;
}

for (let i = 1; i <= testCase; i++) {
	const [s, e] = input[i].split(' ').map(Number);
	console.log(solution(s, e));
}
