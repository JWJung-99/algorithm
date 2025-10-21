let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let N = Number(input[0]);
let pairs = Number(input[1]);
let network = Array.from({ length: N + 1 }, () => []);
for (let i = 2; i <= pairs + 1; i++) {
	let [from, to] = input[i].split(' ').map(Number);
	network[from].push(to);
	network[to].push(from);
}

let visited = Array(N + 1).fill(false);
let answer = 0;

function DFS(cur) {
	for (let next of network[cur]) {
		if (visited[next]) continue;

		visited[next] = true;
		answer++;
		DFS(next);
	}
}

visited[1] = true;
DFS(1);
console.log(answer);