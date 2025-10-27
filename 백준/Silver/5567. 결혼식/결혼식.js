let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let N = Number(input[0]);
let M = Number(input[1]);

let graph = Array.from({ length: N + 1 }, () => []);
for (let i = 2; i <= M + 1; i++) {
	let [a, b] = input[i].split(' ').map(Number);
	graph[a].push(b);
	graph[b].push(a);
}

let distance = Array(N + 1).fill(-1);
distance[1] = 0;
let queue = [1];

while (queue.length) {
	let cur = queue.shift();

	for (let friend of graph[cur]) {
		if (distance[friend] === -1) {
			distance[friend] = distance[cur] + 1;
			queue.push(friend);
		}
	}
}

console.log(distance.filter((item) => item > 0 && item < 3).length);