let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [N, M] = input[0].split(' ').map(Number);

let graph = Array.from({ length: N + 1 }, () => []);

for (let i = 1; i <= N - 1; i++) {
	let [from, to, dist] = input[i].split(' ').map(Number);
	graph[from].push([to, dist]);
	graph[to].push([from, dist]);
}

for (let i = N; i <= N + M - 1; i++) {
	let [start, dest] = input[i].split(' ').map(Number);
	let visited = Array(N + 1).fill(false);

	function DFS(node, dest, distance) {
		if (node === dest) console.log(distance);

		for (let [next, dist] of graph[node]) {
			if (visited[next]) continue;

			visited[next] = true;
			DFS(next, dest, distance + dist);
			visited[next] = false;
		}
	}

	visited[start] = true;
	DFS(start, dest, 0);
}
