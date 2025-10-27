import fs from 'fs';
let input = fs.readFileSync('../input.txt').toString().trim().split('\n');

let [N, K] = input[0].split(' ').map(Number);

let visited = Array(100001).fill(0);
let queue = [];

queue.push(N);

while (queue.length) {
	let current = queue.shift();

	if (current === K) break;

	for (let next of [current - 1, current + 1, current * 2]) {
		if (next < 0 || next >= 100001) continue;

		if (visited[next] === 0) {
			visited[next] = visited[current] + 1;
			queue.push(next);
		}
	}
}

console.log(visited[K]);
