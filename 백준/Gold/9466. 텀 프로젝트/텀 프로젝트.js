let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let testCase = Number(input[0]);
let line = 1;

while (testCase--) {
	let N = Number(input[line]);
	let graph = [0, ...input[line + 1].split(' ').map(Number)];

	let visited = Array(N + 1).fill(false);
	let finished = Array(N + 1).fill(false);
	let member = 0;

	function DFS(node) {
		// 현재 노드 방문 처리
		visited[node] = true;

		let next = graph[node];
		if (!visited[next]) DFS(next);
		// 다음 노드를 방문한 적이 있는데 완료 처리가 되지 않았으면 사이클이 존재
		else if (!finished[next]) {
			for (let i = next; i !== node; i = graph[i]) member++;
			member++;
		}
		finished[node] = true;
	}

	for (let i = 1; i <= N; i++) {
		if (!visited[i]) DFS(i);
	}

	console.log(N - member);
	line += 2;
}