let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let N = Number(input[0]);
let numbers = [0];
for (let i = 1; i <= N; i++) numbers.push(Number(input[i]));

let visited = Array(N + 1).fill(false);
let finished = Array(N + 1).fill(false);
let result = [];

function DFS(node) {
	visited[node] = true;
	let next = numbers[node];

	if (!visited[next]) DFS(next);
	else if (!finished[next]) {
		for (let i = next; i !== node; i = numbers[i]) result.push(i);
		result.push(node);
	}
	finished[node] = true;
}

for (let i = 1; i <= N; i++) {
	if (!visited[i]) DFS(i);
}

console.log(result.length + '\n' + result.sort((a, b) => a - b).join('\n'));
