let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [N, M, K, X] = input[0].split(' ').map(Number);

let graph = Array.from({ length: N + 1 }, () => []);
for (let i = 1; i <= M; i++) {
	let [A, B] = input[i].split(' ').map(Number);

	graph[A].push(B);
}

let distance = Array(N + 1).fill(-1);
let queue = [X];
distance[X] = 0;

while (queue.length) {
	let current = queue.shift();

	for (let neighbor of graph[current]) {
		if (distance[neighbor] === -1) {
			distance[neighbor] = distance[current] + 1;
			queue.push(neighbor);
		}
	}
}

let canReach = false;

for (let i = 1; i <= N; i++) {
	if (distance[i] === K) {
		console.log(i);
		canReach = true;
	}
}

if (!canReach) console.log(-1);
